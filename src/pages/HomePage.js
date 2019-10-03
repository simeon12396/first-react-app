import React from 'react';
import '../css/views/homePage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import TestComp from '../components/TestComp.js';

const HomePage = () => {
    return(
        <div className="home-container">
            <HeaderComp siteName="FootballNews"/>
            <TestComp/>
            <FooterComp/>
        </div>
    );
};

export default HomePage;