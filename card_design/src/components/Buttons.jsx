import React from 'react'

const Buttons = (props) => {
  return (
     <button className='bg-blue-500 rounded-full p-3 w-[8rem] m-1 text-white font-bold' >{props.title}</button>
  )
}

export default Buttons
