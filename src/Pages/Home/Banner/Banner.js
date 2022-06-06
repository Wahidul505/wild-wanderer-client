import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='banner h-full md:h-screen bg-cover bg-top -mt-52 -mx-12'
            style={{ backgroundImage: "url('https://i.ibb.co/sPSLR7y/lion.jpg')" }}
        >
            <div
                style={{ fontFamily: "'Josefin Slab', serif" }}
                className='text-white pt-52 flex flex-col justify-center items-center h-full pb-20 md:pb-0'>
                <h1
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    className='text-2xl md:text-5xl'>Wild Photography</h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    className='text-xl md:text-3xl'>At it's Best</p>
                <p
                    data-aos="fade-up"
                    data-aos-delay="1100"
                    data-aos-duration="1000"
                ><a href="#services"><IoIosArrowDown className='inline text-xl md:text-4xl md:mt-3' /></a></p>
            </div>
        </div>
    );
};

export default Banner;