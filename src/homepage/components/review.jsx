import React from 'react'
import styled from 'styled-components'
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import bg2 from "../images/avatar1.jpg"
import { Heading } from '.'

const Container = styled.div`
    /* display: grid; */
    grid-column: 2/10;
    /* background: rebeccapurple; */
    /* width: 100%; */
    .swiper-wrapper{
       
       padding: 2rem 0rem;

       &-mainContent{
           display: grid;
   
           grid-template-rows: 1fr min-content max-content;
           
           justify-items: center;
           align-items: center;
           color: ${props => props.theme.colorPrimary};
           &-imgContainer{
               width:100%;
               display: flex;
               justify-content: center;
               
               &--avater{
                   height: 8rem;
                   width: 8rem;
                   border-radius: 1.5rem;
                   margin: 2rem 0; 
           }
           }
           &--text{
               font-size: 1.5rem;
               width: 80%;
               color: currentColor;
               /* text-overflow:eli */
               text-align: center;
               line-height: 1.5;
           }
           &--profile{
               display: flex;
               justify-content: center;
               width: 80%;
               align-self: flex-start;
               padding: 2rem 1rem;
               font-size: 1.5rem; 
               font-weight: 600;
               color: ${props => props.theme.colorSecondary};
               height: 3rem;
           }
       }
   }  
`
const Review = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides: false,
        // effect: 'fade',
        // cssMode: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            '@0.00': {
              slidesPerView: 1,
            //   spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
            //   spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
            //   spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
            //   spaceBetween: 50,
            },
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <Container 
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
        <Heading title="What Our Clients Have To" coloredText=" Say"/>
             <Swiper {...params} className="swiper-wrapper">
                {/* <TestimonialCard img={bg2} /> */}
                {/* <TestimonialCard img={bg2} /> */}
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                    I am a skilled programmer that likes writing modular codes that are easily maintainable 
                    and supports continuous integration. I'm skilled in the art of 
                    translating design mock-ups and prototypes in tools like figma and.

                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
            </Swiper>
        </Container>
    )
}

export default Review
