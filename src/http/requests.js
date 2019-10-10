import React, {useState, useEffect} from 'react';

const useGetNews = () => {
    const newsAPIKey = 'apiKey=5e264f0a6df548b392cca93633c2b6e5';

    const url = 'https://newsapi.org/v2/top-headlines?country=us&' + newsAPIKey;

    const [leadingNews, setLeadingNews] = useState({});
    const [dailyNews, setDailyNews] = useState({});

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(news => {
            const leadingNews = news.articles.slice(0, 8);
            const dailyNews = news.articles.slice(8, 16);
            setLeadingNews(leadingNews);
            setDailyNews(dailyNews);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

    return [leadingNews, dailyNews];
};

export default useGetNews;

