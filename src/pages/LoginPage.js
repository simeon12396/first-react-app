import React, { useState } from 'react';
import '../css/views/loginPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';

const LoginPage = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleNameInput = (e) => {
        return e.target.value;
    }; 

    const handlePasswordInput = (e) => {
        return e.target.value;
    };

    const handleCheckboxInput = (e) => {
        return e.target.value;
    };
    setName(handleNameInput());
    return(
        <div className="login-container">
            <HeaderComp siteName="FootballNews"/>
           {name}
           <form onSubmit={handleSubmit} className="login-form">
                <div  className="background">
                    <h3>Login</h3>
                </div>

                <div className="input-container">
                    <i className="fa fa-user" aria-hidden="true"></i>

                    <input type="text" name="userName" placeholder="Username" onChange={ e => handleNameInput(e)} required/>
                </div>

                <div className="input-container">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                        
                    <input type="password" name="password" placeholder="Password" onChange={handlePasswordInput} required/>
                </div>

                <div className="options">
                    <div className="remember-me-cont">
                        <input type="checkbox" id="remember-me" name="remember" onChange={handleCheckboxInput}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <a className="forgot-password">Forgot password?</a>
                </div>

                <div className="div-cont">
                    <Button variant="primary" type="submit">Register</Button>
                </div>
           </form>

            <FooterComp/>
        </div>
    );
};

export default LoginPage;