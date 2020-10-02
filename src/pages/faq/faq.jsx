import React from 'react'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'
import { DropAccodion } from '../../components'

const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* gap: 10rem; */
    min-height: 100vh;
    width: 100%;
    padding: 1rem;

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
        margin: 1rem;
        h1{
            font-size: ${props => props.theme.font.xxlarge};
        }

        p{
            font-size: ${props => props.theme.font.xlarge};
        }
    }

    .faq__main{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        background: ${props => props.theme.colorWhite};
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        height: auto;
        align-self: flex-start;
        margin: 1rem 0;
        &-header{
            color: ${props => props.theme.colorDark};
            padding: 1.5rem 2.5rem;
        }

    }
   
`
function Faq() {

    return (
        <Container>
            {/* <div className="faq">
                <p className="faq__title" onClick={() => setToggleBody(!toggleBody)}>
                    <span className="faq__title-text">Title</span>
                    <span className="faq__title-icon">+</span>
                </p>
                <animated.div style={{height: spring.height, padding: spring.padding}} className="faq__body">
                    A Bitcoin wallet is an application that stores, 
                    sends and receives bitcoins. 
                    You can think of it like you would a
                    leather wallet full of physical cash, and basically that’s all you need to use Bitcoin.
                </animated.div>
            </div> */}

            <div className="header">
                <h1>
                    Got questions?
                </h1>
                <p>We've Got Answers!</p>
            </div>
            <div className="faq__main">
                <h2 className="faq__main-header">Frequently Asked Question</h2>
                <DropAccodion title="What is a Bitcoin Wallet?" text="A bitcoin wallet is similar to a physical wallet. However, instead of storing physical currencies, a bitcoin wallet is a software program that stores and trades bitcoin. It also stores relevant information such as the secure private key used to access Bitcoin addresses." />
                <DropAccodion title="Who can trade on cjgrandexchange.com?" text="We transact with all buyers/sellers of assets from all parts of the world." />
                <DropAccodion title="How do I sell bitcoin on the website?" text={`⦁	Click on the Buy/Sell page on the navigation bar at the top of the website.
                    ⦁	Input your email address, as well as the amount of bitcoin you want to sell in the available fields.
                    ⦁	Select mode of payment.
                    ⦁	Click on Sell.
                    `} />
                <DropAccodion title="How do I sell gift cards on the website?" text={`⦁	Click on the Buy/Sell page on the navigation bar at the top of the website.
                    ⦁	Click on Giftcards.
                    ⦁	Select the brand of card you want to sell.
                    ⦁	Enter the following appropriate details
                    ⦁	Upload a clear picture of your card.
                    ⦁	Enter your email, as well as the value of your card.
                    ⦁	Click on Submit.
                    `} />
                <DropAccodion title="What is an e-code?" text="Also known as virtual gift cards, e-codes are typically some set of numbers of a gift card with no image." />
                <DropAccodion title="How long does it take to complete a transaction?" text="All transactions typically take within 10 to 15 minutes to be completed." />
                <DropAccodion title="How do I get a payment?" text="Payments are swift and automatic. Get paid into the bank account of your choice at any time of the day." />
                <DropAccodion title="What does N/A mean?" text="N/A stands for not available. This shows especially when a gift card is not available for trading. Contact our Live Support immediately." />
                <DropAccodion title="How Can I Reset My Password?" text="⦁	Proceed to our website and click on the Login button.
                    ⦁	Right on the Login page, you will see a 'Forgot Password' link. Click on the link and you will be asked to Input your email address.
                    ⦁	Click on “Submit” after you have provided your email address. You will be sent an email containing a new password.
                    " />
            </div>
        </Container>
    )
}

export default Faq
