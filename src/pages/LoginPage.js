import React from 'react';
import '../scss/views/loginPage.scss';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';
import useForm from 'react-hook-form';

const LoginPage = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const name = localStorage.getItem('name');
        const password = localStorage.getItem('password');

        if(name === data.userName && password === data.password) {
            localStorage.setItem('isLoggedIn', true);
            alert('Login successful!');

            setTimeout(() => {
                props.history.push('/');
            }, 1000); 
                  
        } else {
            alert('Login is unsuccessful. Please try again.');
        };
    };

    return(
        <div className="login-container">
            <HeaderComp siteName="AllAboutNews"/>

           <main className="container">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <div  className="background">
                            <h3>Login</h3>
                        </div>

                        <div className="input-container">
                            <i className="fa fa-user" aria-hidden="true" />

                            <input type="text" name="userName" placeholder="Username" ref={register} required/>
                        </div>

                        <div className="input-container">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                                
                            <input type="password" name="password" placeholder="Password" ref={register} required/>
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
           </main>

            <FooterComp/>
        </div>
    );
};

export default LoginPage;