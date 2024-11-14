import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './context/UserContext'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert('hello jannel here')
  // })

  // // useEffect(() => {
  // //   alert('this components run on initial load')
  // // }, [])

  // useEffect(() => {
  //   console.log(`This runs only when the state variable changes ${count}`)
  // }, [count])

  // useEffect(() => {
  //   alert('hey')
  //   return () => alert("Goodbye")
  // })



  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

<UserProvider>
  <Header />
</UserProvider>

    </>
  )
}

export default App
