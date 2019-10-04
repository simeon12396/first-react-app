import React from 'react';
import '../css/views/homePage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const HomePage = () => {
    return(
        <div className="home-container">
            <HeaderComp siteName="FootballNews"/>
            <FooterComp/>
        </div>
    );
};

export default HomePage;