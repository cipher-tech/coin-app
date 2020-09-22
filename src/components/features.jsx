import React, { useEffect } from 'react'
import styled from 'styled-components'
import image1 from "../images/svgIcons/featureIcon1.svg"
import image2 from "../images/svgIcons/featureIcon2.svg"
import image3 from "../images/svgIcons/featureIcon3.svg"
import image4 from "../images/svgIcons/featureIcon4.svg"
// import image1 from "../images/bitcoinsvg-1.svg"
// import image2 from "../images/bitcoinSvg-2.svg"
// import image3 from "../images/bitcoinSvg-3.svg"
// import undraw_security from "../images/undraw_security.svg"
// import { Heading, FeatureCard, /* SellBitcoinCard */ } from '.'
// import CoinCalculator from './coinCalculator'

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: repeat(6, 1fr);
    justify-self: center;
    padding: 4rem 1rem;
    background: ${props => props.theme.colorLightBlue};
    color: ${props => props.theme.colorPrimary};
    width: 100%;  

    .feature{
        grid-column: 2/6;
        display: grid;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
            grid-column: 1/-1;
        }
        &__header{
            font-weight: bolder ;
            text-align: center;
            padding: 2rem 0;
            font-size: ${props => props.theme.font.vLarge};
        }
        &__text{
            text-align: center;
            padding: 2rem 0;
            width: 80%;
            justify-self: center;
            font-size: ${props => props.theme.font.large};
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
               width: 100%;
            }
            &-strong{
                font-weight: bold;
            }
        }
        &-image{
            display: flex;
            justify-content: center;
            /* height: 6rem; */
            margin-top: 2rem;
            width: 100%;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpxSmall}) {
                display: grid;
                grid-column: 1/-1;
                height: auto;
                grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
            }
            &__icon{
                width: 10rem;
                height: 9rem;
                border-right: solid 1px  #04132945;
                padding: 0rem 1rem;
                margin-right: 2rem;
                &:last-child{
                    border-right: none;

                }
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpxSmall}) {
                    border-right: none;
                    padding: 2rem 1rem;
                }
                /* object-fit: cover; */
            }
        }
    }
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

    }, [script])
    return (
        <Container>
            {/* <div className="features--heading">
                <Heading title=" Do more with CJ GRAND EXCHANGE" text={`It’s more than just trading `} end={` experience world class transaction processes.
                    At CJ GRAND EXCHANGE, we are constantly working to make buying and selling of our products very easy, fast and reliable while exceeding our customer's expectations. 
`}
                    bitcoin=" Bitcoin" and=" and " giftCard="Gift Cards " />
            </div> */}
            <div className="feature"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true">

                <h2 className="feature__header">
                    Why CJ Grand Exchange?
                </h2>
                <p className="feature__text">
                    At CJ Grand Exchange, it’s more than just trading Bitcoin and Giftcards.
                    We are constantly working to make buying and selling of our products
                    <span className="feature__text-strong">
                        <br />
                        quick, easy, reliable, and PROFITABLE!
                    </span>

                </p>
                <div className="feature-image">
                    <img className="feature-image__icon" src={image1} alt="feature icon" />
                    <img className="feature-image__icon" src={image2} alt="feature icon" />
                    <img className="feature-image__icon" src={image3} alt="feature icon" />
                    <img className="feature-image__icon" src={image4} alt="feature icon" />
                </div>
                <p className="feature__text">
                    Your requests will be duly attended to by well-trained and experienced staff as soon as possible.
                </p>
            </div>

        </Container>
    )
}

export default Features
