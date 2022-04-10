import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleImage from '../../images/s1AjSxph_400x400.jpg';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input autoComplete='off' type="email" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Enter your password' />
                    </div>
                    <button className='submit-btn' type="submit">Login</button>
                </form>
                <p>Don't have any account? <Link className='another-route-btn' to='/signup'>Sign Up</Link></p>
                <p className='gap-style'>---------------------- or -----------------------</p>
                <button className='google-btn'><img className='google-image' src={googleImage} alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;