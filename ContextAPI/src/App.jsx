import { useContext, useState } from 'react'
import A from './Components/A'
import B from './Components/B'
import './App.css'
import { useMyContext } from './MyContext'

function App() {

  const {setCount} =  useMyContext();
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="bg-red-500 p-40">
          APP
          <div className='flex gap-2'>
            <A />
            <B />
          </div>
           <button onClick={()=> setCount((prev)=> prev + 1) } className='bg-black rounded-2xl text-white m-5'>Increment</button>
        </div>
       
      </div>

     
    </>
  )
}

export default App
