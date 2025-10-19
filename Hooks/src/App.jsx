import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [decre, setDecrement] = useState(0);
  useEffect(() => {
    console.log("useffect call");

  }, [count])


  function increment() {
    setCount(prev => prev + 1)
  }

  function decrement() {
    setDecrement(decre - 1);
  }

  return (
    <>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>

      <h1>{decre}</h1>
      <button onClick={decrement}>decrement</button>


    </>
  )
}

export default App
