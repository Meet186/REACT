import React, { useState } from 'react'
import questions from './questions.json'

const Questions = ({ setisOver, setScore }) => {
    console.log(questions);
    
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOptionClick = (selectedItem) => {
    if (selectedItem === questions[currentIndex].answer) {
      setScore(prev => prev + 1)
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setisOver(true)
    }
  }

  return (
    <div className='flex flex-col mt-8 mb-5 gap-3.5'>
      <h2 className='text-3xl'>{questions[currentIndex].question}</h2>

      {questions[currentIndex].options.map(option => (
        <button key={option} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  )
}

export default Questions
