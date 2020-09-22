import React, { useState, useEffect, /* useCallback, */ useContext } from 'react'
import styled /* { keyframes } */ from 'styled-components'
// import homePageModalIcon from "../images/homePageModalIcon.svg"
import loadable from '@loadable/component'

// import logo from "../images/logo.png"

// import waveSvg from "../images/waveSvg.svg"
import girlImage from "../images/girl.png"
import { ContextData } from '../context/contextData'
// import { Carusel,/*  Modal  */} from '.'
const Particles = loadable(() => import('react-particles-js'))

// const waveAnimation = keyframes`
//     from{ 
//         background-position: 0
//     }

//     to{
//         background-position: 0px;
//     }
// `
const Container = styled.div`
    /* display: grid; */
    grid-column: 1/-1;
    /* grid-template-rows: min-content 70% 1fr; */
    /* grid-template-columns: repeat(2, minmax(40rem, 1fr)); */
    /* height: auto; */
    background: ${props => props.theme.colorPrimary};
    /* width: ; */
    height: 75vh;
    position: relative;
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpxxLarge}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        /* grid-template-rows: min-content 65% min-content; */
        /* height: 80vh; */
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
        /* grid-template-rows: min-content 40% min-content; */
        /* height: 100vh; */
    }
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));
        /* grid-template-rows: min-content 65% min-content; */
        /* height: 60vh; */
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
        width: 100%;
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
        height: 100%;
        /* background: ${props => props.theme.colorSecondary}; */
        margin: 0 10rem;
        align-self: flex-end;
        background-image: url(${girlImage});
        background-size: 110%;
        background-position-y: bottom;
        background-position-x: 70%;
        background-repeat: no-repeat;
        display: grid;
        .info-text{
            grid-column: 1/-1;
            align-self: center;

            &__welcome{
                padding: 1.5rem 0rem;
                font-weight: 300;
                font-size: ${props => props.theme.font.xxlarge};
                text-transform: capitalize;
            }
            &__name{
                padding: 1.5rem 0rem;
                color: ${props => props.theme.colorTertiary};
                font-weight: 1000;
                font-size: ${props => props.theme.font.xxlarge};
                text-transform: uppercase;
            }
            &__text{
                padding: 1.5rem 0rem;
                font-weight: 700;
                font-size: ${props => props.theme.font.xlarge};
                text-transform: capitalize;
            }
            &__button{
                padding: 1rem 4rem;
                border-radius: 1rem;
                cursor: pointer;
                background: ${props => props.theme.colorTertiary};
                outline: none;
                border: none;
                font-size: ${props => props.theme.font.large};
                text-transform: capitalize;
                color: ${props => props.theme.colorWhite};
                &:focus{
                    outline: none;
                }
            }
        }
    }
`
const Header = (props) => {
    const loginSignUpContext = useContext(ContextData)
    const [/* isModalActive */, setIsModalActive] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            // console.log(typeof +localStorage.counts);

            if (localStorage.counts && +localStorage.counts % 10 === 0) {
                setIsModalActive(true)
                localStorage.counts = +localStorage.counts + 1
            } else if (localStorage.counts) {
                localStorage.counts = +localStorage.counts + 1
            } else {
                setIsModalActive(true);
                localStorage.counts = 1
            }
        }, 1000)
    }, [setIsModalActive])
    return (
        <Container>
            {/* <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌
                    </span>
                    <img src={homePageModalIcon} alt="homepage modal icon" />

                    <p className="modal__container--text">
                        click live chat icon on the bottom right hand corner of your screen to start trading instantly,
                        and experience blazing fast trading :)
                    </p>
                </div>
            </Modal> */}
            <div className="info">
                <hgroup className="info-text"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">

                    <h3 className="info-text__welcome">
                        welcome to
                    </h3>
                    <h1 className="info-text__name">
                        cj grand exchange
                    </h1>
                    <h4 className="info-text__text">
                        trade your assets from your comfort zone
                    </h4>
                    <button onClick={() => loginSignUpContext.auth.toggleLoginSignUp("signUp")} className="info-text__button">
                        get started
                    </button>
                </hgroup>
                {/* <Carusel /> */}
            </div>


            {/* <div
                className="waveSvg"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            /> */}

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
