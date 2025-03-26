import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  let addvalue = () => {
    setCounter( previousCounter => {
      if(previousCounter < 20){
        return previousCounter + 1
      }
      return 20
    });
  }

  let removevalue = () => {
    setCounter( previousCounter => {
      if(previousCounter > 0){
        return previousCounter - 1
      }
      return 0
    });
  }

  return (
    <>
      <h1>Couter Value : {counter}</h1>
      <button onClick={addvalue}>Add Value</button> <br/>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
