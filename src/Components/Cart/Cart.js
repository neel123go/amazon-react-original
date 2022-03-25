import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='order-details-container'>
            <h1>Order Details</h1>
            <div className="order-details">
                <h3>Selected Items: {quantity}</h3>
                <h3>Total Price: ${total}</h3>
                <h3>Total Shipping Charge: ${shipping}</h3>
                <h3>Tax: ${parseFloat(tax)}</h3>
                <h2>Grand Total: ${grandTotal}</h2>
            </div>
        </div>
    );
};

export default Cart;