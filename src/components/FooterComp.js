import React from 'react';
import '../css/components/footerComp.css';
import { Link } from "react-router-dom";

const FooterComp = () => {
    
    return(
        <div className="footer-container">
            <div className="container">
                <div className="row justify-content-between">
                    <ul className="col-4">
                        <Link to="/">Home</Link>
                        <Link to="/news">News</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
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

                        <form className="contact-form">
                            <input type="text" placeholder="Email address"></input>
                        </form>
                    </div>
                </div>

                <p className="copyright">Copyright &#169; 2019. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterComp;