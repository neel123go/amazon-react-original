import React from 'react';
import './Product.css';

const Cart = ({ product, handleAddToCart }) => {
    const { img, name, price, ratings, category } = product;
    return (
        <div className='cart'>
            <img className='cart-img' src={img} alt="" />
            <div className='cart-info'>
                <h4>{name.slice(0, 23) + '...'}</h4>
                <h3>Price: $ <span className='price'>{price}</span></h3>
                <p className='cart-category'>Category: {category}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Cart;