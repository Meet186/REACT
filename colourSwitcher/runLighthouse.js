import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { SourceMapConsumer } from 'source-map';

const execAsync = promisify(exec);
const LOCAL_URL = 'http://localhost:5173'; // local server
const DIST_PATH = 'dist/assets';           // Vite build output

// Serve build locally
async function serveBuild() {
  const server = exec('npx serve -s dist -l 5173');
  await new Promise(res => setTimeout(res, 4000)); // wait for server
  return server;
}

// Find JS bundles
function getBundles() {
  const files = fs.readdirSync(DIST_PATH);
  return files.filter(f => f.endsWith('.js')).map(f => ({
    js: path.join(DIST_PATH, f),
    map: path.join(DIST_PATH, f + '.map')
  }));
}

// Run Lighthouse
async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { port: chrome.port, output: 'json', onlyCategories: ['performance'] };
  const runner = await lighthouse(url, options);
  fs.writeFileSync('lighthouse-report.json', runner.report);
  await chrome.kill();
  return JSON.parse(runner.report);
}

// Map bundle offsets to source
async function mapOffsetToSource(bundleMap, line, column) {
  if (!fs.existsSync(bundleMap)) return null;
  const rawMap = JSON.parse(fs.readFileSync(bundleMap, 'utf8'));
  const consumer = await new SourceMapConsumer(rawMap);
  const pos = consumer.originalPositionFor({ line, column });
  consumer.destroy();
  return pos;
}

// Extract snippet
function extractSnippet(file, line, context = 5) {
  if (!fs.existsSync(file)) return '';
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const start = Math.max(0, line - context);
  const end = Math.min(lines.length, line + context);
  return lines.slice(start, end).join('\n');
}

// Main
(async () => {
  console.log('🏗️ Building Vite app...');
  await execAsync('npm run build');

  console.log('🌐 Serving build locally...');
  const server = await serveBuild();

  console.log('🚦 Running Lighthouse...');
  const report = await runLighthouse(LOCAL_URL);

  const bundles = getBundles();
  const unusedJS = report.audits['unused-javascript']?.details?.items || [];

  const audits = report.audits;
 const topTasks = report.audits['main-thread-tasks']?.details?.items || [];

if (!topTasks.length) {
  console.log('✅ No main-thread JS tasks detected.');
} else {
  console.log('🧩 Mapping top JS tasks to source files:\n');

  for (const task of topTasks.slice(0, 5)) { // top 5 tasks
    const callFrame = task.stackTrace?.[0]; // first call frame
    if (!callFrame) continue;

    const bundle = bundles.find(b => callFrame.url.includes(path.basename(b.js)));
    if (!bundle) continue;

    const line = callFrame.lineNumber || 1;
    const column = callFrame.columnNumber || 1;

    const pos = await mapOffsetToSource(bundle.map, line, column);
    if (!pos?.source) continue;

    const filePath = path.join('src', pos.source);
    const snippet = extractSnippet(filePath, pos.line);

    console.log(`⚠️ File: ${filePath}:${pos.line}`);
    console.log('Snippet:\n', snippet);
    console.log('-----------------------------------------\n');
  }
}

  server.kill();
  console.log('✅ Done');
})();
