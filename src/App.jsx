import { useState } from 'react'
import Deck from './DeckWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Deck/>
    </>
  )
}

export default App
