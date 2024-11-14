import {createBrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'

const routerFile = createBrowserRouter([
    {
        path: '/',
        element: <Nav/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/pokemon',
        element: <Pokemons/>
    },
    {
        path: '/pokemon/:pokemon',
        element: <PokemonDetails/>
    }
])

export default routerFile