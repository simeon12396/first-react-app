import React from 'react';
import '../scss/components/headerComp.scss';
import { Link } from "react-router-dom";

const HeaderComp = (props) => {

    let { siteName, isLoggedIn } = props;

    const isLoggedOut = () => {
        localStorage.removeItem('isLoggedIn');
        isLoggedIn = false;
    };
    
    const handleHamburgerMenu = () => {
        const hamburgerMobile = document.querySelector('.hamburger-mobile');
        const navMobile = document.querySelector('.nav-mobile');

        hamburgerMobile.classList.toggle('changeHamburgerMobile')
        navMobile.classList.toggle('changeNavMobile');
};

    return(
        <div className="header-container">
            <nav className="container">
                <Link className="home-btn" to="/">{siteName}</Link>
                
                {
                    (isLoggedIn) ? 
                    (
                        <div>
                            <ul className="row main-menu">
                                <Link to="/">
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </Link>

                                <Link onClick={isLoggedOut} to="/">Log out</Link>
                            </ul>

                            <div className="hamburger-mobile" onClick={handleHamburgerMenu}>
                                <i className="fa fa-bars" aria-hidden="true"></i>

                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <ul className="nav-mobile">
                                <Link to="/">
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </Link>

                                <Link onClick={isLoggedOut} to="/">Log out</Link>
                            </ul>
                        </div>
                    ) : 
                    (
                        <div>
                            <ul className="row main-menu">
                                <Link to="/login">Login</Link>

                                <Link to="/register">Register</Link>
                            </ul>

                            <div className="hamburger-mobile" onClick={handleHamburgerMenu}>
                                <i className="fa fa-bars" aria-hidden="true"></i>

                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <ul className="nav-mobile">
                                <Link to="/login">Login</Link>

                                <Link to="/register">Register</Link>
                            </ul>
                        </div>
                    )
                }
            </nav>
        </div>
    );
};

export default HeaderComp;


