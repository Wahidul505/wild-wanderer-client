import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './CheckOut.css';

const CheckOut = ({ date }) => {
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://wild-wanderer.onrender.com/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);
    const handleCheckOut = e => {
        e.preventDefault();
        const bookingInfo = {
            serviceName: service.name,
            personName: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
        };
        console.log(bookingInfo);
        console.log(service);
        fetch('https://wild-wanderer.onrender.com/service', {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Thanks For The Booking', { id: 'bookingSuccess', duration: '400', icon: '👏' });
            });
    }
    return (
        <div className='checkout rounded-xl p-4'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='text-white text-2xl text-center'>Book for <span className='text-amber-300'>{service.name}</span> Photography Package</h1>
            <form onSubmit={handleCheckOut} className='my-8'>
                <label className='text-white text-lg' htmlFor="date">Booking Date</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="text" name="date" id="date" value={format(date, 'PP') || ''} required disabled />
                <label className='text-white text-lg' htmlFor="name">Your Name</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="text" name="name" id="name" value={user?.displayName || ''} required disabled />
                <label className='text-white text-lg' htmlFor="email">Your Email Address</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="email" name="email" id="email" value={user?.email || ''} required disabled />
                <label className='text-white text-lg' htmlFor="address">Your Address</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="text" name="address" id="address" placeholder='Address' required autoComplete='off' />
                <label className='text-white text-lg' htmlFor="phone">Your Phone Number</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-10' type="text" name="phone" id="phone" placeholder='Phone Number' required />
                <input className='bg-teal-700 text-white py-1 w-full rounded text-xl cursor-pointer hover:text-teal-700 hover:bg-gray-300' type="submit" value="CheckOut" />
            </form>
        </div>
    );
};

export default CheckOut;