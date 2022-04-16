import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-2 md:px-6 py-1 md:py-3 relative text-white'>
            <div className='flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 text-base  md:text-lg order-2 md:order-1'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/checkout'>CheckOut</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
            </div>
            <div className='text-center order-1 md:order-2'>
                <h1 className='text-3xl font-serif'>Wild</h1>
                <h2 className='text-xl'>Wanderer</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-6 lg:gap-8 text-base md:text-lg order-3 md:order-3'>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <NavLink to='/login' className='bg-white text-black md:py-1 md:px-2 rounded md:text-base text-center'>Login</NavLink>
                {/* <button className='bg-white text-black md:py-1 md:px-2 rounded md:text-base text-center'>Logout</button> */}
            </div>
        </nav>
    );
};

export default Header;