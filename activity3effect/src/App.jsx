import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import MousePosition from './component/MousePosition'
import RandomColor from './component/RandomColor'
import FetchData from './component/FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
     <MousePosition />
     <RandomColor />
     <FetchData/>
    </> 
  )
}

export default App
