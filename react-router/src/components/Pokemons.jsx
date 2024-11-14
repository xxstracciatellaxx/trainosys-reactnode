import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
useEffect(() => {
    const pokedox = async () => {
        const response  = await axios.get("https://pokeapi.co/api/v2/pokemon?Limit=10")
        console.log(response.data.results)

        setPokemons(response.data.results)
    }       
    pokedox()
}, [])

    return (
        <>
        <h2>Pokemons Component</h2>
           {
            pokemons.map(pokemon => (
                <div className="pokemon" key={pokemon.name}>
                    <button>
                    <Link>{pokemon.name}</Link>
                    </button>
                </div>
            ))
           } 
        </>
    )
} 

export default Pokemons