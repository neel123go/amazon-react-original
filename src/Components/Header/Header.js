import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='menu'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    );
};

export default Header;