import React, { useState } from 'react';
import './style.css';
import { products } from '../../mock/Mock';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const Layout = () => {
    const { addToCart } = useCart();
    const { category } = useParams();
    const [genderFilter, setGenderFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);

    const handleCheckboxChange = (filterType, value) => {
        const updateFilter = (setFilter) => {
            setFilter((prev) =>
                prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
        };
        if (filterType === 'gender') {
            updateFilter(setGenderFilter);
        } else if (filterType === 'size') {
            updateFilter(setSizeFilter);
        } else if (filterType === 'type') {
            updateFilter(setTypeFilter);
        }
    };

    // Unique values
    const uniqueGenders = [...new Set(products.map((product) => product.gender).filter(Boolean))];
    const uniqueSizes = [...new Set(products.flatMap((product) => product.sizes || []).filter(Boolean))];
    const uniqueTypes = [...new Set(products.filter((product) => product.category === 'Notebooks').map((product) => product.type))];

    const filteredProducts = products.filter((product) => {
        const matchesGender = genderFilter.length === 0 || genderFilter.includes(product.gender);
        const matchesSize = sizeFilter.length === 0 || product.sizes?.some((size) => sizeFilter.includes(size));
        const matchesType = typeFilter.length === 0 || typeFilter.includes(product.type);
        const matchesCategory = category ? product.category === category : true;

        return matchesGender && matchesSize && matchesType && matchesCategory;
    });

    const MyCategory = () => {
        if (category === "Uniform") {
            return (
                <div>
                    <h3>Filter</h3>
                    <div className="gender">
                        <h4>Gender</h4>
                        <ul>
                            {uniqueGenders.map((gender) => (
                                <li key={gender}>
                                    <input
                                        className='ui-checkbox'
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange('gender', gender)}
                                        checked={genderFilter.includes(gender)}
                                    />
                                    {gender}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="size">
                        <h4>Size</h4>
                        <ul>
                            {uniqueSizes.map((size) => (
                                <li key={size}>
                                    <input
                                        className='ui-checkbox'
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange('size', size)}
                                        checked={sizeFilter.includes(size)}
                                    />
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        } else if (category === "Notebooks") {
            return (
                <div>
                    <h3>Filter</h3>
                    <div className="size">
                        <h4>Type</h4>
                        <ul>
                            {uniqueTypes.map((type) => (
                                <li key={type}>
                                    <input
                                        className='ui-checkbox'
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange('type', type)}
                                        checked={typeFilter.includes(type)}
                                    />
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        } else if (category === "Study Material") {
            return <h1>Study Material</h1>;
        } else if (category === "Stationery") {
            return <h1>Stationery</h1>;
        }
        return null;
    };

    return (
        <div className='layout-container'>
            <div className="left-container">
                <MyCategory />
            </div>
            <div className="right-container">
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
        </div>
    );
}

export default Layout;
