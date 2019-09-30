import React, { useState } from 'react';
import '../css/headerComp.css';
import { Link } from "react-router-dom";
const HeaderComp = (props) => {

    const { siteName } = props;

    let initialState = ['About', 'Login','Register'];

    const navBarObj = initialState.map((value, index) => <Link key={index }to={`${value.toLowerCase()}`}>{value}</Link>);

    const [value, setValue] = useState({
        name: 'Simeon',
        age: 20,
        city: 'Kozlodui'
    });

    function onclickmethod(e) {
        e.preventDefault();

        setValue({...value, name:'SImo', city: 'Kozlodui'})
        
    console.log(value)
    };
    return(
        <div className="headerComp-container">
            <nav className="container">
                <Link className="home-btn" to="/">{siteName}</Link>
                <ul className="row">{navBarObj}</ul>
            </nav>

            <a className="btn btn-primary" href="#" role="button" onClick={onclickmethod}>Click me</a>
        </div>
    );
};

export default HeaderComp;


