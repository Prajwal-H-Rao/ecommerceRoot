import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png';
const Navbar = () => {
  return (
    <>
        <nav className='flex min-h-[5rem] w-full bg-[#88d3fc] items-center'>
            <span className='basis-1/12 mx-8'><img src={logo} alt='logo'/></span>
            <ul className='flex basis-8/12 mr-8'>
                <li className='mx-8 text-[#FFFFFF] font-bold'><Link to="/men">Men</Link></li>
                <li className='mx-8 text-[#FFFFFF] font-bold'><Link to="/women">Women</Link></li>
                <li className='mx-8 text-[#FFFFFF] font-bold'><Link to="/unisex">Unisex</Link></li>
            </ul>

            <span className='basis-2/12 text-white'>
                <span className='mx-4 text-[#FFFFFF] font-bold'><Link to="/login">Login</Link></span>|
                <span className='mx-4 text-[#FFFFFF] font-bold'>Signup</span>
            </span>
        </nav>
    </>
  )
}

export default Navbar