import React from 'react';
import '../css/aboutUsPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const AboutUsPage = () => {
    return(
        <div className="aboutUsPage-container">
            <HeaderComp siteName="TechStore"/>
            <h1>About us page</h1>

            <FooterComp/>
        </div>
    );
};

export default AboutUsPage;