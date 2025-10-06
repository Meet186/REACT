import React from 'react'
import Button from './Button'
const Hero = () => {
  return (
   <div className='max-w-[55rem]  m-auto text-center py-[8rem]'>
      <h1 className='text-7xl font-serif font-bold'>The Best Way To <span
      className='bg-amber-300 rounded-2xl px-3'>Review</span> Creative Assets</h1>
      <p className='text-lg my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore optio nam doloremque voluptatum reiciendis sunt ea odio quaerat minus?</p>
      <div className='text-3xl'>
        <Button title="Join Subscription"/>
      </div>
     </div>
  )
}

export default Hero
