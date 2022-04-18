import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className='relative text-gray-900'>
            <img className='w-full rounded' src={image} alt="" />
            <div className='absolute right-0 left-0 top-0 h-5/6 m-6 flex flex-col gap-2 justify-center items-center px-3 bg-white bg-opacity-40 rounded'>
                <h1 className='text-3xl'>{name}</h1>
                <p className='text-2xl'>${price}</p>
                <p className='text-lg border border-gray-800 rounded h-20  md:h-28 lg:h-24 px-1 overflow-hidden'>{description}</p>
                <button
                    onClick={() => navigate(`/checkout/${name}`)}
                    className='bg-white text-gray-800 rounded px-3 py-1 text-lg'>book</button>
            </div>
        </div>
    );
};

export default Service;