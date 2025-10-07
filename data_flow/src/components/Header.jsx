import React from 'react'

const header = (props) => {

  let data = ["mayank","nanish","harsh"];
  function passData(){
    props.func(data);
  }

  return (
   
    <div>
      <h1 onClick={passData} className='bg-amber-300 p-20'>Header</h1>
    </div>
  )
}

export default header
