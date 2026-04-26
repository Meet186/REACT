import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import EmployeeList from './Components/EmployeeList'
import DeletePopup from './Components/DeletePopup'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployee } from './Store/features/empolyee/employeeThunk'
import Highlights from './Components/Highlights'
function App() {
  const dispatch = useDispatch();
  const showHighlights = useSelector(state => state.popupReducer.showHighlights);
  
  useEffect(()=>{
    dispatch(getEmployee())
  },[])
  
  return (
   <>
     <div className='flex flex-col min-h-screen w-full'>
      <Navbar/>
      <div className='flex-1'>
        <DeletePopup/>
        {showHighlights ? <Highlights/> : <EmployeeList/>}
      </div>
      <Footer/>
     </div>
   </>
  )
}

export default App
