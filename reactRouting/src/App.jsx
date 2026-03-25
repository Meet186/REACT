import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Help from './Components/Help'
import DetailsContact from './Components/DetailsContact'
import  {Navigate} from 'react-router-dom'
import A1 from './Components/A1'
function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='a1' element={<A1/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/:id' element={<DetailsContact/>}/>
        <Route path='/help' element={<Navigate to={'/'} replace/>}/>
      </Routes>
    </>
  )
}

export default App
