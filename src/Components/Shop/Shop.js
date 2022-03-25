import React, { useEffect, useState } from 'react';
import { addToCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedProduct = getStoredCart();
        let savedCart = [];
        if (storedProduct) {
            for (const id in storedProduct) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    const quantity = storedProduct[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = products.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = products.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct];
        }

        setCart(newCart);
        addToCart(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="cart-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="order-details-main-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;