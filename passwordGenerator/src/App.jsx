import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [passworrd, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setisNumberAllowed] = useState(false);
  const [isCharaterAllowed, setisCharaterAllowed] = useState(false);
  const [savePassword,setSavePassword] = useState([]);
  const passwordInputRef = useRef(null);
  function passwordGenernator() {
    let password = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) str += "0123456789";
    if (isCharaterAllowed) str += "><?{}:;!@#$%&^*()_+/";
    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      password += str.charAt(randomIndex);
    }
    setPassword(password);
  }

  useEffect(() => {
    passwordGenernator();
  }, [length,isCharaterAllowed,isNumberAllowed])

  
  console.log(passwordInputRef);
  

  return (
    <>
      <div className=' select-none flex flex-col gap-5 max-w-[30rem] m-auto'>
        <h1 className='text-center mt-5 font-bold'>Password Generator </h1>
        <input type="text"
          placeholder='Password'
          id='password-input'
          value={passworrd}
          ref={passwordInputRef}
          readOnly={true}
          className='outline-none border-none bg-gray-200 px-3 py-1 rounded-lg text-black'
        />
        <input type="range"
          min={0}
          max={100}
          value={length}
          
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />

        <label htmlFor="numberAllowed">
          <input type="checkbox"
            id="numberAllowed"
            checked={isNumberAllowed}
            onChange={(e) => setisNumberAllowed(e.target.checked)}
          />
          Number Allowed
        </label>

        <label htmlFor="characterAllowed">
          <input type="checkbox"
            id="characterAllowed"
            checked={isCharaterAllowed}
            onChange={(e) => setisCharaterAllowed(e.target.checked)}
          />
          Character Allowed
        </label>

        <button className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer'
        onClick={copyPassword}
        >Copy Password</button>
        <button className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer'
        onClick={resetPassword}
        >Reset Password</button>
        <button className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer'
        onClick={savepass}
        >Save Password</button>
      </div>

          {savePassword.map((el,index)=>{
           return <p key={index}>{el}</p>
          })}
   
    </>  
  )
  function resetPassword() {
        setLength(8);
        setisNumberAllowed(false);
        setisCharaterAllowed(false);
      }

      function savepass(){
        setSavePassword((prevpass)=>[...prevpass,passworrd])
      }

      function copyPassword(){
        navigator.clipboard.writeText(passworrd);
        passwordInputRef.current.select();
      }
}
export default App
