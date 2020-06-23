import React from 'react'
import styled from 'styled-components'
import callIcon from "../../images/call-icon1.png"
import liveChat from "../../images/live-chat.png"
import ticketIcon from "../../images/ticket1.png"
import whatsapp from "../../images/whatsapp.png"

const Container = styled.div`
    grid-column: 2/10;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: .2rem 10rem;
    min-height: 100vh;
    width: 100%;
   margin: 1.5rem;

    .header{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        color: ${props => props.theme.colorPrimary};
        place-items: center;
        margin: 1.5rem;
        gap: 1rem;
        align-self: flex-start;
      
        h1{
            font-size: ${props => props.theme.font.xxlarge};
        }

        p{
            font-size: ${props => props.theme.font.xlarge};
        }
    }
    .contactCard{
        display: grid;
        align-self: flex-start;
        justify-items: flex-start;
        grid-template-columns: 1fr ;
        padding:1rem 3rem;
        /* border: 1px solid #00000060; */
        color: ${props => props.theme.colorPrimary};
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        border-radius: 1rem;

        &__logo{
            margin: 2rem 2rem 1rem 0;
            justify-self: flex-start;
            height: 7rem;
            width: 7rem;
        }
        &__title{
            /* color: ${props => props.theme.colorDark}; */
            font-size: ${props => props.theme.font.large};
        }
        &__text{
            font-size: ${props => props.theme.font.medium};
            line-height: 1.5;
            padding: 2rem 0;
        }
        &__button{
            justify-self: center;
            font-size: ${props => props.theme.font.medium};
            padding: .8rem 3rem;
            text-transform: capitalize;
            color: ${props => props.theme.colorSecondary};
            border-radius: 1rem;
            background: transparent;
            border: 1px solid ${props => props.theme.colorPrimary};
            transition: all .1s .1s ease;
             box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);

            &:hover{
                background: ${props => props.theme.colorSecondary};
                color: ${props => props.theme.colorWhite};
            }
            &:focus{
                outline: none;
            }
        }
    }
`
export const ContactUs = () => {
    return (
        <Container>
         <div className="header">
                <h1>
                    Need to speak to someone?
                </h1>
                <p>Stay in torch</p>
            </div>
            <div className="contactCard">
                <img className="contactCard__logo" src={liveChat} alt="logo"/>
                <h3 className="contactCard__title">Live Chat</h3>
                <p className="contactCard__text">
                Contact our amazing support team on live chat and get responses quickly
                </p>

                <button className="contactCard__button"> Contac Us</button>
            </div>
            <div className="contactCard">
                <img className="contactCard__logo" src={whatsapp} alt="logo"/>
                <h3 className="contactCard__title">Live Chat</h3>
                <p className="contactCard__text">
                Contact our amazing support team on live chat and get responses quickly
                </p>

                <button className="contactCard__button"> Contac Us</button>
            </div>
            <div className="contactCard">
                <img className="contactCard__logo" src={callIcon} alt="logo"/>
                <h3 className="contactCard__title">Live Chat</h3>
                <p className="contactCard__text">
                Contact our amazing support team on live chat and get responses quickly
                </p>

                <button className="contactCard__button"> Contac Us</button>
            </div>
            <div className="contactCard">
                <img className="contactCard__logo" src={ticketIcon} alt="logo"/>
                <h3 className="contactCard__title">Live Chat</h3>
                <p className="contactCard__text">
                Contact our amazing support team on live chat and get responses quickly
                </p>

                <button className="contactCard__button"> Contac Us</button>
            </div>
           
        </Container>
    )
}
