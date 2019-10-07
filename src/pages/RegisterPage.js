import React, { useState, useRef } from 'react';
import '../css/views/registerPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';

const RegisterPage = () => {

    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);
    let confirmPasswordRef = useRef(null);

    const [alertStatusState, setAlertStatusState] = useState('');

    const validation = (data) => {
        const { name, email, password, confirmPassword } = data;

        if( (name.length !== 0) && (password == confirmPassword) && password.length > 7 ) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            return 'success';
        } else {
            return 'danger';
        };
    };

    const handleInput = (e) => {
        const data = {
            name: `${nameRef.current.value}`,
            email: `${emailRef.current.value}`,
            password: `${passwordRef.current.value}`,
            confirmPassword: `${confirmPasswordRef.current.value}`
        };

        return {
            data,
            alertStatus: validation(data)
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const submittedData = handleInput();

        setAlertStatusState(submittedData.alertStatus);
    };

    return(
        <div className="register-container">
            <HeaderComp siteName="FootballNews"/>

            <div className="alert-message">
                { 
                    (alertStatusState === 'success') ? alert('Congrats! You are successfully registered your account!') 
                    : (alertStatusState === 'danger') ? alert('Something is wrong! You got an error!') : (null)
                }
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <p>It's free and hardly takes more than 30 seconds.</p>

                <div className="all-inputs">
                    <div className="input-container">
                        <i className="fa fa-user" aria-hidden="true"></i>

                        <input type="text" ref={nameRef} name="userName" placeholder="Username" onChange={handleInput} required/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        
                        <input type="email" ref={emailRef} name="email" placeholder="Email address" onChange={handleInput} required/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        
                        <input type="password" ref={passwordRef} name="password" placeholder="Password" onChange={handleInput} required/>
                    </div>

                    <div className="input-container">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        
                        <input type="password" ref={confirmPasswordRef} name="confirmPassword" placeholder="Confirm password"onChange={handleInput} required/>
                    </div>
                </div>

                <Button variant="primary" type="submit">Register</Button>

                <span className="privacy">By clicking the Sign Up button, you agree to our <a>Terms & Conditions</a>, and <a>Privacy Policy</a>.</span>
            </form>
            
            <FooterComp/>
        </div>
    );
};

export default RegisterPage;