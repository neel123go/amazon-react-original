import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <div className='order-details-container'>
                <h1>Order Details</h1>
                <div className="order-details">
                    <h3>Selected Items: {cart.length}</h3>
                    <h3>Total Price: $200</h3>
                    <h3>Total Shipping Charge: $2</h3>
                    <h3>Tax: $20</h3>
                    <h2>Grand Total: $222</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;