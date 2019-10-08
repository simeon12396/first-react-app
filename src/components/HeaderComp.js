import React from 'react';
import '../css/components/headerComp.css';
import { Link } from "react-router-dom";

const HeaderComp = (props) => {

    let { siteName, isLoggedIn } = props;

    const isLoggedOut = () => {
        localStorage.removeItem('isLoggedIn');
        isLoggedIn = false;
    };
    
    return(
        <div className="header-container">
            <nav className="container">
                <Link className="home-btn" to="/">{siteName}</Link>
                
                {
                    (isLoggedIn) ? 
                    (
                        <ul className="row">
                            <Link to="/news">News</Link>
                            <Link>
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </Link>
                            <Link onClick={isLoggedOut}>Log out</Link>
                        </ul>
                    ) : 
                    (
                        <ul className="row">
                            <Link to="/news">News</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    )
                }
            </nav>
        </div>
    );
};

export default HeaderComp;


