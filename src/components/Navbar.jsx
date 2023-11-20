import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className='header flex p-1 items-center my-3'>
      <NavLink to='/' className='ml-10 w-10 h-10 rounded-lg bg-white items-center flex justify-center font-bold shadow-md'>
        <p className='text-transparent items-center bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 '>BT</p>
      </NavLink>

      <nav className='flex ml-auto mx-8 p-1 text-lg gap-4 font-medium'>
        <NavLink to='/about' className={({isActive}) =>
          isActive ? 'text-blue-500' : 'text-black'
        }>
          <p>About</p>
        </NavLink>
        <NavLink to='/projects' className={({isActive}) =>
          isActive ? 'text-blue-500' : 'text-black'
        }>
          <p>Projects</p>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar