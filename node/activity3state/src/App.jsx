import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightSwitchS from './component/LightSwitch'
import LightSwitch from './component/LightSwitch'
import Counter from './component/Counter'
import ColorPicker from './component/ColorPicker'
import TodoList from './component/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<LightSwitch />
<Counter />
<ColorPicker />
<TodoList/>
    </>
  )
}

export default App
