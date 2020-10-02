import React from 'react'
import styled from 'styled-components'
import { /* Heading, */ StepsItem } from '.'
// import image from "../images/svgIcons/review.svg"
import handBg from "../images/Hand.png"

const Container = styled.div`
    display: grid;
    grid-column: 1/-1; 
    /* padding: 1rem 1rem; */
    justify-content: center;
    grid-template-columns: repeat(1, minmax(35rem, 1fr));
    /* gap: 3rem; */
    padding: 3rem 0rem;
    color: ${props => props.theme.colorPrimary};
    width: 100%;
    max-width: 100vw;
    background: ${props => props.theme.colorLightBlue};
    overflow: hidden;
    background-image: url(${handBg});
    background-size: 70%;
    background-position-y: bottom;
    background-position-x: 70%;
    background-repeat: no-repeat;

    .steps-header{
        font-weight: lighter;
        font-size: ${props => props.theme.font.larger};
        width: 80%;
        justify-self: center;
        padding: 2rem 0;
        span{
            font-weight: bold;
        }
    }
    .steps{
        display: grid;
        grid-column: 1/-1;
        grid-template-columns: repeat(2, minmax(35rem, 1fr));
        width: 100%;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            grid-template-columns: repeat(1, minmax(35rem, 1fr));
        }
    }
    .steps-container{
        /* display: grid; */
        /* grid-column: span 2; */
        position: relative;
        width: 80%;
        height: auto;
        margin-left: 5rem;
        /* align-content: flex-start; */
        justify-self: flex-end;      
        border-left: 5px solid ${props => props.theme.colorPrimary};
        align-self: center;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           /* grid-column: 1/-1; */
           width: 90%;
        }
        &-item{
            width: 100%;
            padding: 0rem 2.5rem;
            display: grid;
            &::before{
                content: attr(number);
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
        width: 100%;
        justify-self: flex-end;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           /* grid-column: span 2; */
           padding: 2rem 0 0 4rem;
           height: 40rem;
        }
        img{
            height: 100%;
            width: 90%;
        }
    }
`
const Steps = () => {
    return (
        <Container>
            {/* <Heading title="Get Started In Three Easy Steps" coloredText="Steps" /> */}
            <h3 className="steps-header">
                Get Started in
                <br />
                <span>3 Simple Steps</span>
            </h3>
            <div className="steps">
                <div className="steps-container"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="400"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">

                    <StepsItem step="Sign Up… or not"
                        text={` You can sell bitcoin and giftcards to us without signing up.
                            Contact us on our Live Support, and we will attend to you as soon as possible.
                            However, you need to sign up to buy bitcoin, and for faster transactions.`} number="1" />
                    <StepsItem step="Initiate Transactions" number="2"
                        text={`With the click of a button, you can easily initiate transactions from anywhere. 
                            Our system is properly designed to facilitate the smoothest buying and selling of our products.`} invert={false} />

                    <StepsItem step="Get Paid Instantly"
                        text={`You get funded instantly after confirmation of transactions.
                            Get paid directly into your bank account.`} number="3" />

                </div>


                {/* <div className="steps-image"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-delay="400"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <img src={image} alt="coinSteps" />
                </div> */}
            </div>
        </Container>
    )
}

export default Steps
// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security