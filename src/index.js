import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
    return(
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutUsPage}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/register" component={SignUp}/>
        </Router>
    );
};

ReactDOM.render( <App/> , document.getElementById('root'));
