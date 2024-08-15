import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (itemName, quantity, price, image) => {
        setCart(prevCart => ({
            ...prevCart,
            [itemName]: { quantity, price, image }
        }));
    };
    const removeFromCart = (itemName) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            delete newCart[itemName];
            return newCart;
        });
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return Object.values(cart).reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart, getTotalItems, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
