import { useState } from 'react'
import './App.css'


function App() {
  
 const [payment,setPaymentMode] = useState('');
 const names = ['nanish','meet','harsh','vedic','kushagra','kunal','chintu'];
 const [name,setName] = useState('');
  return (
    <>
     {/* <select value={payment} onChange={(e)=>
      setPaymentMode(e.target.value)
     }>
      <option value="">----Select Below ----</option>
      <option value="upi">UPI</option>
      <option value="card">CARD</option>
      <option value="visa">VISA</option>
     </select> */}

     {/* DYNAMIC SELECTDROPDOWN */}
     <select value={name} onChange={(e)=> setName(e.target.value)}>
      <option value="" >--Select Below--</option>
      {names.map((e)=>
        <option value={e} key={e}>{e}</option>
      )}
     </select>
     
    </>
  )
}

export default App
