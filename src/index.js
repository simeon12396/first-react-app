import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SingularDailyNews from './pages/SingularDailyNews';
import SingularLeadingNews from './pages/SingularLeadingNews';

const App = () => {
    return(
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/singular-daily-news/:id" component={SingularDailyNews}/>
            <Route path="/singular-leading-news/:id" component={SingularLeadingNews}/>
        </Router>
    );
};

ReactDOM.render( <App/> , document.getElementById('root'));
