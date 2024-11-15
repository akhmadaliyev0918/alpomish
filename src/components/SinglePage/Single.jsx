import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/Mock';
import { FaStar } from "react-icons/fa";
import { useCart } from '../../context/CartContext';
import './style.css';

const Single = () => {
  const { Id } = useParams();
  const product = products.find(item => item.id === parseInt(Id)); // Find product by ID
  const { increment, decrement, addToCart } = useCart(); // Destructure functions from useCart

  const [quantity, setQuantity] = useState(1); // Initial quantity

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= product.rating ? "#FFD700" : "#C0C0C0"} // Yellow or gray
        />
      );
    }
    return stars;
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    increment(product); // Call increment from CartContext
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decrement(product); // Call decrement from CartContext
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add product with specified quantity to the cart
  };

  return (
    <div className="single-product-container">
      <div className="single-product-img">
        <img src="https://images.uzum.uz/crca5de0t1lqb8aq6j80/original.jpg" alt={product.name} />
      </div>
      <div className="single-product-details">
        <h1>{product.name}</h1>
        <p>SKU: {product.SKU_No}</p>
        <div className="rating">
          <p>Rating:</p>
          {renderStars()}
        </div>
        <p className='single-price'>Price: <span>{product.price}</span> so'm</p>
        <div className="sizes">
          <p>Available Sizes:</p>
          <div className="size-button-container">
            {product.sizes && product.sizes.length > 0 ? (
              product.sizes.map((size, index) => (
                <button key={index} className="size-button">{size}</button>
              ))
            ) : (
              <p className='no-size'>No sizes available</p>
            )}
          </div>
        </div>
        <div className="quantity">
          <div className="quantity-container">
            <button className="quantity-button" onClick={decreaseQuantity}>-</button>
            <input
              type="text"
              className="quantity-display"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              min="1"
            />
            <button id='q2' className="quantity-button" onClick={increaseQuantity}>+</button>
          </div>
          <div data-tooltip={`Price: ${product.price * quantity}`} className="button" onClick={handleAddToCart}>
            <div className="button-wrapper">
              <div className="text">Add to Cart</div>
              <span className="icon">
                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-specification">
        <h1>Product Description</h1>
        {product.color && <p className='description'>Color: <span>{product.color}</span></p>}
        {product.fit_type && <p className='description'>Fit Type: <span>{product.fit_type}</span></p>}
        {product.closure_type && <p className='description'>Closure Type: <span>{product.closure_type}</span></p>}
        {product.length && <p className='description'>Length: <span>{product.length}</span></p>}
        {product.age_group && <p className='description'>Age Group: <span>{product.age_group}</span></p>}
        {product.ideal_for && <p className='description'>Ideal For: <span>{product.ideal_for}</span></p>}
        {product.grade && <p className='description'>Grade: <span>{product.grade}</span></p>}
        {product.occasion_type && <p className='description'>Occasion Type: <span>{product.occasion_type}</span></p>}
        {product.uniform_for && <p className='description'>Uniform For: <span>{product.uniform_for}</span></p>}
        {product.material_type && <p className='description'>Material Type: <span>{product.material_type}</span></p>}
        {product.quality && <p className='description'>Quality: <span>{product.quality}</span></p>}
        {product.care_instructions && <p className='description'>Care Instructions: <span>{product.care_instructions}</span></p>}
        {product.country_of_origin && <p className='description'>Country of Origin: <span>{product.country_of_origin}</span></p>}
        {product.category && <p className='description'>Category: <span>{product.category}</span></p>}
      </div>
    </div>
  );
};

export default Single;
