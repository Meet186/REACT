import React from 'react'
import Button from './Button'

const header = () => {
  return (
    <div className='bg-red-300 py-3 '>
        <header className='flex justify-between items-center text-black/80 max-w-[60rem] m-auto'>
          <h1 className='text-3xl'><span className='font-extrabold text-[#ff2903]'>B</span>rand</h1>
          <div className='flex gap-7 text-xl items-center'>
            <a href="">Features</a>
            <a href="">Use Cases</a>
            <a href="">Integrations</a>
            <a href="">Protfolio</a>
          </div>
          <Button title="Join Us"/>
        </header>
      </div>
  )
}

export default header
