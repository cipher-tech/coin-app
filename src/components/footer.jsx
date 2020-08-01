import React from 'react'
import styled from 'styled-components'

import image from "../images/footerImg.jpg"
import logo from "../images/brandLogo.jpg"
import { Link } from 'react-router-dom'
import routes from '../navigation/routes'
import CoinWidget from './widget/wigjet'

const Container = styled.div`
    display: grid;
    /* height: 50vh; */
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    align-items: flex-start;
    grid-column: 1/-1;
    background-image: linear-gradient(to left, rgba(0,0,0,.6) 50%, rgba(0,0,0,.6) 50%), url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    /* width: 100%; */
    padding: 3rem 1rem;

    .footer-options{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-around;
        height: 100%;
        &-select{
            background: transparent;
            padding: 1rem 2rem;
            color: ${props => props.theme.colorWhite};
            border-radius: .5rem;
            /* margin-bottom: 1rem; */
            option{
                color: ${props => props.theme.colorPrimary}
            }
            &:focus{
                outline: none;
            }
        }
        &-img{
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
    }
    .footer-list{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        list-style-type: none;
        text-align: center;

        &-item:first-child{
            font-size: ${props => props.theme.font.large};
            font-weight: 500;
            padding: 2rem .5rem;
            color: ${props => props.theme.colorSecondary}
        }
        &-item{
            padding: 1rem 1rem;
            color: ${props => props.theme.colorWhite};
            text-decoration: none;
        }
    }
    
    .footer-credit{
        grid-row: 1;
    }
`
const Footer = (props) => {
    return (
        <Container>
            {props.children}
            <div className="footer-options">
            <div id="google_translate_element"></div>
                {/* <select className="footer-options-select" name="language" id="lang">
                    <option value="english">Nigeria[English] </option>
                    <option value="french">French </option>
                    <option value="spanish">Spanish </option>
                </select> */}

                <span className="footer-options-img">
                    <img src={logo} alt="logo" />
                </span>
                <span className="footer-credit">
                    CJ Exchange©2020
                </span>
            </div>
            <ul className="footer-list">
                <li className="footer-list-item"> Products </li>
                <Link to="/contact" className="footer-list-item"> Contact</Link>
                <Link to="/faq" className="footer-list-item"> FAQ</Link>
                <Link to={routes.public.about} className="footer-list-item">About</Link>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"> Legal </li>
                <Link to={routes.public.policies} className="footer-list-item">Policies</Link>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"> Company</li>
                <li className="footer-list-item"> name@gmail.com</li>
                <li className="footer-list-item"> 31 Rushgrove Avenue, London, UNITED KINGDOM</li>
                <li className="footer-list-item"> +2349018868939</li>
</ul>

<CoinWidget ele="#mydiv" id="mydiv" link={`<!--Start of Tawk.to Script-->
                <script type="text/javascript">
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5ef62d734a7c6258179b6843/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
                </script>
                <!--End of Tawk.to Script-->`} />
            {/* <p className="footer-credit">
                C Cipher 2020
            </p> */}
        </Container>
    )
}

export default Footer