import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import royalBengalTiger from '../../../images/royalBengalTiger.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto'>
            <img className='w-full h-5/6 rounded opacity-80' src={royalBengalTiger} alt="" />
            <div>
                <h1 className='text-3xl text-teal-600 mb-8'>Login with your Account</h1>
                <form className='mb-2'>
                    <input className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="email" name="email" id="email" placeholder='Email' />
                    <input className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-6' type="password" name="password" id="password" placeholder='Password' />
                    <input className='bg-teal-600 text-white text-xl w-full py-1 rounded cursor-pointer' type="submit" value="Login" />
                </form>
                <Link to='/signup' className='underline text-gray-600'>New to Wild Wanderer?</Link>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;