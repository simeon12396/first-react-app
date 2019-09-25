import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import styles from '../css/headerComp.css';

const HeaderComp = () => {
    return(
        <div className="headerComp-container">
            <Carousel>
                <Carousel.Item>
                    <img className="" src={require('../images/aoc-display.jpg')} alt="First slide - Samsung display" />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="" src={require('../images/philips-display.jpg')} alt="Second slide - Philips display" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="" src={require('../images/samsung-display.png')} alt="Third slide - AOC isplay" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderComp;


