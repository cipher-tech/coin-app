import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from "../images/brandLogo.jpg"
// import playstore from "../images/playstore.svg"
// import applestore from "../images/istore.svg"
// import bitcoinSvg from "../images/bitcoinSvg.svg"
import waveSvg from "../images/waveSvg.svg"
import { Carusel } from '.'
// import wavePng from "../images/wavePng.png"
// import wavePng from "../images/waveFigure.png
import Particles from "react-particles-js";
const waveAnimation = keyframes`
    from{ 
        background-position: 0
    }

    to{
        background-position: 0PX;
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
    height: 90vh;
    position: relative;
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

    .navbar{  
        grid-column: 1/-1;
        display: grid;
        height: 6rem;
        background: transparent;
        grid-template-columns: 1fr 1fr;
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

            &-item{
                display: flex;
                position: relative;
                justify-content: center;
                text-align: center;
                padding: 1rem 1rem;
                list-style-type: none;
                height: 100%;
                width: 100%;
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
        position: relative;
        grid-column: 1/-1;
        height: 20rem;
        width: 100%;
        background-image: url(${waveSvg});
        background-size: cover;
        background-position: center;
        background-repeat: repeat-x;
        position: absolute; 
        bottom: 0px;
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
const Header = () => {
    return (
        <Container>

            <div className="navbar"
                data-aos="fade-right"
                data-aos-offset="00"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                <div className="navbar-logo">
                    <img src={logo} alt="" className="navbar-logo--img" />
                </div>
                <ul className="navbar-list">
                    <li className="navbar-list-item">Home</li>
                    <li className="navbar-list-item">Register</li>
                    <li className="navbar-list-item">Login</li>
                    <li className="navbar-list-item">Services</li>
                    <li className="navbar-list-item">FAQs</li>
                    <li className="navbar-list-item">Testmonials</li>
                </ul>

            </div>
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
                            "value": 160,
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
