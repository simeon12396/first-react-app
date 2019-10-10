import React, {useState} from 'react';
import '../css/views/newsPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const NewsPage = () => {

    return(
        <div className="news-container">
            <HeaderComp siteName="AllAboutNews" isLoggedIn={localStorage.getItem('isLoggedIn')}/>
            
            <FooterComp/>
        </div>
    );
};

export default NewsPage;