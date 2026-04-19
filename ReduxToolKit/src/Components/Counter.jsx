import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,changeId } from '../Store/Features/counter/counterSlice';
const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.counter);
    // console.log(state);
    const [id,setId] = useState('');
    const handleIncrement = ()=>{
        dispatch(increment())
    }
    const handleChangeID = ()=>{
        dispatch(changeId(id))
    }
  return (
    <>
        <h1>coyunter</h1>
       {/* <h2>{state.value}</h2> */}
       <button onClick={handleIncrement}>Increment</button>
       <input value={id} type="text" onChange={(e)=> setId(e.target.value)} />
       <button onClick={handleChangeID}>change id</button>
    </>
  )
}

export default Counter
