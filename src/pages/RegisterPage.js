import React, { useState } from 'react';
import '../scss/views/registerPage.scss';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import { Button } from 'react-bootstrap';
import useForm from 'react-hook-form';

const RegisterPage = (props) => {
    const [formState, setFormState] = useState({});

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {

        if(data.password === data.confirmPassword) {

            setFormState({...formState, ...data});

            localStorage.setItem('name', data.userName);
            localStorage.setItem('password', data.password);

            alert('Congratulations! You have been successfully registered!');

            setTimeout(() => {
                props.history.push('/login');
            }, 1000);
            
        } else {

            alert('Your password and confirmation password do not match.');
        };
    };
    
    return(
        <div className="register-container">
            <HeaderComp siteName="AllAboutNews" isLoggedIn={localStorage.getItem('isLoggedIn')}/>
            
            <main className="container">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Create Account</h1>

                    <p>It's free and hardly takes more than 30 seconds.</p>

                    <div className="all-inputs">
                        <div className="input-container">
                            <i className="fa fa-user" aria-hidden="true"></i>

                            <input type="text" name="userName" placeholder="Username" ref={register({minLength: 3})} required/>

                            {errors.userName && errors.userName.type === 'minLength' && (
                                <div className="field-alert">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <span>This field required minimum length of 3 characters</span>
                                </div>)
                            }
                        </div>

                        <div className="input-container">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            
                            <input type="email"  name="email" placeholder="Email address" ref={register} required/>
                        </div>

                        <div className="input-container">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            
                            <input type="password" ref name="password" placeholder="Password" ref={register({minLength: 6, maxLength: 20})} required/>

                            {errors.password && errors.password.type === 'minLength' && (
                                <div className="field-alert">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <span>This field required minimum length of 6 characters</span>
                                </div>)
                            }

                            {errors.password && errors.password.type === 'maxLength' && (
                                <div className="field-alert">
                                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <span>This field required minimum length of 20 characters</span>
                                </div>)
                            }
                        </div>

                        <div className="input-container">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            
                            <input type="password" name="confirmPassword" placeholder="Confirm password" ref={register} required/>
                        </div>
                    </div>

                    <Button variant="primary" type="submit">Register</Button>

                    <span className="privacy">By clicking the Sign Up button, you agree to our <a>Terms & Conditions</a>, and <a>Privacy Policy</a>.</span>
                </form>
            </main>
            
            <FooterComp/>
        </div>
    );
};

export default RegisterPage;