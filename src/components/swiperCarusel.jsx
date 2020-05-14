// import React, { useState} from 'react';
import "swiper/css/swiper.css"
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import playstore from "../images/playstore.svg"
import applestore from "../images/istore.svg"
import bitcoinSvg from "../images/bitcoinSvg.svg"
// import EthereumSvg from "../images/ethereum.svg"
import EthereumDesire from "../images/ethereumDesire.svg"
import React, { Component} from 'react'


export default class swiperCarusel extends Component {

    constructor(props) {
        super(props)
    
        this.swipper = null
        this.image =  <img src={bitcoinSvg} alt="bitcoinSvg" />
        this.state = {
            swiper: 1,
            index: 2
        }
    }
    
    //  setImage = () => {
    //     // console.log("333");
    //     if(this.swipper !== null && this.swipper.activeIndex === 3){
    //         console.log("333");
    //     }
    //     if(this.swipper !== null && this.swipper.activeIndex === 2){
    //         console.log("222")
    //     }
    //     return  <img src={EthereumDesire} alt="bitcoinSvg" />
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log( this.swipper);
    }
    
    // componentDidMount() {
    //     console.log( this.swipe);
    //     // console.log(Swiper);
    // }
    
    render() {
        const Container = styled.div`
    width: 100%; 
    height: 100%;
    /* display: grid; */
    /* grid-template-rows: min-content 70% 1fr;  */
    grid-template-columns: 1fr ;
    /* padding: 2rem 4rem; */
    align-items: center;
    grid-column: 1/ -1; 
    position: relative;

    .carursel{
        display: grid;
        grid-template-columns: repeat(2, minmax(30rem, 1fr));
        grid-column: 1/ -1;
        align-self: center;
        justify-items:center;
        align-items: center;
        margin-top: 0rem;
        height: 50vh;
    
        /* align-content: flex-end; */
        margin-bottom: 7rem;
        /* padding-left: 3rem; */
        overflow: hidden;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            margin-bottom: 1rem;
        }
        @media only screen and (min-width: ${props => props.theme.breakPoints.bpxxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        grid-template-rows: min-content 65% min-content;
        height: 90vh;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: repeat(1, minmax(40rem, 1fr));
        /* grid-template-rows: min-content 50% min-content; */
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        grid-template-columns: repeat(1, minmax(40rem, 1fr));
        grid-template-rows: min-content 40% min-content;
        height: 100vh;
    }
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        grid-template-rows: min-content 65% min-content;
        height: 60vh;
    }
        /* padding: 0 1rem; */
    .carursel-info{
        display: grid;
        grid-column: 1;
        align-items: center;
       
        /* grid-template-columns: repeat(2, minmax(40rem, 1fr)); */

        &-text{
            font-family: montserrat;
            padding: 1rem 3rem;
            font-size: ${props => props.theme.font.xxlarge};
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                font-size: ${props => props.theme.font.xLarge};
                padding: 1rem 3rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: ${props => props.theme.font.xLarge};
                padding: .1rem 3rem;
            }
            &--yellow{
                color: ${props => props.theme.colorYellow};
            }
        }
        &-btn{
            width: 20rem;
            height: 5rem;
            border-radius: 3rem;
            background: transparent;
            color: ${props => props.theme.colorYellow};
            font-size: ${props => props.theme.font.xlarge};
            border: none;
            outline: none;
            margin: 3rem;
            z-index: 30;
            box-shadow: .2rem .4rem 10px rgba(0,0,0, .3); 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                border: 0.2px solid #fff;
            }
        }
        &-mobile-demo{
            margin-top: 1rem;
            display: flex;
            height: 4rem;
        }
        }
        .headerSvg{
        /* padding: .1rem; */
        overflow: hidden;
        height: 100%;
        width: 80%;
        z-index: 5px;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            grid-row: 1;
        }
        img{
            height: 100%;
            width: 100%;
            /* transform: scale(.8); */
        }
    }
    }
`

        // const [state, setstate] = useState(null)
        const params = {
            speed: 1000,
            parallax: !true,
            slidesPerView: 1,
            runCallbackOnInit: true,
            init: true,
            
            getSwiper: swiper => {
                this.swipe = swiper
               
                this.swipper = swiper
            },
            on: {
                slideChangeTransitionEnd: () => {
                    if(this.swipper !== null){
                        // console.log(this.swipper)
                    }
                    }, 
             
            },
            loop: !false,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            parallaxEl: {
                el: '.parallax-bg',
                value: '-23%'
            }
        }
        return (
            <Container>
           
                <Swiper shouldSwiperUpdate={true}  {...params} >
               
                    <div key='322' className="carursel">
                        <div className="carursel-info" data-swiper-parallax="0">
                            <h3 className="carursel-info-text">
                                AJ global ventures
                                makes it easy to sell your
                            <span className="carursel-info-text--yellow"> bitcoins </span>
                            and <span className="carursel-info-text--yellow"> gift cards </span>
                            </h3>

                            <button className="carursel-info-btn">
                               Sign Up
                        </button>
                            <div className="carursel-info-mobile-demo">
                                <img src={playstore} alt="playStore" />
                                <img src={applestore} alt="ios" />
                            </div>
                        </div>

                        <div className="headerSvg">
                            <img src={bitcoinSvg} alt="bitcoinSvg" data-swiper-parallax="-600" />
                        </div>
                    </div>
                    <div key='3' className="carursel">
                        <div className="carursel-info" data-swiper-parallax="0">
                            <h3 className="carursel-info-text">
                                AJ global ventures
                                makes it easy to sell your
                            <span className="carursel-info-text--yellow"> Ethereum </span>
                            and <span className="carursel-info-text--yellow"> gift cards </span>
                            </h3>

                            <button className="carursel-info-btn">
                               Sign Up
                            </button>
                            <div className="carursel-info-mobile-demo">
                                <img src={playstore} alt="playStore" />
                                <img src={applestore} alt="ios" />
                            </div>
                        </div>

                        <div className="headerSvg">
                            <img src={EthereumDesire} alt="bitcoinSvg" />
                        </div>
                    </div>
                    <div key='7' className="carursel">
                        <div className="carursel-info" data-swiper-parallax="0">
                            <h3 className="carursel-info-text">
                                AJ global ventures 
                                makes it easy to sell your
                            <span className="carursel-info-text--yellow"> Luno </span>
                            and <span className="carursel-info-text--yellow"> gift cards </span>
                            </h3>

                            <button className="carursel-info-btn">
                               Sign Up
                        </button>
                            <div className="carursel-info-mobile-demo">
                                <img src={playstore} alt="playStore" />
                                <img src={applestore} alt="ios" />
                            </div>
                        </div>

                        <div className="headerSvg">
                        <img src={bitcoinSvg} alt="bitcoinSvg" data-swiper-parallax="-600" />
                        </div>
                    </div>
                    
                </Swiper>
                
            </Container>
        )
    }
}



// const SwiperCarusel = () => {


//     return (

//     )
// };

// export default SwiperCarusel;
