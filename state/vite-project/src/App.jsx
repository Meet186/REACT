import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let obj = {
    name : "meet",
    age : 21,
    id : 1818,
  }
  const [count, setCount] = useState(0);
  const [data,updateData] = useState(obj);

  console.log(data);
  
  function increment(){
    // batch update
    // perform only one time create a batch of same action so output will be last call mean 1 will update in ui
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //  function update work on current state value
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

  }

   
  function increment2(){
   setCount((prev)=>{
    return prev + 1;
   })
  }
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment} >increment</button>
      
      
    </>
  )
}

export default App
