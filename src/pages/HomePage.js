import React from 'react';
import '../css/homePage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const HomePage = () => {
    return(
        <div className="homePage-container">
            <HeaderComp siteName="TechStore"/>
            <FooterComp/>
        </div>
    );
};

export default HomePage;