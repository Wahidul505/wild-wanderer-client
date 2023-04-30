import React, { useEffect, useState } from 'react';
import Heading from '../../Shared/Heading/Heading';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://wild-wanderer.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='-mt-12'>
            <Heading>I Shoot</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                />)
            }
        </div>
        </div>
    );
};

export default Services;