import React from 'react'
import { FaRegHeart,FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import Buttons from './Buttons';
import Icons from './Icons';
const Usercard = () => {
  return (
    <>
      <div className='shadow-2xl rounded-2xl overflow-hidden'>
        {/* TOP PART  */}
        <div className='w-full h-[10rem] bg-blue-500 relative'>
          <img className=' border-8 p-1 bg-white border-blue-500 left-1/2 -translate-x-1/2 translate-y-1/4 h-full rounded-full aspect-square object-cover object-top absolute' src="data:image/png;base64,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" alt="" />
        </div>
        {/* HEADING PART */}
        <div className='flex flex-col items-center pt-[3rem]  font-serif'>
          <h1>CODING & WIPE</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* ICONS */}
          <Icons/>

          <div>
            <Buttons title="Subscribe"/>
            <Buttons title="Message"/>
          </div>

          <div className='flex items-center gap-2 text-1xl m-5'>
            <FaRegHeart/>
            <span>60.4k</span>
            <div className='w-[2px] h-[1.5rem] bg-gray-400'></div>

            <FaRegComment/>
            <span>20.2k</span>
            <div className='w-[2px] h-[1.5rem] bg-gray-400'></div>

            <BiShare/>
            <span>10.4k</span>
            
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Usercard
