import React, { /* useState */ } from 'react'
import styled, { keyframes } from 'styled-components'
// import logo from "../images/brandLogo.jpg"
// import logo from "../images/logo.png"

import waveSvg from "../images/waveSvg.svg"
import { Carusel } from '.'
import Particles from "react-particles-js";
// import { Link } from 'react-router-dom'
// import routes from '../navigation/routes'
// import { ReactComponent as MenuIcon } from "../images/svgIcons/menu.svg"
// import { useSpring, animated } from 'react-spring'

const waveAnimation = keyframes`
    from{ 
        background-position: 0
    }

    to{
        background-position: 0px;
    }
`
const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    grid-template-rows: min-content 70% 1fr;
    grid-template-columns: repeat(2, minmax(40rem, 1fr));
    /* height: auto; */
    background: ${props => props.theme.colorPrimary};
    /* width: ; */
    height: 80vh;
    position: relative;
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpxxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        grid-template-rows: min-content 65% min-content;
        height: 80vh;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: repeat(1, minmax(40rem, 1fr));
        grid-template-rows: min-content 50% min-content;
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
    .navbar-mobile{
        position: fixed;
        top: 0rem;
        right: 0rem;
        display: grid;
        align-items: center;
        place-items: center;
        padding: 2rem;
        z-index: 1200;
        &__icon{
            display: grid;
            align-items: center;
            place-items: center;
            align-self: center;
            height: 4rem;
            width: 4rem;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            z-index: 1300;
            cursor: pointer;
            justify-self: ${props => props.sidenavIsOpen ? "center" : "flex-start"};

            path{
                height: 100%;
                fill: white;
                color: white;
            }
        }
        &__overlay{
            content: "";
            position: fixed;
            top: 3rem;
            right: 3rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: linear-gradient(to bottom , ${props => props.theme.colorPrimary} 40% ,  ${props => props.theme.colorSecondary} ) ;
            /* transform: scale(0); */
        }
    }
    .navbar-mobile__list{
        position: absolute;
        top: 50%;
        /* left: -50%; */
        /* width: 25rem; */
        transform: translate(-50%, -50%);
        list-style: none;
        z-index: 1203;
        &--item{
            text-transform: capitalize;
            padding: 1rem 5rem;
            margin: 1rem 0;
            cursor: pointer;
            text-align: center;
            background-image: linear-gradient(125deg,  transparent 50%,  ${props => props.theme.colorSecondary} 50% ) ;
            font-size: ${props => props.theme.font.xlarge};
            transition: all .4s ease-in-out .1s;
            background-size: 230%;
            &:hover{
                background-position: 100%;
                transform: translateX(1rem);
            }
        }            

    }


    .navbar{  
        background: ${props => props.theme.colorPrimary};
        grid-column: 1/-1;
        display: grid;
        /* height: 6rem; */
        background: transparent;
        grid-template-columns: 1fr 1fr max-content;
        z-index: 1000;

        &-logo {
            justify-items: flex-start;
            height: 5rem;
            width: 5rem;
            margin: 1rem 2rem;
            border-radius: 50%;
            overflow: hidden;

            &--img{
                height: 100%;
                width: 100%;
                object-fit: fill;
            }
        }

        &-list{
            display: flex;
            justify-content: space-around;
            justify-self: flex-end;
            align-content: center;
            align-self: center;
            width: 70%;
            padding-right: 4rem; 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                display: none; 
            }

            &-item , a{
                display: flex;
                position: relative;
                justify-content: center;
                text-align: center;
                padding: 1rem 1rem;
                list-style-type: none;
                height: 100%;
                width: 100%;
                color: ${props => props.theme.colorWhite};
                text-decoration: none;
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                    font-size: ${props => props.theme.font.large}
                }
                &::before{
                    display: flex;
                    content: " ";
                    justify-content: center;
                    position: absolute;
                    bottom: .2rem;
                    width: 0%;
                    height: .2rem;
                    transition: all .3s ease-in;
                    background: ${props => props.theme.colorSecondary};
                }

                &:hover::before{
                    width: 65%;
                }
            }
        }
       
    }

    .info{
        grid-column: 1/-1;
    }
    .headerInfo{
        display: grid;
        align-content: flex-end;
        margin-bottom: 7rem;
        padding-left: 3rem;
        overflow: hidden;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            margin-bottom: 1rem;
        }
        &-text{
            font-family: montserrat;
            padding: 1rem 2rem;
            font-size: ${props => props.theme.font.xxlarge};
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                font-size: ${props => props.theme.font.xLarge};
                padding: .1rem 2rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: ${props => props.theme.font.xLarge};
                padding: .2rem 1rem;
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
            margin-top: 1rem;
            margin-bottom: 2rem;
            z-index: 30;
            box-shadow: .2rem .4rem 10px rgba(0,0,0, .3); 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                margin-top: .1rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                margin-top: .1rem;
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
        width: 100%;
        z-index: 5px;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            grid-row: 2/ span 1;
        }
        img{
            height: 100%;
            width: 100%;
            /* transform: scale(1.2); */
        }
    }
    .waveSvg{
        /* position: relative; */
        grid-column: 1/-1;
        height: 25rem;
        width: 100%;
        background-image: url(${waveSvg});
        background-size: cover;
        background-position: center;
        background-repeat: repeat-x;
        position: absolute; 
        bottom: -15px;
        z-index: -50px;
        overflow: hidden;

        transition: all 3s linear 0s; 
        animation:  ${waveAnimation} 10s linear infinite;
        /* &::after{
            content: '';
            position:absolute;
            left: 0;
            bottom:0;
            height: 23rem;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: repeat-x;
            position: absolute; 
            bottom: 0px;
            z-index: -2px;
            transform: translateY(5px);
            transition: all 3s linear 0s; 
            animation: 19s linear infinite;
        } */
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            height: 25rem;
        }
        /* img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        } */
    }

`
const Header = (props) => {
    // const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true)
    // const toggleMobileNav = () => {
    //     setMobileNavIsOpen(!mobileNavIsOpen) 
    // }
    // // const closeMobileNav = () => {
    // //     setMobileNavIsOpen(false)
    // // }
    // const spring = useSpring({
    //     transform: mobileNavIsOpen ? "scale(170)": "scale(0)"
    // })
    // const springMove = useSpring({
    //     left: mobileNavIsOpen ? "50%;": "-50%"
    // })
    return (
        <Container>
           
            <div className="info">
                <Carusel />
            </div>
            {/*
            <div className="headerInfo">
                <h3 className="headerInfo-text">
                    AJ global ventures
                    makes it easy to sell your 
                    <span className="headerInfo-text--yellow"> bitcoins </span> 
                    and <span className="headerInfo-text--yellow"> gift cards </span> 
                </h3>

                <button className="headerInfo-btn">
                    Get Started
                </button>
                <div className="headerInfo-mobile-demo">
                    <img src={playstore} alt="playStore"/>
                    <img src={applestore} alt="ios"/>
                </div>
            </div>

            <div className="headerSvg">
                <img src={bitcoinSvg} alt="bitcoinSvg"/>
            </div>

            <div className="waveSvg">
             
            </div> */}


            <div
                className="waveSvg"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            />

            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 360,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} style={{
                    position: "absolute",
                    height: "300%",
                    width: "100%",
                    top: "0px",
                    left: "0",
                }} />
        </Container>
    )
}

export default Header
