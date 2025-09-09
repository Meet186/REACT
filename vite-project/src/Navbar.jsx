import React from 'react'

//props
const Navbar = (props) => {
   
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.link}</h1>
    </div>
  )
}

export default Navbar
