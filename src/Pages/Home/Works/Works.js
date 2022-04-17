import React from 'react';
import elephant2 from '../../../images/elephant2.jpg';
import nature from '../../../images/nature.jpg';
import lion from '../../../images/lion.jpg';
import birds from '../../../images/birds.jpg';

const Works = () => {
    return (
        <div className='my-20 mx-auto w-11/12'>
            <h1 className='text-center text-3xl text-gray-500 mb-3'>Works</h1>
            <div className='grid grid-cols-2 gap-4 text-white'>
                <div className='relative'>
                    <img className='w-full rounded' src={elephant2} alt="" />
                    <h1 className='text-2xl absolute right-0 left-0 bottom-0 h-5/6 bg-black bg-opacity-40 m-4 md:m-6 flex justify-center items-center rounded'>Animal</h1>
                </div>
                <div className='row-span-2 relative'>
                    <img className='w-full rounded' src={nature} alt="" />
                    <h1 className='text-2xl absolute right-0 left-0 bottom-0 h-5/6 bg-black bg-opacity-40 m-4 md:m-12 flex justify-center items-center rounded'>Nature</h1>
                </div>
                <div className='row-span-2 relative'>
                    <img className='w-full h-full rounded' src={lion} alt="" />
                    <h1 className='text-2xl absolute right-0 left-0 bottom-0 h-5/6 bg-black bg-opacity-40 m-4 md:m-12 flex justify-center items-center rounded'>Wild Life</h1>
                </div>
                <div className='relative'>
                    <img className='w-full rounded' src={birds} alt="" />
                    <h1 className='text-2xl absolute right-0 left-0 bottom-0 h-5/6 bg-black bg-opacity-40 m-4 md:m-6 flex justify-center items-center rounded'>Birds</h1>
                </div>
            </div>
        </div>
    );
};

export default Works;