import React from 'react';
import elephant2 from '../../../images/elephant2.jpg';
import nature from '../../../images/nature.jpg';
import lion from '../../../images/lion.jpg';
import birds from '../../../images/birds.jpg';
import Heading from '../../Shared/Heading/Heading';

const Works = () => {
    return (
        <div>
            <Heading>My Works</Heading>
            <div
                style={{ fontFamily: "'Lobster Two', cursive" }}
                className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-100 text-5xl'>
                <div
                    data-aos="flip-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className='relative'>
                    <img className='w-full rounded' src={elephant2} alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 bg-black bg-opacity-40 flex justify-center items-center rounded'>Animal</h1>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className='relative row-span-2'>
                    <img className='w-full rounded' src={nature} alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded'>Nature</h1>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="1200"
                    className='relative row-span-2'>
                    <img className='w-full rounded' src={lion} alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded'>Wild Life</h1>
                    </div>
                </div>
                <div
                    data-aos="flip-up"
                    data-aos-delay="700"
                    data-aos-duration="1500"
                    className='relative'>
                    <img className='w-full rounded' src={birds} alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded'>Birds</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;