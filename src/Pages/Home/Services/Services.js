import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='w-10/12 md:w-11/12 mx-auto mt-20'>
            <h1 className='text-center text-3xl text-gray-500 mb-6'>I SHOOT</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                />)
            }
        </div>
        </div>
    );
};

export default Services;