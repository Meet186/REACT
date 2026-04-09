import './App.css'
import useMyStore from './store'
function App() {

const state = useMyStore();

// single state 
// const count = useMyStore((state)=> state.count)
console.log(state);

const handleClick = ()=>{
  state.increment();
}

const capatlizeName = ()=>{
  state.capatlizeName();
}
  return (
   <>
    <h1 className='bg-red-500'>Hello</h1>
     {state.count} 
     <button onClick={handleClick}>Increment</button>
     <button onClick={capatlizeName}>Capatlize</button>
     {state.name}
   </>
  )
}

export default App
