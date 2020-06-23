import React from 'react'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'
import { DropAccodion } from '../../components'

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
                <DropAccodion title="What is a Bitcoin Wallet?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a Bitcoin Address?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a Physical Card?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a face value card?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a Cash Receipt?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a debit Receipt?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a debit Receipt?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
                <DropAccodion title="What is a debit Receipt?" text="A Bitcoin wallet is an application that stores, sends and receives bitcoins. You can think of it like you would a leather wallet full of physical cash, and basically that’s all you need to use Bitcoin." />
            </div>
        </Container>
    )
}

export default Faq
