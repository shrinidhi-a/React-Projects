import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15)
  console.log(counter)

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1 )
  }

  const removeValue = () => {
    // counter = counter + 1;
    setCounter(counter - 1 )
  }

  return (
    <>
      <h1> Counter Value: {counter} </h1>
      <button onClick={addValue}> Add Value </button> {"  "}
      <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
