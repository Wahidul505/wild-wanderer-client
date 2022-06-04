import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import { IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const Header = () => {
    const { pathname } = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [previousLocation, setPreviousLocation] = useState('');
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    // condition for displaying transparent header in home page 
    useEffect(() => {
        setPreviousLocation(pathname);
        if (previousLocation !== pathname) {
            setShow(false);
        }
        if (pathname === '/' || pathname === '/home') {
            setIsHome(true)
        }
        else {
            setIsHome(false);
        }
    }, [pathname, previousLocation]);

    // handling sign out function 
    const handleLogout = () => {
        signOut(auth);
    }

    const userAuth = <>
        {
            user ?
                <button onClick={handleLogout} className={` md:py-1 md:px-2 rounded md:text-base text-center z-10
            ${isHome ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>LOG OUT</button>
                :
                <>
                    <NavLink to='/signup'>SIGN UP</NavLink>
                    <NavLink to='/login'
                        className={` md:py-1 md:px-2 rounded md:text-base text-center
                     ${isHome ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}>LOG IN</NavLink>
                </>
        }
    </>

    return (
        <nav className={`flex justify-between items-center px-2 md:px-6 py-1 md:py-2 relative mb-16 overflow-hidden h-36 md:h-16
        ${isHome ? 'text-white' : 'text-black'}
        `}>
            <div className={`flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8 text-base md:text-lg order-2 md:order-1 md:translate-y-0 z-10
            ${show ? 'translate-y-0 transition-transform ease-linear duration-300' : '-translate-y-40 transition-transform ease-linear duration-300'}
            `}>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/about'>ABOUT ME</NavLink>
                <NavLink to='/blogs'>BLOGS</NavLink>
                <div className='flex flex-col md:hidden z-10'>
                    {userAuth}
                </div>
            </div>
            <div className='absolute top-0 right-0 left-0 w-screen text-center'>
                <h1 className='text-2xl md:text-3xl font-serif'>Wild</h1>
                <h2 className='text-lg md:text-xl'>Wanderer</h2>
            </div>
            <div className='hidden md:flex gap-8 text-lg order-3 mr-16 md:mr-0 z-10'>
                {userAuth}
            </div>
            <button onClick={() => setShow(!show)} className='absolute right-3 top-2 md:hidden text-3xl'>
                <IoClose className={show ? 'block' : 'hidden'} />
                <IoIosMenu className={show ? 'hidden' : 'block'} />
            </button>
        </nav>
    );
};

export default Header;