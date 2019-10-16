import React from 'react';
import '../scss/components/footerComp.scss';
import { Link } from "react-router-dom";
import useForm from 'react-hook-form';

const FooterComp = (props) => {
    const isLoggedIn = props.isLoggedIn;

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
         const subscriber = data.email;

         localStorage.setItem('subscribers', JSON.stringify(subscriber));
    };

    return(
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <ul className="col-md-12 col-lg-4">
                        {
                            (isLoggedIn) ?
                            (
                                <div className="footer-navigation">
                                    <Link to="/">Home</Link>
                                </div>
                            ) :
                            (
                                <div className="footer-navigation">
                                    <Link to="/">Home</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            )
                        }
                    </ul>

                    <div className="social-media col-md-12 col-lg-4">
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="col-md-12 col-lg-4 contact-form-wrapper">
                        <span>Subscribe to our newsletter:</span>

                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" name="email" placeholder="Email address" ref={register} required></input>
                        </form>
                    </div>
                </div>

                <p className="copyright">Copyright &#169; 2019. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterComp;