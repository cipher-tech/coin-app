import React from 'react'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'
// import { DropAccodion } from '../../components'
import logo from "../../images/brandLogo.jpg"
// import investmentSvg from "../../images/investment.svg"
import securitySvg from "../../images/security.svg"
import licenceImg from "../../images/licence.jpg"
// import networkSvg from "../../images/coinSteps.svg"


const Container = styled.div`
    grid-column: 2/10;
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
                font-size: ${props => props.theme.font.xlarge};
            }
            &-span{
                padding: 1rem 2rem;
                display: flex;
                margin: 2rem 0;
                justify-content: space-between;
                border-bottom: 1px dashed ${props => props.theme.colorPrimary};
                &-img{
                    height: 7rem;
                    width: 7rem;
                    border-radius: 50%;
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
                }
                &-txt{
                    padding: 0 2rem;
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
                    About CJ Exchange
                </h1>
                {/* <p>We've Got Answers!</p> */}
            </div>
            <div className="faq__main">
                <h2 className="faq__main-header"> Welcome to CJ Exchange </h2>
                <p className="faq__main--text">
                    Welcome to CJ Exchange
                    We are working on multicurrency markets with all benefits of Forex trading. Our staff is a small but active,
                    creative team of professionals open to new information, initiative, and progress.
                    Carefully selected methods of money management and the best trading strategies allowed us to create a
                    safe and most effective investment field.
                    Is there such a Forex strategy that is consistently profitable and at the same time cover the inevitable losses?
                    Yes, there is! This is the so-called 'Fibonacci pivot strategy'. This strategy is based on the famous Fibonacci
                    sequence which is extremely popular among professional currency traders.
                    Our strategy is based around the Fibonacci extension tool and some pivot points. The task of our traders is to
                    determine the most effective algorithm for entry into the transaction. The Fibonacci extension tool helps us to identify
                    possible entry points as well as taking profits points, project future price movement. We apply this strategy into our
                    trading whether we are engaged in a day trading or swing trading.
                    The best thing about trading Fibonacci extension level is that it's having a higher predictive level of where the market
                    is going. This strategy enables our traders to accurately predict the development of different markets and price charts
                    movement to use our maximum potential for a guaranteed profit.
                    Just like a football team does not go into a big game without a plan, we are not entering into investing until we decide
                    on one of many effective strategies to increase our chances of success. In principle, Forex trading boils down to one basic
                    question: will the price go up or down? Our experienced, professional traders use the Fibonacci pivot strategy that helps to
                    minimize risk by showing how to enter or exit trades at the right time.
                    The best Forex trading strategies, as well as the use of special automated programs allows our company to bring high dividends
                    to our customers. Join us! You do not need to understand any subtleties of trading on Forex markets, we will do all the work for you.
                    Why Choose  CJ Exchange?

                   <span className="faq__main--text-span">
                        <img className="faq__main--text-span-img" src={logo} alt="logo" />
                        <span className="faq__main--text-span-txt">
                            The staff of our employees consists exclusively of high-level professionals who have been carefully
                            selected and have proved their professional suitability.
                        </span>
                    </span>

                  

                    <span className="faq__main--text-span">
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
                    </span>

                </p>
            </div>
        </Container>
    )
}

export default AboutUS
