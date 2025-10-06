import React from 'react'

const Card = (obj) => {
  
  return (
    
    <>
       <div className=' bg-blue-300 flex flex-col items-center shadow-2xl h-[10rem] gap-1.5 rounded-3xl bg-purple-100-100'>
          <h1 className='font-extrabold'>{obj.name}</h1>
           <span>id :<span>{obj.id}</span></span>
          <p className='font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, suscipit.</p>
          <button className='bg-gray-400 p-2 rounded-2xl'>view profile</button>
        </div>
    </>
  )
}
export default Card
