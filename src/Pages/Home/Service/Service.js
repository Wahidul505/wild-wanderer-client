import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className='relative text-white'>
            <img className='w-full rounded' src={image} alt="" />
            <div className='absolute right-0 left-0 text-center top-12 h-full'>
                <h1 className='text-3xl'>{name}</h1>
                <p className='text-2xl'>${price}</p>
                <p className='text-lg'>{description}</p>
                <button
                    onClick={() => navigate('/checkout')}
                    className='bg-white bg-opacity-70 text-gray-500 rounded px-3 py-1 text-lg'>book</button>
            </div>
        </div>
    );
};

export default Service;