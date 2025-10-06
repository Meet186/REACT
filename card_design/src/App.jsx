import './App.css'
import UserCard from './components/UserCard'
function App() {
  return (
    <>
     <div className='grid grid-cols-4 gap-[1rem] m-[2rem] max-[970px]:grid-cols-3'>
       <UserCard/>
       <UserCard/>
       <UserCard/>
       <UserCard/>
       <UserCard/>
       <UserCard/>
     </div>
    </>
  )
}
export default App
