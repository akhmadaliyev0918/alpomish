import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { products } from '../../mock/Mock';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './style.css'

const Cards = ({ searchQuery }) => {
    const { addToCart } = useCart();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='Cards-container'>
            {filteredProducts.map((value, index) => (
                <div className="card" key={index}>
                    <Link to={`/product/${value.id}`}>
                        <div className="card-img">
                            <img src="https://images.uzum.uz/crca5de0t1lqb8aq6j80/original.jpg" alt={value.name} />
                            <div className="cart-img-buttons">
                                <button className='cart-img-like'><MdFavoriteBorder /></button>
                                <button onClick={() => addToCart(value)} className='cart-img-cart'><FiShoppingCart /></button>
                            </div>
                        </div>
                    </Link>
                    <div className="card-content">
                        <h3>{value.name}</h3>
                        <p>{value.price} so'm</p>
                    </div>
                    <button onClick={() => addToCart(value)} className='cart-img-cart'><FiShoppingCart /></button>
                </div>
            ))}
        </div>
    );
}

export default Cards;
