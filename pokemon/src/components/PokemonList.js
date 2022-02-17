import React, { useEffect, useState } from 'react'
import PokemonListCards from './PokemonListCards'
import { useQuery } from '@apollo/client'
import { LOAD_POKEMON } from '../GraphQL/Queries'

export default function Pokemon() {
    const { data } = useQuery(LOAD_POKEMON)

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        if (data) {
            console.log(data)
            setPokemonList(data.pokemons.results)
        }
    }, [data])

    

    return (
        <div className=''>
            <div className='text-sm mb-5 font-bold'>
                <p>What Pokemon are you</p>
                <p>looking for?</p>
            </div>
            <div className='mt-5 grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
                {pokemonList.map((list) => {
                    return <PokemonListCards key={list.id} list={list} />
                })}
            </div>
        </div>
    )
}