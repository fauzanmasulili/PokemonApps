import { ADD_MY_POKEMON, RELEASE_MY_POKEMON} from "./actionTypes";

const initialState = {
    myPokemonList: []
}

const myPokemonListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MY_POKEMON:
            return {
                ...state,
                myPokemonList: [...state.myPokemonList, action.payload]
            }
        case RELEASE_MY_POKEMON: 
            return {
                ...state,
                myPokemonList: state.myPokemonList.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default myPokemonListReducer;