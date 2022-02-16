import React, { useEffect } from 'react'

const SideBar = ({ onClick, toggle }) => {
    const sidebar = document.querySelector(".sidebar");

    useEffect(() => {
        if (toggle) {
            sidebar.classList.toggle("-translate-x-full");
        }
    }, [toggle])

    return (
        <div className='sidebar bg-red-400 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
            <div className='flex' onClick={onClick}>
                <span className='ml-1 text-sm font-bold grow '>Pokemon Apps</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <nav className='text-xs'>
                <a href='#' className='block py-2 px-1'>Pokemon List</a>
                <a href='#' className='block py-2 px-1'>My Pokemon List</a>
            </nav>
        </div>
    )
}

export default SideBar;