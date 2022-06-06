import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className='flex flex-col gap-32'>
            <Banner />
            <div id='services'>
                <Services />
            </div>
            <div
                style={{
                    fontFamily: "'Parisienne', cursive",
                    backgroundImage: "url('https://i.ibb.co/0QmnxcH/alessandro-sacchi-NUFnf-Yd09i-I-unsplash.jpg')"
                }}
                className='h-full bg-no-repeat bg-cover bg-fixed bg-bottom -mx-12 px-10'>
                <h1 className='text-center text-white text-4xl md:text-6xl py-52'>Wild Wanderer</h1>
            </div>
            <Works />
        </div>
    );
};

export default Home;