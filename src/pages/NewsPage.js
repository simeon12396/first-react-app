import React from 'react';
import '../css/views/newsPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const NewsPage = () => {
    return(
        <div className="news-container">
            <HeaderComp siteName="FootballNews"/>
            <h1>News page</h1>

            <FooterComp/>
        </div>
    );
};

export default NewsPage;