import { useState, useEffect } from 'react'

const Timer = ({ setisOver }) => {
  const [leftTime, setLeftTime] = useState(60)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setLeftTime(prev => {
        if (prev <= 1) {
          clearInterval(intervalID)
          setisOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalID)
  }, [setisOver])

  const displayTime = `${String(Math.floor(leftTime / 60)).padStart(2, '0')} : ${String(leftTime % 60).padStart(2, '0')}`

  return (
    <div className='m-5 font-extrabold'>
      ⏱️ Time Left : {displayTime}
    </div>
  )
}

export default Timer
