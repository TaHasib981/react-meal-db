import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-div'>
            <nav className='header'>
                <h1>Test of Mamoris</h1>
                <div>
                    <a href="/home">Home</a>
                    <a href="/food">Food</a>
                    <a href="/service">Services</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;