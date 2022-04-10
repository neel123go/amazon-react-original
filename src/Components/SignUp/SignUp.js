import React from 'react';
import googleImage from '../../images/s1AjSxph_400x400.jpg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input autoComplete='off' type="email" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Enter your password' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name='confirm-password' placeholder='Enter your password to confirm' />
                    </div>
                    <button className='submit-btn' type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link className='another-route-btn' to='/login'>Login</Link></p>
                <p className='gap-style'>---------------------- or -----------------------</p>
                <button className='google-btn'><img className='google-image' src={googleImage} alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;