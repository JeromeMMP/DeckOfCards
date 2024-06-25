import { useState } from 'react'
import "./index.css"
import DeckWrapper from './DeckWrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DeckWrapper/>
    </>
  )
}

export default App
