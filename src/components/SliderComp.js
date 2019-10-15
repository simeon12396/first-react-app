import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../scss/components/sliderComp.scss";

const SliderComp = (props) => {
    
    const leadingNews = props.leadingNews.map((article, index) => {
        return (
            <Link to={`/singular-leading-news/${index+1}`} key={index} className="slide">

                <div className="title-wrapper">
                    <span className="title">{article.title}</span>
                </div>

                <img src={article.urlToImage}/>
            </Link>
        );
    });

    const settings = {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 11600,
        infinite: true,
        speed: 400,
        cssEase: 'linear',
        dots: true,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
      };

    return(
        <div className="slider container">
            <Slider {...settings}> 
                {leadingNews}
            </Slider>

        </div>
    );
};

export default SliderComp;
