import React, { useState } from 'react';
import '../css/components/footerComp.css';
import { Link } from "react-router-dom";

const FooterComp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e)
    };

    const handleChange = (e) => {
        console.log(e)
    };

    return(
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <h3 className="col-3">FootballNews</h3>

                    <ul className="col-2">
                        <Link to="/">Home page</Link>
                        <Link to="/news">News</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </ul>

                    <div className="col-4">
                        <h5>Subscribe to our newsletter:</h5>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Email address" onChange={handleChange}></input>
                        </form>
                    </div>

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
                </div>

                <p className="copyright">Copyright &#169; 2019. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterComp;