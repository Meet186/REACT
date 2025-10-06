import React from 'react'
import { FaYoutube,FaInstagramSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Icons = () => {
    return (
        <div>
            <div className='flex gap-[1rem] p-2'>
                <FaYoutube className='bg-red-600 p-2 text-white text-4xl rounded-full' />
                <FaInstagramSquare className=' bg-gradient-to-tr from-[#feda75] via-[#d62976] via-[#962fbf] to-[#4f5bd5] p-2 text-white text-4xl rounded-full' />
                <FaSquareXTwitter className='bg-black p-2 text-white text-4xl rounded-full' />
                <FaFacebook className='bg-blue-800 p-2 text-white text-4xl rounded-full' />
            </div>
        </div>
    )
}

export default Icons
