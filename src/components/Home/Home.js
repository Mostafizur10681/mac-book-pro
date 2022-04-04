import React from 'react';
import banner from '../../image/banner.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className='container mt-5'>
            <div className='row row-cols-1 row-cols-md-2 pt-5 d-flex align-items-center justify-content-center'>
                <div className="banner-heading align-middle">
                    <h1 className='text-md-start text-uppercase fw-bolder text-success fs-1 mb-2'>Mac Book Pro</h1>
                    <p className='text-md-start fw-bold mt-2' >M1 Pro and M1 Max revolutionize the MacBook Pro experience and mark a huge step forward in the transition to Apple silicon on Mac.</p>
                    <button className='btn btn-outline-success fs-5 mb-5'>Live Demo</button>
                </div>
                <div className="banner-image">
                    <img className='img-fluid ' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;