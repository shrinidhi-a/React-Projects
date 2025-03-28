import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from './Components/Color'

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <Color color={color} />
      <div style={{ padding: "10px" }}>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("white")}>White</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("red")}>Red</button>
      </div>
    </>
  );
}

export default App
