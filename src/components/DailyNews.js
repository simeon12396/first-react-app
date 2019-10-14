import React from 'react';
import { Link } from "react-router-dom";
import '../scss/components/dailyNews.scss';

const DailyNews = (props) => {
    
    const dailyNews = props.dailyNews.map((article, index) => {
        return (
            <Link key={index} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 box-news" to={`/singular-daily-news/${index+1}`}>
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
        <div className="daily-news container row">
            {dailyNews}
        </div>
    )
};

export default DailyNews;