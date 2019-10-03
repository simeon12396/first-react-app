import React, {useState, useEffect, useRef} from 'react';
import '../css/views/registerPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';

const TestComp = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const validation = (param1) => {
        console.log(param1);
    };

    const handleUserInput = (e) => {
        const data = {
            name: `${nameRef.current.value}`,
            email: `${emailRef.current.value}`,
            password: `${passwordRef.current.value}`,
            confirmPassword: `${confirmPasswordRef.current.value}`
        };

        validation(data);
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log(handleUserInput());
    };

    return(
        <div className="register-container">
            <HeaderComp siteName="FootballNews"/>
        
            <form className="register-form" onSubmit={handleUserSubmit}>
                <h1>Create Account</h1>

                <p>It's free and hardly takes more than 30 seconds.</p>

                <div className="all-inputs">
                    <div className="input-container">
                        <i className="fa fa-user" aria-hidden="true"></i>

                        <input type="text" ref={nameRef} name="userName" placeholder="Username" onChange={handleUserInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        
                        <input type="email" ref={emailRef} name="email" placeholder="Email address" onChange={handleUserInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        
                        <input type="password" ref={passwordRef} name="password" placeholder="Password" onChange={handleUserInput}/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        
                        <input type="password" ref={confirmPasswordRef} name="confirmPassword" placeholder="Confirm password"onChange={handleUserInput}/>
                    </div>
                </div>

                <Button variant="primary" type="submit">Register</Button>

                <span className="privacy">By clicking the Sign Up button, you agree to our <a>Terms & Conditions</a>, and <a>Privacy Policy</a>.</span>
            </form>
            
            <FooterComp/>
        </div>
            
    );
};

export default TestComp;