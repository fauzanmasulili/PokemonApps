import './index.css';
import SideBar from './components/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import PokemonContextProvider from './context/PokemonContext';

function App() {
  const [toggle, setToggle] = useState(false);

  function sideBarToggle() {
    setToggle(!toggle)
  }

  return (
    <div className="relative min-h-screen md:flex">
      <div className='md:hidden px-5 py-2 flex ' onClick={sideBarToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <SideBar toggle={toggle} onClick={sideBarToggle} />
      <div className='flex-1 px-5 py-2'>
        <PokemonContextProvider>
            <Outlet />
        </PokemonContextProvider>
      </div>
    </div>
  );
}

export default App;
