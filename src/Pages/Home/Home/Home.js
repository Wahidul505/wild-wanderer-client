import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='home absolute top-0 -z-10 right-0 left-0'>
            <Banner />
            <div id='services'>
                <Services />
            </div>
            <Footer />
        </div>
    );
};

export default Home;