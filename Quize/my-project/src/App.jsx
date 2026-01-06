import { useState } from 'react'
import './App.css'
import Questions from './Components/Questions'
import Timer from './Components/Timer'
import Result from './Components/Result'
function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [isOver, setisOver] = useState(false)
  const [score, setScore] = useState(0)
  const handleStart = () => {
    setHasStarted(true)
    setisOver(false)
    setScore(0)
  }
  const handleRetry = () => {
    setHasStarted(false)
    setisOver(false)
    setScore(0)
  }
  return (
    <>
      {!hasStarted && (
        <>
          <h1 id="heading">
            Give 50 Questions Answer in <span className='font-extrabold'>60</span> Seconds
          </h1>
          <button className='m-3' onClick={handleStart}>Start</button>
        </>
      )}
      {hasStarted && !isOver && (
        <>
          <Timer setisOver={setisOver} />
          <Questions setisOver={setisOver} setScore={setScore} />
        </>
      )}

      {isOver && (
        <>
          <Result score={score} />
          <button className='m-3' onClick={handleRetry}>Retry</button>
        </>
      )}
    </>
  )
}

export default App

