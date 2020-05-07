import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import React, { Component } from 'react'

export default class Nav extends Component {

    componentDidMount() {
        setTimeout(() => {
            var menuButton = document.querySelector('.menu-button');
        var openMenu = function () {
            swiper.slidePrev();
        };
        var swiper ={
            slidesPerView: 'auto',
            initialSlide: 1,
            resistanceRatio: 0,
            slideToClickedSlide: true,
            on: {
                slideChangeTransitionStart: function () {
                    var slider = this;
                    if (slider.activeIndex === 0) {
                        menuButton.classList.add('cross');
                        // required because of slideToClickedSlide
                        menuButton.removeEventListener('click', openMenu, true);
                    } else {
                        menuButton.classList.remove('cross');
                    }
                }
                , slideChangeTransitionEnd: function () {
                    var slider = this;
                    if (slider.activeIndex === 1) {
                        menuButton.addEventListener('click', openMenu, true);
                    }
                },
            }
        };
        }, 3000)
        
    }

    render() {
        return (
            <div>
                <Swiper className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide menu">Menu slide</div>
                        <div className="swiper-slide content">
                            <div className="menu-button">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
				            Content slide
			            </div>
                    </div>
                </Swiper>
            </div>
        )
    }
}

