import React from 'react'
import styled from 'styled-components'

// import image from "../images/footerImg.jpg"
import { ReactComponent as MapMarker } from "../images/svgIcons/map-marker.svg"
import { ReactComponent as Phone } from "../images/svgIcons/phone-handset.svg"
import { ReactComponent as Envelope } from "../images/svgIcons/envelope.svg"
import { ReactComponent as Instagram } from "../images/svgIcons/instagram.svg"
import logo from "../images/logo.svg"
import { Link } from 'react-router-dom'
import routes from '../navigation/routes'
// import CoinWidget from './widget/wigjet'

const Container = styled.div`
    display: grid;
    /* height: 50vh; */
    grid-template-columns: 40rem calc(100% - 40rem); 
    align-items: flex-start;
    grid-column: 1/-1;
    background: rgb(5 4 4 / 96%);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 0rem 0rem;
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
        grid-template-columns: 100%; 
        width: 100%;
    }
    .footer-options{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        justify-self: center;
        /* justify-self: center; */
        align-self: center;
        width: 100%;
        height: 100%;
        background: #020202 ;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            grid-row: end;
        }
        &-img{
            align-self: center;
            height: 5rem;
            width: 5rem;
            margin: 2rem 1rem;
            border-radius: 50%;
            overflow: hidden;

            img{
                height: 100%;
                width: 100%;
            }
        }
        &__socialLink{
            font-weight: lighter;
            font-size: ${props => props.theme.font.medium};
            color: ${props => props.theme.colorWhite + "70"};
            a{
                color: ${props => props.theme.colorWhite};
                text-decoration: none;
                font-size: ${props => props.theme.font.larger};
                &:visited, &:hover{
                    color: ${props => props.theme.colorWhite};
                }
                path{
                    fill: ${props => props.theme.colorWhite};
                    height: 100%;
                }
            }
        }
        &__credit{
            color: ${props => props.theme.colorTertiary};
            padding-top: 3rem;
            display: flex;
            /* width: 71%; */
            align-self: center;
        }
    }
    .footer-groupList{
        width: 100%;
        display: grid;
        padding: 2rem 3.5rem;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            grid-template-columns: repeat(auto-fit, minmax(max-content 1fr));
            justify-items: center;
        }
    }
    .footer-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        list-style-type: none;
        text-align: left;
        width: max-content;
        align-self: flex-start;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            justify-content: center;
            width: 100%;
            
        }
        &-item{
            display: flex;
            justify-content: end;
            padding: 1rem 1rem;
            color: ${props => props.theme.colorWhite};
            text-decoration: none;
            &__icon{
                margin-right: 2.5rem;
                path{
                    fill: ${props => props.theme.colorTertiary} !important;
                    height: 100%;
                }
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                justify-content: flex-start;
                width: 100%;
            }
        }
        &-item:first-child{
            font-size: ${props => props.theme.font.large};
            text-align: center;
            font-weight: 500;
            padding: 2rem .5rem;
            color: ${props => props.theme.colorTertiary};
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                justify-content: center;
                width: 100%;
                
            }
        }
    }
`
const Footer = (props) => {
    return (
        <Container>
            {/* {props.children} */}
            <div className="footer-options">
                <div id="google_translate_element"></div>
                <span className="footer-options-img">
                    <img src={logo} alt="logo" />
                </span>
                <p className="footer-options__socialLink">
                    Follow us on instagram for updates
                    <br />
                    <a href="/"> <Instagram /> cjgrandexchange</a>
                </p>
                <span className="footer-options__credit">
                    © 2020 Cj Grand Exchange
                </span>
            </div>
            <div className="footer-groupList">
                <ul className="footer-list">
                    <li className="footer-list-item"> Quick Links </li>
                    <Link to="/contact" className="footer-list-item"> Contact</Link>
                    <Link to="/rates" className="footer-list-item"> Rates</Link>
                    <Link to="/faq" className="footer-list-item"> FAQ</Link>
                    <Link to={routes.public.about} className="footer-list-item">About</Link>
                    <Link to={routes.public.policies} className="footer-list-item">Policies</Link>
                </ul>
                {/* <ul className="footer-list">
                    <li className="footer-list-item">  </li>
                </ul> */}
                <ul className="footer-list">
                    <li className="footer-list-item"> Contact </li>
                    <li className="footer-list-item"> <MapMarker className="footer-list-item__icon" /> Nigeria </li>
                    <a href="tel:+2349064082900" className="footer-list-item"> <Phone className="footer-list-item__icon" /> +234 906 408 2900 </a>
                    <a href="tel:+2348101333244" className="footer-list-item">  <Phone className="footer-list-item__icon" /> +234 810 133 3244 </a>
                    <a href="mailto:cjgrandexchange@gmail.com" className="footer-list-item"> <Envelope className="footer-list-item__icon" /> Mail us </a>
                </ul>

            </div>
            {/* <p className="footer-credit">
                C Cipher 2020
            </p> */}
        </Container>
    )
}

export default Footer