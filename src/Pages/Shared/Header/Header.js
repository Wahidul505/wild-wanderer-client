import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
        <nav className={`flex justify-between py-1 md:py-2 relative overflow-hidden h-36 md:h-20
        ${isHome ? 'text-white' : 'text-black'}
        `}>
            <div className={`flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8 text-base md:text-lg order-2 md:order-1 md:translate-y-0 z-10
            ${show ? 'translate-y-0 transition-transform ease-linear duration-300' : '-translate-y-40 transition-transform ease-linear duration-300'}
            `}>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/blogs'>BLOGS</NavLink>
                <div className='flex flex-col md:hidden z-10 h-fit'>
                    {userAuth}
                </div>
            </div>
            <div
                style={{ fontFamily: "'Yeseva One', cursive" }}
                className='absolute top-1 w-full text-center'>
                <h1 className='text-2xl md:text-5xl mb-0'><Link to='/'>Wild</Link></h1>
                <h2 className='text-lg md:text-2xl mt-0'><Link to='/'>Wanderer</Link></h2>
            </div>
            <div className='hidden md:flex gap-8 text-lg order-3 mr-16 md:mr-0 z-10 h-fit'>
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