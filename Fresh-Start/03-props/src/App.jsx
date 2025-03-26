import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './Components/TextBox'

function App() {

  let myObj = {
    Name : "Shri",
    BU: "SPE"
  }

  return (
    <>
      <TextBox myObj={myObj}/>
    </>
  )
}

export default App
