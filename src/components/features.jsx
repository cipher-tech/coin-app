import React from 'react'
import styled from 'styled-components'
import image1 from "../images/bitcoinsvg-1.svg"
import image2 from "../images/bitcoinSvg-2.svg"
import image3 from "../images/bitcoinSvg-3.svg"
import undraw_security from "../images/undraw_security.svg"
import { Heading, FeatureCard, /* SellBitcoinCard */ } from '.'
import { useEffect } from 'react'
// import CoinCalculator from './coinCalculator'

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
    // let script1
    // const [state, setState] = useState(null)
    let script
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.cryptonator.com/ui/js/widget/calc_widget.js";
        script.onload = () => this.scriptLoaded();
        // setState(script)
        //For head
        // document.head.appendChild(script);

        // // For body
        // document.body.appendChild(script);

        // // For component
        // this.div.appendChild(script);
        return () => {

        }
    }, [script])
    return (
        <Container>
            <div>
                {/* <script src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script> */}

            </div>
            <div className="features--heading">
                <Heading title=" Do more with CJ GRAND EXCHANGE" text={`It’s more than just trading `} end={` experience worldclass transaction processes.
                    At CJ GRAND EXCHANGE, we are constantly working to make buying and selling of our products very easy, fast and reliable while exceeding our customer's expectations. 
`}
                    bitcoin=" Bitcoin" and=" and " giftCard="Gift Cards " />
            </div>
            {/* <SellBitcoinCard /> */}
            {/* 
            <FeatureCard title="Currency Calculator" 
            text={`The things that matter to you
                matter to us, you’re secure with us.`} invert={1/-1}  calc image={ <CoinCalculator/>}/> */}
            <FeatureCard title="USER FRIENDLY:"
                text={`Our system is very convenient. Properly developed to suit your daily needs. `} image={image1} />
            <FeatureCard title="Fast Service: "
                text={`Buy and Sell as quick as possible. Get paid as soon as the transaction is completed. `} invert={1 / -1} image={image2} />
            <FeatureCard title="Premium market rates: "
                text={`Bitcoin rates do fluctuate, but at CJ GRAND EXCHANGE, the exchange rate is set at the time of exchange.`} image={image3} />
            
            <FeatureCard title="Safe and Secure Transactions: "
                text={`Same day funding and withdrawals into your bank accounts. Transactions are secured via Secure Sockets Layer (SSL) 128-bit encryption.`} invert={1 / -1} image={undraw_security} />
            {/* <FeatureCard title="Fast Payments for your " 
            text={`We Offer the fastest payments avaliable anywhere anytime!.`} bitcoin=" Bitcoin " and=" and " giftCard=" Gift Cards " image={image3}/>
         */}

        </Container>
    )
}

export default Features
