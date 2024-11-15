import React from 'react';
import Banner from '../../components/banner/banner';
import Catagory from '../../components/catagory/Catagory';
import Cards from '../../components/cards/Cards';
import './style.css';

const Home = ({ searchQuery }) => {
    return (
        <div className='home-container'>
            {!searchQuery && <Banner />}
            {!searchQuery && (
                <div className='home-heading'>
                    <h1>Category</h1>
                </div>
            )}
            {!searchQuery && <Catagory />}
            <Cards searchQuery={searchQuery} />
        </div>
    );
}

export default Home;
