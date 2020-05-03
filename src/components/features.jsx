import React from 'react'
import styled from 'styled-components'
import image1 from "../images/bitcoinsvg-1.svg"
import image2 from "../images/bitcoinSvg-2.svg"
import image3 from "../images/bitcoinSvg-3.svg"
import { Heading, FeatureCard } from '.'

const Container = styled.div`
    display: grid;
    grid-column: 2/10;
    /* background: firebrick; */
    justify-self: center;
    padding: 3rem 1rem;
    color: ${props => props.theme.colorPrimary};
    /* width: 100vw; */  
`
const Features = () => {
    return (
        <Container>
            <div className="features--heading">
            <Heading title=" Do more with AJ global ventures" text={`It’s more than just trading cards, experience worldclass transaction processes.
                    Buy and Sell Giftcards, Perfect Money & Bitcoin.`}/>
            </div>

            <FeatureCard title="Trade Anything" 
            text={`The things that matter to you
                        matter to us, you’re secure with us.`} image={image1}/>
            <FeatureCard title="Trade Anything" 
            text={`The things that matter to you
                        matter to us, you’re secure with us.`} invert={1/-1} image={image2}/>
            <FeatureCard title="Trade Anything" 
            text={`The things that matter to you
                        matter to us, you’re secure with us.`} image={image3}/>
        

        </Container>
    )
}

export default Features
