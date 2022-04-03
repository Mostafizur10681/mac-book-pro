import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;