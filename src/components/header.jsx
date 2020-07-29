import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import homePageModalIcon from "../images/homePageModalIcon.svg"
// import logo from "../images/logo.png"

import waveSvg from "../images/waveSvg.svg"
import { Carusel, Modal } from '.'
import Particles from "react-particles-js";

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
    /* height: 80vh; */
    position: relative;
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpxxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        grid-template-rows: min-content 65% min-content;
        /* height: 80vh; */
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
    .modal__container{
        place-items: center;
        background: ${props => props.theme.colorLight};
        padding: 2rem 3rem;
        height: max-content;
        align-self: center;
        color: ${props => props.theme.colorDark};
        text-align: center;
        position: relative;
        border-radius: 1rem;
        display: grid;
        width: 90%;
        justify-self: center;

        .close{
            justify-self: flex-end;
            cursor: pointer;
        }
        img{
            height: 20rem;
            width: 20rem;
        }
        &--text{
            padding: 1rem;
            font-size: ${props => props.theme.font.large};
        }
        &-address{
            font-size: ${props => props.theme.font.large};
            color: ${props => props.theme.colorSecondary};
        }
    }

    .info{
        grid-column: 1/-1;
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
    const [isModalActive, setIsModalActive] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsModalActive(true)
        }, 4000)
    }, [setIsModalActive])
    return (
        <Container>
            <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌
                    </span>
                    <img src={homePageModalIcon} alt="homepage modal icon" />

                    <p className="modal__container--text">
                        click live chat icon on the bottom right hand coner of your screen to start trading instantly,
                        and exprrience blazing fast trading :)
                    </p>
                </div>
            </Modal>
            <div className="info">
                <Carusel />
            </div>


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
