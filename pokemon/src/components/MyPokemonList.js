import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { releaseMyPokemon } from "../redux/my_pokemon_list/actions";


const MyPokemonList = ({ releaseMyPokemon, myPokemonList }) => {
    const [cardColor, setCardColor] = useState("bg-slate-300")


    useEffect(() => {
    }, [myPokemonList])

    function realesePokemon(id) {
        releaseMyPokemon(id)
    }

    return (
        <div className=''>

            <div className=" mt-5 grid md:grid-cols-1 lg:grid-cols-3 gap-3">
                {myPokemonList.myPokemonList.map((list, index) =>
                (
                    <div key={index} className="max-w-sm md: max-w-full bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className="p-5">
                            <div className="flex">
                                <p className="mb-2 flex-1 text-xl font-bold tracking-tight text-slate-600">{list.name}</p>
                                <p>#{list.id}</p>
                            </div>
                            
                            <div className="flex flex-wrap space-x-2">
                                {list.types?.map((item, index) =>
                                    <span
                                        key={index}
                                        className={`${cardColor} px-4 py-2 rounded-full text-slate-100 font-semibold text-sm flex align-center w-max cursor-pointer  transition duration-300 ease`}>
                                        {item.type.name}
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <img src={list.image} alt="" />
                            </div>
                            <div className='mb-2 text-xl text-center font-bold text-slate-600'>{list.nickname}</div>
                            <div>
                                <p className="font-bold text-slate-600">Moves</p>
                                <div className="grid grid-cols-2 gap-2 ">
                                    {list.moves?.slice(0, 4).map((item, index) =>
                                        <span
                                            key={index}
                                            className={`${cardColor} mt-2  px-4 py-2 rounded-full text-slate-100 font-semibold text-sm flex align-center justify-center  w-full cursor-pointer  transition duration-300 ease`}>
                                            {item.move.name}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button onClick={() => realesePokemon(list.id)} className="rounded-xl bg-red-600 w-full p-2 text-white">Release Pokemon</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myPokemonList: state.myPokemonList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        releaseMyPokemon: (id) => {
            dispatch(releaseMyPokemon(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList)