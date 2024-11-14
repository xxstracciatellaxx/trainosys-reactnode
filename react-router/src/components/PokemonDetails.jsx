import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const PokemonDetails = () => {
    
    const {name} = useParams
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const pokedox = async () => {
            const response  = await axios.get("https://pokeapi.co/api/v2/pokemon?Limit=10")
            console.log(response.data.results)
    
            setPokemons(response.data.results)
        }       
        pokedox()
    }, [])

    const pokemon = pokemons.find(pokemon => pokemon.name === pokemon)
    console.log(pokemon);
    
    return (
        <>
        
        <h2>Pokemon Details Component</h2>
        <div>{pokemon}</div>
        
        </>
    )
}

export default PokemonDetails