import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { useQuery, } from '@apollo/client'
import { LOAD_POKEMON } from '../GraphQL/Queries'

export default function Content() {
    const { error, loading, data } = useQuery(LOAD_POKEMON)

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        if (data) {
            console.log(data)
            setPokemonList(data.pokemons.results)
        }
    }, [data])

    return (
        <div className=''>
            <div className='mt-5 grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
                {pokemonList.map((list) => {
                    return <Cards key={list.id} list={list} />
                })}
            </div>
        </div>
    )
}