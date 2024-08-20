import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-page">
            <div className="content">
                <p className='heading'>The car is waiting for you!</p>  
                <Link to="/book" className='booknow'>Book Now!</Link>
            </div>
            <div className="car-image">
                <img src="/HomeCar.png" alt="" />
            </div>
        </div>
    );
};

export default Home;
