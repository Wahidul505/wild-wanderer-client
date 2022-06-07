import React from 'react';
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
                    data-aos-delay="300"
                    data-aos-duration="800"
                    className='relative'>
                    <img className='w-full rounded' src="https://i.ibb.co/h13X40M/elephant2.jpg" alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 bg-black bg-opacity-40 flex justify-center items-center rounded hover:scale-125 transition-transform duration-500 cursor-crosshair'>Animal</h1>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    className='relative row-span-2'>
                    <img className='w-full rounded' src="https://i.ibb.co/S55zH7B/nature.jpg" alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded hover:scale-125 transition-transform duration-500 cursor-crosshair'>Nature</h1>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    className='relative row-span-2'>
                    <img className='w-full rounded' src="https://i.ibb.co/TTKFSWv/lion.jpg" alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded hover:scale-125 transition-transform duration-500 cursor-crosshair'>Wild Life</h1>
                    </div>
                </div>
                <div
                    data-aos="flip-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    className='relative'>
                    <img className='w-full rounded' src="https://i.ibb.co/55Yn75B/birds.jpg" alt="" />
                    <div className='absolute right-0 left-0 bottom-0 h-full flex justify-center items-center'>
                        <h1 className='w-5/6 h-5/6 m-auto bg-black bg-opacity-40 flex justify-center items-center rounded hover:scale-125 transition-transform duration-500 cursor-crosshair'>Birds</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;