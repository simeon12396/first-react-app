import React from 'react';
import '../scss/components/footerComp.scss';
import { Link } from "react-router-dom";
import useForm from 'react-hook-form';

const FooterComp = () => {

    const { register, handleSubmit } = useForm();

    const subscribers = [];

    const onSubmit = (data) => {
         const subscriber = data.email;
         subscribers.push(subscriber);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
    };

    return(
        <div className="footer-container">
            <div className="container">
                <div className="row justify-content-between">
                    <ul className="col-4">
                        <Link to="/">Home</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Register</Link>
                    </ul>

                    <div className="social-media col-2">
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

                    <div className="col-4">
                        <h5>Subscribe to our newsletter:</h5>

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