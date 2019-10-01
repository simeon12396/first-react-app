import React from 'react';
import '../css/views/registerPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const registerPage = () => {
    return(
        <div className="register-container">
            <HeaderComp siteName="FootballNews"/>
            <FooterComp/>

            <h1>Register</h1>
        </div>
    );
};

export default registerPage;