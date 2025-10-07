import React, { useState } from 'react'
import Header from './components/header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import { use } from 'react'
const App = () => {

  function getDataFromChild(data){
   console.log(data);
  }
  return (
    <div>
      <Header name={"meet"} func={getDataFromChild}/>
      <Layout/>
      <Footer/>
    </div>
  )
}

export default App
