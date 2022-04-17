import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const { pathname } = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (pathname === '/' || pathname === '/home') {
            setIsHome(true)
        }
        else {
            setIsHome(false);
        }
    }, [pathname]);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <nav className={`flex justify-between items-center px-2 md:px-6 py-1 md:py-2 relative mb-16 
        ${isHome ? 'text-white' : 'text-black'}
        `}>
            <div className='flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8 text-base  md:text-lg order-2 md:order-1'>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/about'>ABOUT ME</NavLink>
                <NavLink to='/blogs'>BLOGS</NavLink>
            </div>
            <div className='text-center order-1 md:order-2'>
                <h1 className='text-2xl md:text-3xl font-serif'>Wild</h1>
                <h2 className='text-lg md:text-xl'>Wanderer</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8 text-base md:text-lg order-3 md:order-3'>
                <NavLink to='/checkout/service'>CHECK OUT</NavLink>
                {
                    user ?
                        <button onClick={handleLogout} className={` md:py-1 md:px-2 rounded md:text-base text-center
                        ${isHome ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>LOG OUT</button>
                        :
                        <>
                            <NavLink to='/signup'>SIGN UP</NavLink>
                            <NavLink to='/login'
                                className={` md:py-1 md:px-2 rounded md:text-base text-center
                                 ${isHome ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>LOG IN</NavLink>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;