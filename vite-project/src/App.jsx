import { useState } from 'react'
<<<<<<< HEAD
import './App.css'

import Navbar  from './Navbar'
function Component(){
  return (
    <>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci repellendus, ipsa quasi dolore qui nam modi. Consequuntur reprehenderit, earum doloremque voluptatem eos ex aspernatur adipisci quaerat odit maxime ipsa totam?</p>
     <button onClick={() => alert('Button clicked!')}>Click me</button>
    </>
  )
}
function Component2(){
  return (
    <>
     <p>This is a second component.</p>
     <button onClick={() => alert('Button clicked!')}>Click me</button>
    </>
  )
}
function App() {
  function increament(){
    setCount(count + 1);
    
  }
  //state
  const [count,setCount] = useState(0);
  return (
    <>
      <Component/>
      <Component2/>
      <Navbar title="meet" link="google.com" />
      <button onClick={increament}>Increament</button>
      {count}
    </>
  )
}
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

>>>>>>> 1c2b205c195c7c1b0e466921455bae75d69ed114
export default App
