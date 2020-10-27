import React from 'react'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'
// import { DropAccodion } from '../../components'
// import logo from "../../images/brandLogo.jpg"
// import investmentSvg from "../../images/investment.svg"
// import securitySvg from "../../images/security.svg"
// import licenceImg from "../../images/licence.jpg"
// import networkSvg from "../../images/coinSteps.svg"


const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* gap: 10rem; */
    min-height: 100vh;
    width: 100%;

    /* align-items: center; */
    place-self: center;

    .header{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        color: ${props => props.theme.colorPrimary};
        place-items: center;
        height: max-content;
        align-self: flex-start;
        margin: 2rem;
        h1{
            font-size: ${props => props.theme.font.xxlarge};
        }

        p{
            font-size: ${props => props.theme.font.xlarge};
            padding: 1rem ;
        }


    }

    .faq__main{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        /* background: ${props => props.theme.colorWhite}; */
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        height: auto;
        align-self: flex-start;
        padding: 1rem 2rem;
        border-radius: 2rem;
        margin: 2rem;
        &-header{
            color: ${props => props.theme.colorPrimary};
            padding: 1.5rem 2.5rem;
        }
        &--text{
            line-height: 2;
            font-size: ${props => props.theme.font.xlarge};
            color: ${props => props.theme.colorPrimary};

            &-header{
                font-size: ${props => props.theme.font.vLarge};
                text-align: center;
                padding: 4rem 0;
                display: flex;
                font-weight: bold;
                justify-content: center;
            }

            &-span{
                padding: 1rem 2rem;
                display: flex;
                flex-direction: column;
                margin: 2rem 0;
                justify-content: space-between;
                /* border-bottom: 1px dashed ${props => props.theme.colorPrimary}; */
                /* &-img{
                    height: 7rem;
                    width: 7rem;
                    border-radius: 50%;
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
                } */
                &--title{
                    font-size: ${props => props.theme.font.xlarge};
                    font-weight: bold;
                    text-align: center;
                    display: flex;
                    justify-content: flex-start;
                }
                &-txt{
                    padding: 1rem 2rem;
                    &:last-child{
                        margin-bottom: 4rem;
                    }
                }
            }
        }

    }
   
`
function AboutUS() {

    return (
        <Container>

            <div className="header">
                <h1>
                    WHO WE ARE
                </h1>
                {/* <p>We've Got Answers!</p> */}
            </div>
            <div className="faq__main">
                <h2 className="faq__main-header"> Welcome to CJ GRAND EXCHANGE </h2>
                <p className="faq__main--text">
                    With over 3 years of focus in the world of cryptocurrencies, we decided to alter direction.
                    Now, we choose to use our experience to help others. Our ramp-up process is designed to help you buy and sell cryptocurrencies and gift cards,
                    bearing in mind that we have to provide you with a delightful crypto trading experience always.
                    We employ the use of the Fibonacci pivot strategy, the safe and most effective investment field that is constantly profitable.
                    This strategy helps our experienced traders to accurately predict the development of different markets, price charts movement,
                    and answer even the basic question: “will the price go up or down?”
                    JOIN US! You do not need to understand any subtleties of trading on Forex markets, we will do all the work for you.

                    <br />
                    <span className="faq__main--text-header">
                        MORE REASONS TO TRADE WITH US
                    </span>

                    <span className="faq__main--text-span">
                        <span className="faq__main--text-span--title">
                            INTEGRITY
                        </span>

                        <span className="faq__main--text-span-txt">
                            That is our watchword. The safety of your transactions is our topmost priority.
                            We work our asses off to do just that.

                        </span>
                    </span>
                    <span className="faq__main--text-span">
                        <span className="faq__main--text-span--title">
                            INNOVATION
                        </span>

                        <span className="faq__main--text-span-txt">
                            We believe that creating an efficient and innovative system makes the market more productive.
                            We aim to become prominent in West Africa and the world at large.

                        </span>
                    </span>

                    <span className="faq__main--text-span">
                        <span className="faq__main--text-span--title">
                            PERFECT CUSTOMER RELATIONSHIP
                        </span>

                        <span className="faq__main--text-span-txt">
                            We ensure to deliver just the best customer experience as well as exceed our customer’s expectations.
                        </span>
                    </span>
                    
                    <span className="faq__main--text-span">

                        <span className="faq__main--text-span-txt">
                            The staff of our employees consists exclusively of high-level professionals who have been carefully
                            selected and have proven their professional suitability.
                        </span>
                        <span className="faq__main--text-span-txt">
                            The company has all title documents, permits, and certificates for conducting trading
                            activities.
                        </span>
                        <span className="faq__main--text-span-txt">
                            We work with the top-notch data protection professionals, all data is securely encrypted.
                        </span>
                        Cjgrandexchange.com is a property of CJ Grand Exchange, a company duly registered with CAC with RC number:
                    </span>

                    {/* <span className="faq__main--text-span">
                        <img className="faq__main--text-span-img" src={licenceImg} alt="logo" />
                        <span className="faq__main--text-span-txt">
                            The company has all title documents, permits and certificates for conducting trading  activities.

                        </span>
                    </span>

                    <span className="faq__main--text-span">
                        <img className="faq__main--text-span-img" src={securitySvg} alt="logo" />
                        <span className="faq__main--text-span-txt">
                            We work with the top-notch data protection professionals, all data is securely encrypted.
                        </span>
                    </span> */}

                </p>
            </div>
        </Container>
    )
}

export default AboutUS
