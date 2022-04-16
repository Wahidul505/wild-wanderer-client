import React from 'react';
import lion from '../../../images/lion.jpg';
import { IoIosArrowDown } from 'react-icons/io';

const Home = () => {
    return (
        <div className='absolute top-0 -z-10'>
            <img src={lion} alt="" />
            <div className='text-white text-center absolute bottom-20 md:bottom-40 lg:bottom-64 right-0 left-0'>
                <h1 className='text-xl md:text-4xl font-sans'>Wild Photography</h1>
                <p className='text-lg md:text-2xl'>At it's Level</p>
                <p className='text-center'><a href="#services"><IoIosArrowDown className='inline text-xl md:text-4xl md:mt-3'/></a></p>
            </div>
        </div>
    );
};

export default Home;