import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                const quantity = storedCart[id];
                storedCart.quantity = quantity;
                savedCart.push(storedCart);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
}

export default useCart;