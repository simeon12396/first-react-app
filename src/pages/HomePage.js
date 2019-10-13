import React from 'react';
import '../scss/views/homePage.scss';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';
import SliderComp from '../components/SliderComp.js';
import DailyNews from '../components/DailyNews.js';
import useGetNews from '../http/requests.js';

const HomePage = () => {
    const [leadingNews, dailyNews] = useGetNews();

    if(dailyNews.length > 0) {
        return(
            <div className="home-container">
                <HeaderComp siteName="AllAboutNews" isLoggedIn={localStorage.getItem('isLoggedIn')}/>

                <main className="container">
                    <SliderComp leadingNews={leadingNews}/>
                
                    <DailyNews dailyNews={dailyNews}/>
                </main>

                <FooterComp/>
            </div>
        );
    } else {
        return (null);
    };
};

export default HomePage;