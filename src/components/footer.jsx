import React from 'react'
import styled from 'styled-components'

import image from "../images/footerImg.jpg"
import logo from "../images/brandLogo.jpg"
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
        }
    }
    
    .footer-credit{
        grid-row: 1;
    }
`
const Footer = () => {
    return (
        <Container>
            <p className="footer-options">
                <select className="footer-options-select" name="language" id="lang">
                    <option value="english">Nigeria[English] </option>
                    <option value="french">French </option>
                    <option value="spanish">Spanish </option>
                </select>

                <span className="footer-options-img">
                    <img src={logo} alt="logo" />
                </span>
                <span className="footer-credit">
                    C Cipher 2020
                </span>
            </p>
            <ul className="footer-list">
                <li className="footer-list-item"> Products </li>
                <li className="footer-list-item"> Giftcards </li>
                <li className="footer-list-item"> BTC </li>
                <li className="footer-list-item"> Perfect Money </li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"> Products </li>
                <li className="footer-list-item"> Giftcards </li>
                <li className="footer-list-item"> Giftcards </li>
                <li className="footer-list-item"> BTC </li>
                <li className="footer-list-item"> BTC </li>
                <li className="footer-list-item"> Perfect Money </li>
            </ul>
            <ul className="footer-list">
                <li className="footer-list-item"> Products </li>
                <li className="footer-list-item"> Giftcards </li>
                <li className="footer-list-item"> BTC </li>
                <li className="footer-list-item"> BTC </li>
                <li className="footer-list-item"> Perfect Money </li>
            </ul>

            {/* <p className="footer-credit">
                C Cipher 2020
            </p> */}
        </Container>
    )
}

export default Footer