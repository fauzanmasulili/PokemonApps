import React from "react";

const Card = ({ list }) => {
    return (
        <div className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5">
                <div className="flex">
                    <h5 className="mb-2 flex-1 text-2xl font-bold tracking-tight text-gray-900">{list.name}</h5>
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