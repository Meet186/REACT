import { useState } from 'react'
import './App.css'

function App() {

 let [count,setCount] = useState(0);

  function increament(){
    count = count+1;
    setCount(count);
  }

    function decrement(){
    count = count-1;
    setCount(count);
  }
 
  function reset(){
    setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      {/* <div className='btns'>
        <button onClick={increament}>Increament</button>
        <button onClick={decrement}>Decreament</button>
        <button onClick={()=>{setCount(0)}}>🧓Reset</button>
      </div> */}

      <div className='btns'>
        <Button text="Increament" func={increament}/>
        <Button text="Decrement" func={decrement}/>
        <Button text="Reset" func={reset}/>

      </div>
    </>
  )
}

function Button(props){
  return(
      <button onClick={props.func}>{props.text}</button>
  )
}

export default App
