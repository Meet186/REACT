import { useState } from 'react'
import './App.css'
import Popup from './Components/Popup'

function App() {
  const [popup, setPopup] = useState(false);
  const [editpopup,seteditpopup] = useState(false);

  return (
    <>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setPopup(true)}
      >
        Delete
      </button>
      <Popup popup={popup} setPopup={setPopup} title={"Are you want to delete it"}/>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => seteditpopup(true)}
      >
        Edit
      </button>
      <Popup popup={editpopup} setPopup={seteditpopup} title={"Are you want to Edit it"}/>
    </>
  )
}

export default App
