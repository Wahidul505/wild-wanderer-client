import React from 'react';
import elephant from '../../../images/elephant.jpg'

const Signup = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto'>
            <img className='w-full h-5/6' src={elephant} alt="" />
            <div className=''>
                <h1 className='text-3xl mb-3'>Create an Account</h1>
                <form>
                    <input className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="email" name="email" id="email" placeholder='Email' />
                    <input className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="password" name="password" id="password" placeholder='Password' />
                    <input className='w-full border-b-2 border-gray-500 p-1 text-lg focus:outline-none mb-3' type="password" name="confirm_password" id="confirm_password" placeholder='Your Name' />
                </form>
            </div>
        </div>
    );
};

export default Signup;