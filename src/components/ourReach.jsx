import React from 'react'
import styled from 'styled-components'
import image from "../images/worldSvg.svg"

const Container = styled.div`
    display: grid;
    justify-items: center;
    /* grid-template-columns: 1fr; */
    grid-column: 1/-1;
    background: ${props => props.theme.colorPrimary};
    width: 100%;
    overflow: hidden;
    
    .cont{
        display: grid;
        grid-column: 1/-1;
        place-items: center
    }
    .reach-title{
        grid-column: 1/-1;
        display: grid;
        width: 70%;
        /* flex-basis: 100%; */
        justify-items: center;
        font-size: ${props => props.theme.font.xLarge};
        padding: 3rem 2rem;
        flex-wrap: wrap;
        font-weight: 450;
    }
    .reach-text{
        display: flex;
        width: 60%;
        text-align: center;
        font-size: ${props => props.theme.font.large};
        flex-wrap: wrap;
    }

    .reach-image{
        padding: 3rem;
        display: flex;
        flex-basis: 100%;
        height: 40rem;
        place-content: center;

        img{
            height: 100%;

        }
        
    }
    .reach-form--text{
        font-size: ${props => props.theme.font.large};
        display: flex;
       
        padding: 2rem;
    }
    .reach-form--input{
        display: flex;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        border-radius: 2rem;
        border: 1px solid rgb(255 255 255 / .4);
        font-size: ${props => props.theme.font.large};

        &--text{
            font-size: ${props => props.theme.font.large};
            color: ${props => props.theme.colorWhite};
            background: transparent;
            border: none;
            
            &::placeholder{
                color: ${props => props.theme.colorWhite};
            }
        }
    }
`
const OurReach = () => {
    return (
        <Container>
            <div className="cont">
                <h3 className="reach-title">
                    Anywhere in the World
                    We've got you corved
            </h3>
                <p className="reach-text">
                    Our services are available to you anywhere, anytime.
                    Each AJ global ventures  system is built for you and tailored to suit your need.
                    That’s how we plan to change the world.
                    By joining AJ global ventures, you help to make this dream come true and change the world with us
            </p>

                <div className="reach-image">
                    <img src={image} alt="world pics" />
                </div>
                <div className="reach-form">
                    <p className="reach-form--text">
                        Subscribe to our newsletter
                </p>
                    <p className="reach-form--input">
                        <input type="text" className="reach-form--input--text" placeholder="Email-Address" />
                        <span className="reach-form--input--icon">=></span>
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default OurReach
