import { useEffect, useState } from 'react'
import './App.css'
import Article  from "./components/article";

function App() {

  return (
    <div className="App">

    <img className="logo" src="assets/hoxtagram-logo.png" />
 
   <Article/>
   
    </div>
  )
}

export default App
