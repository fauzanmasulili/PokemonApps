import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { PokemonContext } from "../context/PokemonContext";



const Card = ({ list }) => {
    const navigate = useNavigate()
    const { addPokemonValue } = useContext(PokemonContext)

    useEffect(() => {
        if(!list) {
            navigate("/")
        }
    })

    function detailPokemon(name, image, id) {
        console.log(name)
        navigate(`/pokemon-detail/${name}`)

        let value = {
            id: id,
            image: image
        }
        addPokemonValue(value)
    }

    
    return (
        <div onClick={() => detailPokemon(list.name, list.image, list.id)} className="cursor-pointer max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5">
                <div className="flex">
                    <p className="mb-2 flex-1 text-xl font-bold tracking-tight text-gray-900">{list.name}</p>
                    <p>#{list.id}</p>
                </div>
                <div className="flex justify-center">
                    <img src={list.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card