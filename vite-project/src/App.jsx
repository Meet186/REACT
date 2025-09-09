import { useState } from 'react'
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
export default App
