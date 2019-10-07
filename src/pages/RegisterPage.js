import React, { useState } from 'react';
import '../css/views/registerPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';
import useForm from 'react-hook-form';

const RegisterPage = () => {
    const [loginFormData, setLoginFormData] = useState('');

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setLoginFormData({...loginFormData, ...data});
        localStorage.setItem('userName', data.userName);
    };
    console.log(loginFormData);

    return(
        <div className="register-container">
            <HeaderComp siteName="FootballNews"/>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Create Account</h1>

                <p>It's free and hardly takes more than 30 seconds.</p>

                <div className="all-inputs">
                    <div className="input-container">
                        <i className="fa fa-user" aria-hidden="true"></i>

                        <input type="text" name="userName" placeholder="Username" ref={register} />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        
                        <input type="email"  name="email" placeholder="Email address" ref={register} />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        
                        <input type="password" ref name="password" placeholder="Password" ref={register} />
                    </div>

                    <div className="input-container">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        
                        <input type="password" name="confirmPassword" placeholder="Confirm password" ref={register} />
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