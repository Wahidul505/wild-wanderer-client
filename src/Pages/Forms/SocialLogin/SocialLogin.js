import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center gap-4 my-3'>
                <div className='bg-gray-400 h-1 rounded w-full'></div>
                <p className='text-gray-800 font-semibold'>OR</p>
                <div className='bg-gray-400 h-1 rounded w-full'></div>
            </div>
            <button className='flex justify-center w-full gap-4 py-1 items-center text-xl border-2 border-gray-500 rounded mb-4'><FcGoogle className='text-3xl'/>Google Sign in</button>
            <button className='flex justify-center w-full gap-4 py-1 items-center text-xl border-2 border-gray-500 rounded'><BsFacebook className='text-3xl'/>Facebook Login</button>
        </div>
    );
};

export default SocialLogin;