import React from 'react'

const Result = ({ score }) => {
  return (
    <h2 className='m-5'>
      You Scored :
      <span className='bg-yellow-300 text-black text-2xl rounded-4xl px-4 font-bold'>
        {score}
      </span>
      out of 50
    </h2>
  )
}

export default Result

