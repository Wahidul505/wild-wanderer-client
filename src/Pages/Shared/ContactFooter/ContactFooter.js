import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const ContactFooter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div id='footer' className='text-center mt-20 bg-black text-gray-50 py-4 -mx-12'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl font-serif'>Wild</h1>
                <h2 className='text-xl'>Wanderer</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10 text-sm mb-10'>
                <Link to='/home'>HOME</Link>
                <Link to='/blogs'>BLOGS</Link>
            </div>
            <div className='flex justify-center gap-10 text-base mb-10'>
                <span className='cursor-pointer'><FiInstagram /></span>
                <span className='cursor-pointer'><GrFacebookOption /></span>
                <span className='cursor-pointer'><FaPinterestP /></span>
            </div>
            <p className='text-center opacity-60'><small>Copyright Collected © {year}</small></p>
        </div>
    );
};

export default ContactFooter;