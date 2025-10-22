
import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Colourbox from './components/Colourbox';
function App() {
const colours = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "lightgreen"
];
  const [selectedColor,setSelectedColor] = useState('transparent');
  return (
    <>
    <h1>Color Switcher</h1>

    <div className='flex gap-4 my-5 p-3 rounded-3xl '>
      {
      colours.map((item,index)=>{
        return (
           <Button key={index} color={item} setSelectedColor={setSelectedColor}/>
        )
      })
    }
    </div>
     <Colourbox color={selectedColor}/>
     
    </>
  )
}

export default App
