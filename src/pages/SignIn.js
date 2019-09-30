import React from 'react';
import '../css/signIn.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const SignIn = () => {
    return(
        <div className="signIn-container">
            <HeaderComp siteName="TechStore"/>
            <h1>Sign In</h1>

            <FooterComp/>
        </div>
    );
};

export default SignIn;