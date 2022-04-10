import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='menu'>
            <img src={logo} alt="" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/order'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </nav>
    );
};

export default Header;