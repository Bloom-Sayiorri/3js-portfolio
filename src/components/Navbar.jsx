import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-center bg-blue-400 h-20 gap-3'>
      <h1 className='ml-0'>BS</h1>
      <NavLink>
        <p>About</p>
      </NavLink>
      <NavLink>
        <p> Projects</p>
      </NavLink>
      <NavLink className='text-white'>
        <p> Profile</p>
      </NavLink>
    </nav>
  )
}

export default Navbar