import * as React from "react";
import { Routes, Route } from "react-router-dom";

import App from '../App'
import MyPokemonList from "../components/MyPokemonList";
import PokemonDetail from "../components/PokemonDetail";
import PokemonList from '../components/PokemonList'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<PokemonList />}></Route>
                <Route path="/pokemon-detail/:name" element={<PokemonDetail />}></Route>
                <Route path="/my-pokemon-list" element={<MyPokemonList />}></Route>
            </Route>

        </Routes>
    )
}

export default Router