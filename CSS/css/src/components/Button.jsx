import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-400  rounded-lg px-4 py-1 cursor-pointer'>{props.title}</button>
  )
}

export default Button
