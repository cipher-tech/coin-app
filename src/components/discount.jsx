import React from 'react'
import styled from 'styled-components'
import dots from "../images/dots.svg"
import amazonCard from "../images/amazon-card.png"

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    background: ${props => props.theme.colorWhite};
    /* height: 30rem; */
    /* width: 100vw; */
    padding: 2rem 4rem;
    position: relative;
    color: ${props => props.theme.colorPrimary};
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    z-index: -19;

    .dotSvg{
        position: absolute;
        top: 50%;
        left: 10rem;
        z-index: -10;
        transform: translateY(-50%);
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            left: 1rem;
        }
    }
    .discount{
        display: grid;
        place-content: center;

        &-title{
            font-size: ${props => props.theme.font.larger};
            text-align: center;
        }
        &-text{
            font-size: ${props => props.theme.font.large}
        }
        &-btn{
            /* text-align: center; */
            display: grid;
            justify-self: center;
            place-content: center;
            width: 20rem;
            height: 5rem;
            border-radius: 3rem;
            background: ${props => props.theme.colorSecondary};
            color: ${props => props.theme.colorWhite};
            font-size: ${props => props.theme.font.xlarge};
            border: none;
            outline: none;
            margin-top: 1rem;
            margin-bottom: 2rem;
            box-shadow: .2rem .4rem 10px rgba(0,0,0, .3); 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                margin-top: .1rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                margin-top: .1rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                align-self: flex-end;
        }
        }
    }
    .discount--image{
        display: flex;
        /* grid-row: 1/-1; */
        place-content: center;
        width: 100%;
        height: 30rem;
        object-fit: cover;
        overflow: hidden;

        img{
            /* display: block; */
            height: 100%;
            /* width: 100%; */
        }
    }
`
const Discounts = () => {
    return (
        <Container>
            <div className="discount">
                <h3 className="discount-title">
                    Heard of Discounted Cards?
                </h3>
                <p className="discount-text">
                    Get 20% discount off every card when you buy from us.
                </p>
                <button className="discount-btn">
                    Get Started
                </button>
            </div>
            <div className="discount--image">
                <img className="" src={amazonCard} alt="dots pic" />
            </div>
            <img className="dotSvg" src={dots} alt="dots pic" />
        </Container>
    )
}

export default Discounts
