import React from 'react'

const Alert = ({conntent,from}) => {
  return (
    <>
    <h1>Content from {from}</h1>
    {conntent}
    </>
  )
}

export default Alert
