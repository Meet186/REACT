import Card from './Card'
import './App.css'
function Square(props){
  let {name,age}  = {...props};
  
  return (
    <>
    <div className="box">
      <p>{name}</p>
      <p>{age}</p>
    </div>

    </>
  )
}

function App() {

  return (
    <>
      {/* <Square name="Meet" age="21"/> */}
      <Card title="this is card1" description="this is all about card" 
       productDetails= {{name:"HandWash",price:120,discount : 20}}/>

        <Card title="this is card2" description="this is all about card" 
       productDetails= {{name:"cover",price:150,discount : 0}}/>

        <Card title="this is card3" description="this is all about card" 
       productDetails= {{name:"lighter",price:40,discount : 20}}/>


    </>
  )
}

export default App
