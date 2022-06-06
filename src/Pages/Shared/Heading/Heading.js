import React from 'react';

const Heading = ({children}) => {
    return (
        <h1 className='text-center text-4xl text-gray-500 mb-8 uppercase'>{children}</h1>
    );
};

export default Heading;