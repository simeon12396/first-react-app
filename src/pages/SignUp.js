import React from 'react';
import '../css/signUp.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const SignUp = () => {
    return(
        <div className="signUp-container">
            <HeaderComp siteName="TechStore"/>
            <FooterComp/>

            <h1>Sign up</h1>
        </div>
    );
};

export default SignUp;