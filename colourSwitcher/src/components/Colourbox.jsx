import React from 'react'

const Colourbox = ({color}) => {
  return (
   <div
    style={
        {
            backgroundColor : color,
        }
    }
    className='
     w-[300px]
     h-[300px]
     bg-red-500 
     rounded-2xl
     font-extrabold 
     text-center
     content-center
     m-auto
     border
     text-5xl
    '
   >{color.toUpperCase()}</div>
  )
}

export default Colourbox
