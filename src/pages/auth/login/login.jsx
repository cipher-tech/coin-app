import React, { Component } from 'react'
import styled from 'styled-components'

import { ReactComponent as WelcomeSvg } from "../../../images/svgIcons/welcomeSvg.svg"
import Home from "../../../images/svgIcons/home.svg"
import lock from "../../../images/svgIcons/lock.svg"
import envelope from "../../../images/svgIcons/envelope.svg"
import phoneHandset from "../../../images/svgIcons/phone-handset.svg"

import { StyledInput } from '../../../components/styledComponents'


const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    min-height: 100vh;
    min-width: 100vh;
    background: ${props => props.theme.colorLight};
    .login{
        grid-column: 2/6;
        /* height: 60vh; */
        display: grid;
        grid-template-columns: 40% 1fr;
        width: 100%;
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
        -0.2rem -0.4rem 10px rgba(255,255,255, .3);
        background: ${props => props.theme.colorLight};

        &__side-left{
            background: ${props => props.theme.colorPrimaryLight};
            display: grid;
            padding: 2rem;
            font-family: ProximaNovaSoftW03-Regular;
            &-title{
                display: flex;
                align-self: center;
                justify-content: center;
                font-size: ${props => props.theme.font.larger};
                font-weight: 600;
            }
            &-text{
                display: flex;
                text-align: center;
                justify-content: center;
                align-self: center;
                line-height: 2;
                font-size: ${props => props.theme.font.large};

            }
            &-button{
                display: grid;

                align-self: center;
                justify-self: center;
                text-align: center;
                justify-content: center;
                padding: 1rem 6rem;
                font-size: ${props => props.theme.font.xlarge};
                border-radius: 20rem;
                border: 1px solid ${props => props.theme.colorLight};
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: transparent;
                color: ${props => props.theme.colorLight};
                /* border: none; */
                margin: 1rem;

                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    color: ${props => props.theme.colorPrimary};
                }
                &:focus{
                    outline: none;
                }
            }
        }
        &__side-right{
            background: ${props => props.theme.colorWhite};
            width: 100%;
            display: grid;
            justify-items: center;

            &-image{
                display: grid;
                place-self: center
            }

            &-title{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${props => props.theme.colorPrimary};
                font-size: ${props => props.theme.font.larger};
                font-weight: 500;
            }
            &-form{
                width: 75%;
            }
            &-isSugnedIn{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${props => props.theme.colorPrimary};
                &-action{
                    font-weight: 700;
                    text-decoration: underline;
                }
            }
            &-summit{
                display: grid;
                align-self: center;
                justify-self: flex-end;
                text-align: center;
                justify-content: center;
                padding: 1rem 6rem;
                font-size: ${props => props.theme.font.xlarge};
                border-radius: 20rem;
                border: 1px solid ${props => props.theme.colorLight};
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: ${props => props.theme.colorPrimary};
                color: ${props => props.theme.colorLight};
                /* border: none; */
                margin: 1rem 5.5rem;

                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    color: ${props => props.theme.colorPrimary};
                }
                &:focus{
                    outline: none;
                }
            }
        }
    }
`

export default class Login extends Component {
    render() {
        return (
            <Container>
                <div className="login">
                    <div className="login__side-left">
                        <p className="login__side-left-title">Welcome To Back</p>
                        <p className="login__side-left-text">
                            It’s more than just trading Bitcoin
                            and Gift Cards  experience
                            world class transaction processes.
                        </p>
                        <button className="login__side-left-button">Sign Up</button>
                    </div>
                    <div className="login__side-right">
                        <div className="login__side-right-image">
                            <WelcomeSvg />
                        </div>
                        <div className="login__side-right-title">Create Account</div>
                        <div className="login__side-right-form">
                            {/* <StyledInput placeHolder="username" icon={Home} /> */}
                            <StyledInput placeHolder="Email" icon={envelope} />
                            {/* <StyledInput placeHolder="Phone Number" icon={phoneHandset} /> */}
                            <StyledInput placeHolder="Passwords" icon={lock} />
                        </div>
                        <p className="login__side-right-isSugnedIn">
                            Already Signed up? 
                            <span className="login__side-right-isSugnedIn-action"> LogIn</span>
                        </p>
                        <button className="login__side-right-summit">Login</button>
                    </div>
                </div>
            </Container>
        )
    }
}
