import React from 'react'
import styled from 'styled-components'
import { Heading } from '.'
import image from "../images/coinSteps.svg"

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    padding: 1rem 1rem;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(35rem, 1fr));
    /* gap: 3rem; */
    padding: 3rem 0rem;
    color: ${props => props.theme.colorPrimary};
    /* height: 40rem; */
    /* width: 100%; */
    overflow: hidden;

    .steps{
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: repeat(auto-fit, min-content);

    }
    .steps-container{
        /* display: grid; */
        /* grid-column: span 2; */
        position: relative;
        width: 30rem;
        height: auto;
        align-content: flex-start;
        justify-self: flex-end;
        border-left: 5px solid ${props => props.theme.colorPrimary};
        align-self: center;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           grid-column: 1/-1;
        }
        &-item{
            width: 100%;
            padding: 0rem 2.5rem;
            display: grid;

            &::before{
                content: "1";
                position: absolute;
                left: -3.3rem;
                display: grid;
                place-content: center;
                height: 6rem;
                width: 6rem;
                text-align: center;
                /* padding: 2rem 2.5rem; */
                background: ${props => props.theme.colorSecondary};
                border-radius: 50%;
                color: ${props => props.theme.colorWhite}
            }
            h4{
                display: grid;
                font-size: ${props => props.theme.font.xlarge};
                font-weight: 400;
                padding: 1rem 2rem;
            }

            p{
                font-size: ${props => props.theme.font.medium};
                padding: 1rem 2rem;
            }
        }
    }

    .steps-image{
        display: grid;
        /* grid-column: span 2; */
        height: 100%;
        width: 100%;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           grid-column: span 2;
           padding: 2rem;
           height: 40rem;
        }
        img{
            height: 100%;
            width: 90%;
            /* transform: scale(.8) */
            /* object-fit: cover; */
        }
    }
`
const Steps = () => {
    return (
        <Container>
            <Heading title="Get Started In Three Easy Steps" text="" />

            <div className="steps">
                <div className="steps-container">
                    <div className="steps-container-item">
                        <h4 className="steps-container-item--header">
                            Sign Up... or not
                    </h4>
                        <p className="steps-container-item--text">
                            You can sell bitcoin & giftcards to us without signing up. However,
                            you need to sign up to buy bitcoin, and for faster transactions.
                    </p>
                    </div>
                    <div className="steps-container-item">
                        <h4>
                            Sign Up... or not
                    </h4>
                        <p>
                            You can sell bitcoin & giftcards to us without signing up. However,
                            you need to sign up to buy bitcoin, and for faster transactions.
                    </p>
                    </div>
                    <div className="steps-container-item">
                        <h4>
                            Sign Up... or not
                    </h4>
                        <p>
                            You can sell bitcoin & giftcards to us without signing up. However,
                            you need to sign up to buy bitcoin, and for faster transactions.
                    </p>
                    </div>
                </div>

                <div className="steps-image">
                    <img src={image} alt="coinSteps" />
                </div>
            </div>
        </Container>
    )
}

export default Steps
// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security 