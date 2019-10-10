import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SliderComp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return(
        <div className="slider">
            <Slider {...settings}>  
                <div className="slide"> 
                    <Link to='/news'>
                        <img src="https://i.ytimg.com/vi/E_OVyorsqN0/maxresdefault.jpg" />
                    </Link>
                </div>

                <div>
                    <img src="https://theartmad.com/wp-content/uploads/2015/08/Football-Pictures-Hd-6.jpg" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComp;