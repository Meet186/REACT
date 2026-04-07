import Navbar from '../Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
function App() {
 
  
  
  return (
    <>  
    

     <div className='w-full'>
       <Navbar/>
       <Outlet/>
     </div>
 
    </>
  )
}

export default App
