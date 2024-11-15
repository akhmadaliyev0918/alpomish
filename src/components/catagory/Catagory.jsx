import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";



const Catagory = () => {
    const uniform = "Uniform"
    const notebooks = "Notebooks"
    const study = "Study Material"
    const stationery = "Stationery"


    return (
        <div className='Catagory'>
            <Link to={`catalog/${uniform}`}>
                <div className="catagory-element1">
                    <div className="catalog-text">
                        <h1>Uniform</h1>
                        <p>Buy now <GoArrowRight /></p>
                    </div>
                </div>
            </Link>
            <div className="catagory-box">
                <Link to={`catalog/${notebooks}`}>
                    <div className="catagory-element2">
                        <div className="catalog-text">
                            <h1>Notebooks</h1>
                            <p>Buy now <GoArrowRight /></p>
                        </div>
                    </div>
                </Link>
                <Link to={`catalog/${study}`}>
                    <div className="catagory-element3">
                        <div className="catalog-text">
                            <h1>Study Material</h1>
                            <p>Buy now <GoArrowRight /></p>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to={`catalog/${stationery}`}>
                <div className="catagory-element4">
                    <div className="catalog-text">
                        <h1>Stationery</h1>
                        <p>Buy now <GoArrowRight /></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Catagory
