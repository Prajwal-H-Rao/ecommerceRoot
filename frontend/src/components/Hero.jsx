import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='relative w-full min-h-full'>
            <img className='w-full h-full object-cover' src='https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw43f4942b/images/page-designer/2024/July/16310_Comp_A_Life_Desktop.jpg?sw=1616&sfrm=jpg' alt='hero' />
            <div className='absolute inset-0 bg-blue-400 opacity-10'></div>
            <div className='absolute inset-0 top-72 left-36'>
                <h1 className='text-5xl text-white'>We're back</h1>
                <div className='bg-blue-400 h-2 w-1/12 my-2'></div>
                <p className='mt-4'>Classic, Modern and everything in between.</p>

                <div className='my-8 w-full flex'>
                    <Link to="/men" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-4 rounded w-1/12 h-10'>Men</Link>
                    <Link to="/women" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-5 px-4 rounded w-1/12 h-10'>Women</Link>
                </div>

            </div>
        </div>
    )
}

export default Hero