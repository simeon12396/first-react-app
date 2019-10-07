import React from 'react';
import '../css/views/loginPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';
import useForm from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return(
        <div className="login-container">
            <HeaderComp siteName="FootballNews"/>

           <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div  className="background">
                    <h3>Login</h3>
                </div>

                <div className="input-container">
                    <i className="fa fa-user" aria-hidden="true" />

                    <input type="text" name="userName" placeholder="Username" ref={register} />
                </div>

                <div className="input-container">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                        
                    <input type="password" name="password" placeholder="Password" ref={register} />
                </div>

                <div className="options">
                    <div className="remember-me-cont">
                        <input type="checkbox" id="remember-me" name="remember" ref={register} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <a className="forgot-password" href="#">Forgot password?</a>
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