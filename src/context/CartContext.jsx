import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)


    // Add item to cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Remove product from cart
    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    };

    // Clear all items
    const clearCart = () => {
        setCart([]);
    };

    // increment
    const decrement = (product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.id === product.id);
            if (productIndex !== -1) {
                return prevCart
                    .map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0); // Remove item if quantity is 0
            }
            return prevCart; // Return unchanged cart if product is not found
        });
    };
    const increment = (product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.id === product.id);
            if (productIndex !== -1) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Register open/close

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <CartContext.Provider value={{ cart, setIsModalOpen, isModalOpen, openModal, closeModal, addToCart, removeFromCart, clearCart, increment, decrement }}>
            {children}
        </CartContext.Provider>
    );

};

export const useCart = () => {
    return useContext(CartContext);
};
