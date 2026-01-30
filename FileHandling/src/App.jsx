import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    name : '',
    email : ''
  })

  function handleName(e){
    setData({...data, name : e.target.value});
  }

   function handleEmail(e){
    setData({...data, email : e.target.value});
  }

  function handleData(event){
    const {name,value} = event.target;
    setData({...data,[name] : value});
  }
  return (
    <>
      {/* <input type="text" value={state} placeholder='Enter name' onChange={(event)=>{
        setState(event.currentTarget.value);
      }}/>
      <button onClick={()=> setState('')}>Clear</button>
      <h1>{state}</h1> */}

      {/* handle multiple input */}
      {/* <div>
        <input type="text" value={data.name} placeholder='Name' onChange={handleName} />
        <br /><br />
         <input type="text" value={data.email} placeholder='email' onChange={handleEmail} />
        <br /><br />
        <button onClick={()=> setData({name : '',email : ''})}>Clear</button>

        <h2>{data.name}</h2>
        <h2>{data.email}</h2>

      </div> */}

      {/* handle with one state */}
       <div>
        <input type="text" name='name' value={data.name} placeholder='Name' onChange={handleData} />
        <br /><br />
         <input type="text" name='email' value={data.email} placeholder='email' onChange={handleData} />
        <br /><br />
        <button onClick={()=> setData({name : '',email : ''})}>Clear</button>

        <h2>{data.name}</h2>
        <h2>{data.email}</h2>

      </div>
    </>
  )
}

export default App
