import React from 'react';
import notFound from '../../../images/NotFound.jpg';

const NotFound = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={notFound} alt="" />
            <h1 className='text-center text-gray-600 text-4xl absolute right-0 left-0 top-20'>Page Not Found</h1>
        </div>
    );
};

export default NotFound;