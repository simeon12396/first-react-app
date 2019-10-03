import React from 'react';
import '../css/components/headerComp.css';
import { Link } from "react-router-dom";

const HeaderComp = (props) => {

    const { siteName } = props;

    let initialState = ['News', 'Login','Register'];

    const navBarObj = initialState.map((value, index) => <Link key={index }to={`${value.toLowerCase()}`}>{value}</Link>);

    return(
        <div className="header-container">
            <nav className="container">
                <Link className="home-btn" to="/">{siteName}</Link>
                <ul className="row">{navBarObj}</ul>
            </nav>
        </div>
    );
};

export default HeaderComp;


