import { createContext, useEffect, useState } from "react";

export const MyPokemonContext = createContext()

function MyPokemonContextProvider(props) {


    const [myPokemon, setMyPokemon] = useState([])

    // const addPokemon = (value) => {
    //     setMyPokemon([...myPokemon, value]);
    // };

    useEffect(() => {
        localStorage.setItem("myPokemonList", JSON.stringify(myPokemon))
    }, [myPokemon])


    function addPokemon(value) {
        console.log(value)
        setMyPokemon(arr => [...arr, value])
    }


    const value = { myPokemon, addPokemon }

    return (
        <MyPokemonContext.Provider value={value}>
            {props.children}
        </MyPokemonContext.Provider>
    )
}

export default MyPokemonContextProvider;