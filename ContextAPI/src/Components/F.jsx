import React from 'react'
import { useMyContext } from '../MyContext'

const F = () => {
  const {count} = useMyContext();
  return (
    <div className='bg-amber-400 p-4'>
      F
      {count}
    </div>
  )
}

export default F
