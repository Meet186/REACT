import { useEffect } from 'react'
import './App.css'
import Counter from './Components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from './Store/Features/counter/Users/userSlice';
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userReducer);
  console.log(state);
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <>
      <Counter />
    </>
  )
}

export default App
