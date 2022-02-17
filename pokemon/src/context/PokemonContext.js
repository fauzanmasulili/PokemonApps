import { createContext, useState } from "react";

export const PokemonContext = createContext()

function PokemonContextProvider(props) {
   

    const [pokemonValue, setPokemonValue] = useState({})

    function addPokemonValue(value) {
        setPokemonValue(value)
    }

    
    const value = { pokemonValue, addPokemonValue } 

    return (
        <PokemonContext.Provider value={value}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider;