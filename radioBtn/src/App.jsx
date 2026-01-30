import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender, setGender] = useState('')
  const languages = ['html','css','java','javascript'];
  console.log(gender);
  
  return (
    <>
      {/* <label htmlFor="male">Male
        <input
          type="radio"
          name="gender"
          id="male"
          checked = {gender === 'male'}
          value={'male'}
          onChange={(e) =>setGender( e.target.value)}
        />
      </label>
      <br />
       <label htmlFor="female">Female
        <input
          type="radio"
          name="gender"
          id="female"
          checked = {gender === 'female'}
          value={'female'}
          onChange={(e) =>setGender( e.target.value)}
        />
      </label> */}
      {languages.map((item)=>{
        return (<label key={item} htmlFor={item}>{item}
        <input 
          type="radio"
          name={item}
          id={item}
          checked = {gender === item}
          value={item}
          onChange={(e) =>setGender( e.target.value)}
        />
      </label>)
      })}

    </>
  )
}

export default App
