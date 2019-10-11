import React from 'react';
import { Link } from "react-router-dom";
import '../css/components/dailyNews.css';

const DailyNews = (props) => {
    
    const dailyNews = props.dailyNews.map((article, index) => {
        return (
            <Link key={index} className="grid-item" to={`/singular-daily-news/${index+1}`}>
                <div className="overlay">
                    <span className="title">{article.title}</span>
                    <div className="see-more">
                        <span>See more</span>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>

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