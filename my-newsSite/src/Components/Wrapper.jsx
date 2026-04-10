import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[80rem] m-auto'>
      {children}
    </div>
  )
}

export default Wrapper
