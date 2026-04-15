import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToProduct, Increment } from './REDUX/actions/productAction';
import Products from './Products';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.productReducer)
 console.log(state);
  useEffect(()=>{
    console.log("rerender....");
    
  })
 console.log(state);
 const handleAddToProduct = ()=>{
    dispatch(addToProduct({
      id : 1,
      name : "Apple"
    }))
 }
 const handleCount = ()=>{
  dispatch(Increment())
 }
  return (
   <>
    <button onClick={handleAddToProduct}>click</button>
    <button onClick={handleCount}>count</button>
    <Products/>
   </>
  )
}

export default App
