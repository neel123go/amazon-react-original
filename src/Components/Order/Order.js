import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h1>This is order section</h1>
            <h2>Total Product: {products.length}</h2>
            <h2>Total cart: {cart.length}</h2>
        </div>
    );
};

export default Order;