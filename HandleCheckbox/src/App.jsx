import { useState } from 'react'
import './App.css'
function App() {
  const [formData, setFormData] = useState({
    email: '',
    tc: false
  })
  function handleChange(event) {
    const { name, type, value, checked } = event.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  function sumbitHandler(e){
    e.preventDefault();
    console.log(formData);
    
  }
  return (
    <>
      <form onSubmit={sumbitHandler}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br /><br />
        <label htmlFor="tc">
          Terms & Conditions
          <input
            type="checkbox"
            name="tc"
            id="tc"
            checked={formData.tc}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Sumbit</button>
      </form>
    </>
  )
}

export default App
