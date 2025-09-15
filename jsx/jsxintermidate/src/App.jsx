import React from 'react';
import './App.css'
import './Header.jsx'
import Header from './Header.jsx';
function App() {
  let age = 19;
  let arr = ['meet', 'nanish', 'harsh', 'kunal', 'bhalu'];
  let jsx = <p>i am an Expression {2 + 2}</p>
  let jsx2 = <p>i am an Expression {2 + 3}</p>
  return (
    <>
      {/* style in jsx */}
      <h1 style={{
        background: 'red',
        fontSize: '45px'
      }}>This is Style</h1>
      {/* conditional rendering */}
      {age > 18 ? <p style={{ background: 'green' }}>you can drive</p> : <p style={{ background: 'red' }}>you can't drive</p>}
      {/* loop an array */} {/* key used for unique el if repate then give error */}
      {arr.map((el, index) => {
        return <p key={index}>{el}</p>
      })}
      {/* JSX as Expression */}
      {jsx}
      {/* <Header title={jsx}/>
      <Header title={jsx2}/> */}
      <Header title={arr} />
      {/* {React.createElement('h1',{className:'heading'},"hello,muskan")} */}
      {/* {React.createElement('a', {
        className: "link",
        href: "www.google.com"
      }, "school4u")} */}
      
    </>
  )
}

export default App
