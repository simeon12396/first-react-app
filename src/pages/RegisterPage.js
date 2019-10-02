import React, { useState } from 'react';
import '../css/views/registerPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';

const registerPage = () => {

    const formState = {
        name: '',
        email: '',
        password: null,
        confirmPassword: null
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    };

    const handleInput = (e) => {
        console.log(e.target);
    };

    return(
        <div className="register-container">
            <HeaderComp siteName="FootballNews"/>

            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <p>It's free and hardly takes more than 30 seconds.</p>

                <div className="all-inputs">
                    <div className="input-container">
                        <i className="fa fa-user" aria-hidden="true"></i>

                        <input type="text" name="userName" placeholder="Username" onChange={handleInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        
                        <input type="email" name="email" placeholder="Email address" onChange={handleInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        
                        <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        
                        <input type="password" name="confirmPassword" placeholder="Confirm password"onChange={handleInput}/>
                    </div>
                </div>

                <Button variant="primary" type="submit">Register</Button>

                <span className="privacy">By clicking the Sign Up button, you agree to our <a>Terms & Conditions</a>, and <a>Privacy Policy</a>.</span>
            </form>
            
            <FooterComp/>
        </div>
    );
};

export default registerPage;