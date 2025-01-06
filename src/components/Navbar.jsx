import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center space-x-5 text-white text-xl bg-gray-100/10 py-3 w-full font-bold'> 
            <img src={logo}  className='w-12 h-12 mx-4' alt="" />
            <Link to='/'>Home</Link>
            <Link to='/Watchlist'>Watchlist</Link>
        </nav>
    </div>
  )
}

export default Navbar