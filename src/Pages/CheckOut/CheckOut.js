import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    const { serviceName } = useParams();
    const handleCheckOut = e => {
        e.preventDefault();
        toast.success('Thank You For The Booking 😊');
    }
    return (
        <div className='checkout w-2/3 md:w-1/3 mx-auto rounded p-4 mb-10'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='text-white text-2xl text-center'>Book for <span className='text-amber-300'>{serviceName}</span> Photography Package</h1>
            <form onSubmit={handleCheckOut} className='my-8'>
                <label className='text-white text-lg' htmlFor="name">Your Name</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="text" name="name" id="name" placeholder='Name' />
                <label className='text-white text-lg' htmlFor="email">Your Email Address</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="email" name="email" id="email" placeholder='Your Email' />
                <label className='text-white text-lg' htmlFor="address">Your Address</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-3' type="text" name="address" id="address" placeholder='Address' />
                <label className='text-white text-lg' htmlFor="phone">Your Phone Number</label>
                <input className='w-full bg-gray-200 p-1 rounded text-lg focus:outline-none mb-10' type="text" name="phone" id="phone" placeholder='Phone Number' />
                <input className='bg-teal-700 text-white py-1 w-full rounded text-xl cursor-pointer hover:text-teal-700 hover:bg-gray-300' type="submit" value="CheckOut" />
            </form>
        </div>
    );
};

export default CheckOut;