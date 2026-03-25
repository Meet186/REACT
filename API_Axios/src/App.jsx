import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
  const [userDetails, setuserDetails] = useState({
    name: "",
    age: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserDetails(prevDetails => {
      return (
        {
          ...prevDetails,
          [name]: value,
        }
      )
    })
  }
  const postData = async () => {
    const response = await axios({
      url: "https://69bfb45d72ca04f3bcb90423.mockapi.io/users",
      method: 'POST',
      data: userDetails
    })
  }
  const fetchData = async () => {
    const response = await axios.get(
      "https://69bfb45d72ca04f3bcb90423.mockapi.io/users"
    )
    setUsers(response.data)

  }
  



  return (
    <>
      <div>
        <button
          className='rounded-4xl bg-amber-300 w-[300px]'
          onClick={fetchData}
        >
          Fetch Data
        </button>

        <form action="">
          <input type="text" placeholder='name' name='name' value={userDetails.name} onChange={handleChange} />
          <input type="number" name="age" id="" placeholder='age' value={userDetails.age} onChange={handleChange} />
        </form>
        <button className='text-white' onClick={postData} >postData</button>

      </div>
    </>
  )
}

export default App