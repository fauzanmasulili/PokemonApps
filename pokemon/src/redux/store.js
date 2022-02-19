import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import myPokemonListReducer from './my_pokemon_list/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
    myPokemonList: myPokemonListReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["myPokemonList"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const  persistor = persistStore(store)
        

export default () => ({
    store, persistor 
})