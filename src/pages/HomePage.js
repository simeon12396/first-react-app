import React, {useEffect} from 'react';
import '../css/views/homePage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import SliderComp from '../components/SliderComp.js';
import useGetNews from '../http/requests.js';

const HomePage = () => {
    const [leadingNews, dailyNews] = useGetNews();

    console.log(dailyNews);
    console.log(dailyNews.author)
    return(
        <div className="home-container">
            <HeaderComp siteName="AllAboutNews" isLoggedIn={localStorage.getItem('isLoggedIn')}/>
            <SliderComp/>
            <FooterComp/>
        </div>
    );
};

export default HomePage;