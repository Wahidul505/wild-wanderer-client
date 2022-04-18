import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div className='home absolute top-0 -z-10 right-0 left-0'>
            <Banner />
            <div id='services'>
                <Services />
            </div>
            <div className='parallax w-full h-full bg-no-repeat bg-cover bg-fixed my-20 bg-center'>
                <h1 className='text-center text-white text-3xl py-52'>I CREATE MAGIC FROM SIMPLE THINGS</h1>
            </div>
            <Works />
            <Footer />
        </div>
    );
};

export default Home;