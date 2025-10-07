import React from 'react'

const Footer = (props) => {
  console.log(props);
  
  return (
    <div>
      <div  className='bg-red-600 p-20'>Footer
        <div>{props.data}</div>
      </div>
    </div>
  )
}

export default Footer
