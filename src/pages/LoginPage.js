import React from 'react';
import '../css/views/loginPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const LoginPage = () => {
    return(
        <div className="login-container">
            <HeaderComp siteName="FootballNews"/>
            <h1>Login</h1>

            <FooterComp/>
        </div>
    );
};

export default LoginPage;