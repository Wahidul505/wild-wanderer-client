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
        <div>
            <h1 className='text-center text-3xl my-4'>I SHOOT</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
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