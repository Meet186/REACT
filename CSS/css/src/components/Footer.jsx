import React from 'react'

const Footer = () => {
  return (
    <div className='bg-red-300 py-3 '>
        <header className='grid grid-cols-5 text-xl text-black/80 max-w-[60rem] m-auto'>
          <h1 className='text-3xl'><span className='font-extrabold text-[#ff2903]'>B</span>rand</h1>
          <div className='flex flex-col gap-2 text-xl items-center'>
             <h1 className='font-extrabold'>Company</h1>
            <a href="">Award</a>
            <a href="">Carrer</a>
            <a href="">Company</a>
            <a href="">Contact</a>
          </div>

            <div className='flex flex-col gap-2 text-xl items-center'>
             <h1 className='font-extrabold'>What we Do</h1>
            <a href="">SEO Service</a>
            <a href="">On-page Service</a>
            <a href="">Keyword Research</a>
            <a href="">SEO Audit</a>
          </div>

             <div className='flex flex-col gap-2 text-xl items-center'>
             <h1 className='font-extrabold'>Who We Serve</h1>
            <a href="">B2B</a>
            <a href="">Ecommerce</a>
            <a href="">Finance</a>
            <a href="">Health</a>
          </div>
          <div className='flex flex-col gap-2 text-xl items-center'>
             <h1 className='font-extrabold'>Where We Are</h1>
            <a href="">India</a>
            <a href="">Austrila</a>
            <a href="">London</a>
            <a href="">Dubai</a>
          </div>
        </header>
         <div className='w-full h-[1px] bg-black m-3' ></div>
         <div className='flex justify-center gap-[2rem]'>
            <p className='font-extrabold'>All Right reserved 2025</p>
         <div className='font-medium'>
            <a href="">Privacy policy</a>
            <a href="">Term & Conditions</a>

         </div>
         </div>
      </div>
  )
}

export default Footer
