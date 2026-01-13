import './App.css'
import React, { useState } from 'react'

const App = () => {
  // const [toggle, setToggle] = useState(false);
  // const [status, setStatus] = useState(null);

  // function handleToggle() {
  //   setToggle(!toggle);
  // }

  // function StatusMessage({ status }) {
  //   const statusMap = {
  //     loading: <p>Loading...</p>,
  //     success: <p>Success Data</p>
  //   };

  //   return statusMap[status] || null;
  // }

  return (
    <>
      {/* {toggle ? <h1>Content</h1> : <h1>Toggle please</h1>}

      <div>
        {/* <button onClick={handleToggle}>Toggle</button> */}

        {/* <button onClick={() => setStatus("success")}>
          Load Data
        </button> */}
      {/* </div> */}

      {/* ✅ THIS is where rendering happens */}
      {/* <StatusMessage status={status} /> */} 

      <div>
       <button className=' rounded-3xl bg-pink-500'>X</button>
      </div>

      <button>Delete</button>
      <button>Edit</button>
    </>
  );
}

export default App;
