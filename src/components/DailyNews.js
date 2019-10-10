import React from 'react';
import { Link } from "react-router-dom";
import '../css/components/dailyNews.css';

const DailyNews = (props) => {
    const dailyNews = props.dailyNews.map((article, index) => {
        return (
            <Link key={index} className="grid-item" to="#">
                <img src={article.urlToImage} />
            </Link>
        )
    });

    return(
        <div className="daily-news container">
            {dailyNews}
        </div>
    )
};

export default DailyNews;