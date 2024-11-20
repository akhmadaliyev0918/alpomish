import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Leyout = ({ children }) => {
    return (
        <>
            <div className="user-navbar"></div>
            <div className='leyout-Container'>
                <div className="Sidebar">
                    <Link to="/profile/deshbourd">Deshbourd</Link>
                    <Link to="/profile/add/product">Products</Link>
                    <Link to="/profile/users">Workers</Link>
                    <Link to="/profile/setting">Setting</Link>
                    <Link to="/profile/help">Help</Link>
                </div>
                <div className="main-box">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Leyout
