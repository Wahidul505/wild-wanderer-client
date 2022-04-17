import React from 'react';
import elephant2 from '../../../images/elephant2.jpg';
import nature from '../../../images/nature.jpg';
import lion from '../../../images/lion.jpg';
import birds from '../../../images/birds.jpg';

const Works = () => {
    return (
        <div className='my-20 mx-auto w-11/12'>
        <h1 className='text-center text-3xl text-gray-500 mb-3'>Works</h1>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <img className='w-full rounded' src={elephant2} alt="" />
            </div>
            <div className='row-span-2'>
                <img className='w-full rounded' src={nature} alt="" />
            </div>
            <div className='row-span-2'>
                <img className='w-full h-full rounded' src={lion} alt="" />
            </div>
            <div className=''>
                <img className='w-full rounded' src={birds} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Works;