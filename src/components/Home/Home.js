import React from 'react';
import banner from '../../image/banner.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-lg-2 d-flex justify-center'>
                <div className="banner-heading">
                    <h1 className='text-left'>Mac Book</h1>
                    <p>M1 Pro and M1 Max revolutionize the MacBook Pro experience and mark a huge step forward in the transition to Apple silicon on Mac. MacBook Pro with M1 Pro and M1 Max applies a system-on-a-chip (SoC) architecture to pro systems for the first time, featuring fast unified memory and increased memory bandwidth for unparalleled performance with best-in-class performance per watt and industry-leading power efficiency.</p>
                    <button>Live Demo</button>
                </div>
                <div className="banner-image">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;