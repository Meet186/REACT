import React, { useState } from 'react'
import About from './about.jsx'
import Hero from './Hero.jsx'
const Layout = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <div className="bg-green-500 w-full flex h-[20rem]  p-2  ">
        Layout
        <div className=' flex items-center justify-center gap-24 w-full'>
          <Hero count={count} />
          <About count={count} />
        </div>
      </div>
    </div>
  )
}

export default Layout
