import React from 'react'

const Button = ({color,setSelectedColor}) => {
   
    function setColor(){
     setSelectedColor(color);
    }

  return (
   <button
    onClick={setColor}
    style={{
    backgroundColor : color,
   }}>{color}</button>

  )
}

export default Button
