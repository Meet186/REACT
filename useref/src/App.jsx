import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // const handleCount = (()=>{
  //   setCount(count + 1);
  // })
  // const inputref = useRef();
  // const handleFocous = ()=>{
  //   console.log(inputref.current);
    
  // }
  //  useEffect(()=>{
  //   console.log("reRender hua hai");
    
  //  })

  const [random,setRandom] =  useState(0);

  function generateNumber(){
    let no = Math.floor(Math.random() * 100);
    setRandom(no);
  }

  const count = useRef(0);

  useEffect(()=>{
    count.current += 1;
   console.log(count);
   
  })

  return (
    <>
      <div>{random}</div>
      <div>Random number generate till now : {count.current}</div>
      <button onClick={generateNumber}>generate</button>
    </>
  )
}

export default App
