import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Banner = () => {
    return (
        <div>
            <img className='w-full' src="https://i.ibb.co/sPSLR7y/lion.jpg" alt="" />
            <div className='text-white text-center absolute right-0 left-0 top-28 md:top-52 lg:top-72'>
                <h1 className='text-xl md:text-4xl font-sans'>Wild Photography</h1>
                <p className='text-lg md:text-2xl'>At it's Best</p>
                <p className='text-center'><a href="#services"><IoIosArrowDown className='inline text-xl md:text-4xl md:mt-3' /></a></p>
            </div>
        </div>
    );
};

export default Banner;