import React from 'react'
import styled from 'styled-components'
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
// import bg2 from "../images/user.png"
// import avatar from "../images/svgIcons/avatar.webp"
// import avatar1 from "../images/svgIcons/avatar1.png"
// import avatar7 from "../images/svgIcons/avatar7.png"
// import avatar8 from "../images/svgIcons/avatar8.png"
// import avatar2 from "../images/svgIcons/avatar2.webp"
// import avatar3 from "../images/svgIcons/avatar3.png"
// import avatar4 from "../images/svgIcons/avatar4.png"
// import avatar5 from "../images/svgIcons/avatar5.png"
import logoFrame from "../images/aveterWrapper.png"
// import avatar6 from "../images/svgIcons/avatar6.png"

// import { Heading } from '.'

const Container = styled.div`
    /* display: grid; */
    grid-column: 1/-1;
    background: ${props => props.theme.colorPrimary};
    /* width: 100%; */
    padding: 0 10%;
    .header{
        font-weight: bold;
        text-align: center;
        color: ${props => props.theme.colorWhite};
        padding: 5rem 1rem;
    }
    .swiper-wrapper{
       
        padding: 2rem 0rem;

        &-mainContent{
            display: grid;
            grid-template-rows: 1fr min-content max-content;
            justify-items: center;
            align-items: center;
            color: ${props => props.theme.colorWhite};
            &-imgContainer{
                width:100%;
                display: flex;
                justify-content: center;
               /* &__wrapper{
                   background: url(${logoFrame});
                   background-repeat: no-repeat;
                   padding: 1.4rem;
               } */
                &--avater{

                   height: 7rem;
                   /* width: 8rem; */
                   border-radius: 1.5rem;
                   /* margin: 2rem 0;  */
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
            delay: 6500,
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
    // const avaters = [avatar1, avatar3, avatar, avatar4, avatar5, avatar3, avatar7, avatar8, avatar2]
    const reviewData = [
        {
            name: "Chike",
            review: 'Cjgrandexchange is not just trusted but fast and reliable ....'
        },
        {
            name: "patrick",
            review: "I do all my trades with cjgrandexchange from bitcoin to gift cards And I have never for once had reason to regret Thanks CJ grandexchange .... much love"
        },
        {
            name: "mary",
            review: "Cjgrandexchange is correct I have verified that and I have traded with them before, payment swift,You guys are honest and you fast in payment as well and also nice hospitality"
        },
        {
            name: "victor",
            review: 'Cjgrandexchange is the best exchange I have traded with so far, they are the best you can think of... Instant payment and fast response👌🏿'
        },
        {
            name: "john",
            review: " Cj grand exchange is a safe place to do bitcoin trading, gifts card and more. Their customers support is responsive and trade moderators are really good with their jobs. Legit and fast payment assured 💯"
        },
        {
            name: "frank",
            review: "Your payments are swift and I’m being honest"
        },
        {
            name: "steve",
            review: "CJGRAND EXCHANGE is a trusted and reliable source for exchange of gift cards, Bitcoins etc.And very swift too😉"
        },
        {
            name: "Gideon",
            review: "My trades with cjgrandexchange has always ended a happy one, always quick to deliver, fast and very reliable. You should also try him"
        },
    ]
    return (
        <Container
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
            {/* <Heading title="What Our Clients Have To" coloredText=" Say" /> */}
            <h2 className="header">
                What Our Clients Have To Say
            </h2>
            <Swiper {...params} className="swiper-wrapper">

                {
                    reviewData.map((item, index) => (
                        <div key={index} className="swiper-wrapper-mainContent">
                            <div className="swiper-wrapper-mainContent-imgContainer">
                                <div className="swiper-wrapper-mainContent-imgContainer__wrapper">
                                    <img className="swiper-wrapper-mainContent-imgContainer--avater" src={logoFrame} alt="testimonial pic" />
                                </div>
                            </div>
                            <p className="swiper-wrapper-mainContent--text">
                                {item.review}

                            </p>
                            <p className="swiper-wrapper-mainContent--profile">
                                -{item.name}
                            </p>
                        </div>
                    ))
                }


            </Swiper>
        </Container>
    )
}

export default Review