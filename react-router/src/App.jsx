import { RouterProvider } from 'react-router'
import './App.css'
import routerFile from './routerFile'

const App = () => {
  return (
    <>
    <RouterProvider router={routerFile}/>
    </>
  )
}

export default App
