import { ADD_MY_POKEMON, RELEASE_MY_POKEMON } from "./actionTypes";

export const addMyPokemon = (myPokemonList) => {
    return (dispatch) => {
        dispatch({
            type: ADD_MY_POKEMON,
            payload: myPokemonList,
        })
    }
}

export const releaseMyPokemon = (id) => {
    return (dispatch) => {
        dispatch({
            type: RELEASE_MY_POKEMON,
            payload: id
        })
    }
}