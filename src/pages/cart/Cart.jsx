// src/pages/cart/Cart.js
import React from 'react';
import { useCart } from '../../context/CartContext';
import './style.css';
import { BsCartX } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
    const { cart, removeFromCart, clearCart, increment, decrement } = useCart(); // Destructure increment and decrement

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Cart</h1>
                <button onClick={clearCart}>Clear cart</button>
            </div>
            <div className="cart-body">
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <h1>Cart is empty!</h1>
                        <p className='empty-name'><BsCartX /></p>
                    </div>
                ) : (
                    <div className='cart-container'>
                        {cart.map((value, index) => (
                            <div key={index} className='cart-item'>
                                <div className="cart-item-image">
                                </div>
                                <div className="cart-item-info">
                                    <h3>{value.name}</h3>
                                    <p>{value.price} so'm</p>

                                </div>
                                <div className="quantity-container">
                                    <button className='quantity-button' onClick={() => decrement(value)}>-</button>
                                    <span className="quantity-display" >{value.quantity}</span>
                                    <button id='q2' className="quantity-button" onClick={() => increment(value)}>+</button>
                                </div>
                                <button id='btn-del' onClick={() => removeFromCart(value)}><MdDeleteOutline /></button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="cart-total">
                    <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} so'm</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
