import { useState } from 'react';
import './App.css'
function Card(props){
    let [count,setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    } 
 let {title,description,...product} = {...props};
 return(
    <>
     <div className="card">
        <h1>{count}</h1>
        <button onClick={increment}>click</button>
        <h1>{title}</h1>
        <p>{description}</p>
        <Product {...product} />
     </div>
    </>
  );
}
function Product(props){
   let { name, price, discount } = { ...props.productDetails };
    return (
        <>
         <h5>{name}</h5>
         <span>{price}</span> <br/>
         <span>{discount} is off on this product</span>
        </>
    )
}

export default Card;