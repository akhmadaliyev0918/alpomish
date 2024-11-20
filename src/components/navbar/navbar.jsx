import React, { useState } from 'react';
import './style.css';
import { IoSearch } from 'react-icons/io5';
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Register from "../register/Register";

const Navbar = ({ setSearchQuery }) => {
    const { cart, openModal } = useCart();
    const token = localStorage.getItem("authToken");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (buttonName) => setHoveredButton(buttonName);
    const handleMouseLeave = () => setHoveredButton(null);

    return (

        <div className="navbar-container">
            <Register />
            <div className="navbar-top">
                <div className="nav-logo">EDUshop</div>
                <div className="link-search">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        onChange={handleSearch}
                    />
                    <button><IoSearch /></button>
                </div>
                <div className="link-bar">
                    <Link to='/cart'>
                        <button>
                            <FiShoppingCart />
                            <p id='count'>{cart.length}</p>
                        </button>
                    </Link>
                    <button><MdFavoriteBorder /></button>
                    {token ?
                        <Link to="/profile">
                            <button>
                                <AiOutlineUser />
                            </button>
                        </Link>
                        :
                        <button onClick={openModal}><AiOutlineUser /></button>
                    }
                </div>
            </div>
            <div className="navbar-bottom">
                <Link to="/">Home</Link>

                <button
                    onMouseEnter={() => handleMouseEnter('STUDY MATERIAL KIT')}
                    onMouseLeave={handleMouseLeave}
                >
                    Study material <MdNavigateNext />
                    {hoveredButton === 'STUDY MATERIAL KIT' && (
                        <div className="hover-box large">
                            <div className="class">Class</div>
                            <div className="row-bar">
                                <div className="first-row">
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                </div>
                                <div className="second-row">
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                </div>
                                <div className="third-row">
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                    <div className="bar-element"><MdNavigateNext /> Nursery</div>
                                </div>
                            </div>
                        </div>
                    )}
                </button>

                <button>Notebooks</button>

                <button
                    onMouseEnter={() => handleMouseEnter('UNIFORMS')}
                    onMouseLeave={handleMouseLeave}
                >
                    Uniforms <MdNavigateNext />
                    {hoveredButton === 'UNIFORMS' && (
                        <div className="hover-box small">
                            <div className="bar-element"><MdNavigateNext /> Winter Uniform</div>
                        </div>
                    )}
                </button>

                <button>Stationery</button>
            </div>
        </div>
    );
}

export default Navbar;
