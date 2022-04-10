import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='menu'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Orders</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </nav>
    );
};

export default Header;