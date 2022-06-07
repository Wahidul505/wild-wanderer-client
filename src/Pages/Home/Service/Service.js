import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, name, image, price, description } = service;
    const navigate = useNavigate();
    return (
        <div className='relative text-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <img className='w-full rounded' src={image} alt="" />
            <div className='absolute right-0 left-0 top-0 h-full w-full flex justify-center items-center'>
                <div className='bg-white bg-opacity-40 rounded w-5/6 h-5/6 flex flex-col gap-2 items-center justify-center p-2'>
                <h1 className='text-3xl'>{name}</h1>
                <p className='text-2xl'>${price}</p>
                <p title={description} className='hidden md:block text-lg border border-gray-800 rounded h-20  md:h-28 lg:h-24 px-1 overflow-hidden'>{description}</p>
                <button
                    onClick={() => navigate(`/book-service/${_id}`)}
                    className='bg-white text-gray-800 font-medium font-mono rounded px-3 py-1 text-lg transition ease-in-out delay-150 hover:scale-110 duration-300'
                    >Book</button>
                </div>
            </div>
        </div>
    );
};

export default Service;