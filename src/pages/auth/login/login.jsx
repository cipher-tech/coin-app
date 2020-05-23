import React, { Component } from 'react'
import styled from 'styled-components'

import { ReactComponent as WelcomeSvg } from "../../../images/svgIcons/welcomeSvg.svg"
// import Home from "../../../images/svgIcons/home.svg"
import lock from "../../../images/svgIcons/lock.svg"
import envelope from "../../../images/svgIcons/envelope.svg"
// import phoneHandset from "../../../images/svgIcons/phone-handset.svg"

import { StyledInput } from '../../../components/styledComponents'
import { FormValidator } from '../../../formValidator'
import { ValidationMessage } from '../../../validationMessage'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import routes from '../../../navigation/routes'


const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    min-height: 100vh;
    /* min-width: 100vh; */
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
        /* overflow: hidden; */
        border-radius: .9rem;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
            grid-column: 1/-1;
            width: 90%;

        }

        &__side-left{
            background: ${props => props.theme.colorPrimaryLight};
            display: grid;
            padding: 2rem;
            position: relative;
            font-family: ProximaNovaSoftW03-Regular;
            /* background-image: url($);
            background-repeat: no-repeat;
            background-position: 104px right; */
            .circle{
                position: absolute;
                height: 20rem;
                width: 20rem;
                right: -10rem;
                top: -10rem;
                background: #eee;
                border-radius: 50%
            }
            .circle2{
                position: absolute;
                height: 20rem;
                width: 20rem;
                left: -10rem;
                bottom: -10rem !important;
                background: #eee;
                border-radius: 50%
            }
            &-title{
                display: flex;
                align-self: center;
                justify-content: center;
                text-align: center;
                font-size: ${props => props.theme.font.larger};
                font-weight: 600;
                padding-top: 5rem;
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
                padding: 1rem 4.5rem;
                font-size: ${props => props.theme.font.xlarge};
                border-radius: 20rem;
                border: 1px solid ${props => props.theme.colorLight};
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: transparent;
                color: ${props => props.theme.colorLight};
                /* border: none; */
                margin: 1rem 1rem 4rem 1rem;

                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    color: ${props => props.theme.colorPrimary};
                }
                &:focus{
                    outline: none;
                }
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
                display: none
            }
        }
        &__side-right{
            background: ${props => props.theme.colorWhite};
            width: 100%;
            display: grid;
            justify-items: center;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
                grid-column: 1/-1;
            }
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
            &-message{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${props => props.theme.colorError};
                font-size: ${props => props.theme.font.small};
                font-weight: 500;
            }
            &-container{
                justify-self: flex-start;
                width: 100%;
                display: grid;
                justify-items: center;
            }
            &-form{
                /* justify-self: flex-start; */
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
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            type: "client",
            message: "",
            messageDetails: "Email or password incorrect"
        }
        this.rules = {
            email: { required: true, minlength: 4, email: true },
            password: { required: true, minlength: 6, },
            // order: { required: true }
        }
    }
    submit = (data) => {
        console.log('data :>> ', data);
        Axios.post(routes.api.login, data) //routes.api.login
            .then(res => {
                if (res.data.status === "success") {
                    this.props.history.push(routes.admin.index)
                }
                if (res.data.status === false) {
                    // console.log(res.data);
                    this.props.history.push(routes.admin.index)
                    this.setState({ message: res.data.data })
                }
                if (res.data.status) {
                    // console.log(res.data);
                    this.props.history.push(routes.admin.index)
                    this.setState({ message: false })
                }
            })
        // console.log('state :>> ', this.state);
    }
    updateFormValue = (name, value) => {
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Container>
                <div className="login">
                    <div className="login__side-left">
                        <div className="circle" />
                        <div className="circle2" />
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
                        <p className="login__side-right-message"> 
                            {this.state.message? `${this.state.message}` : null } 
                            <br/>
                            {this.state.message? `${this.state.messageDetails}` : null } 
                        </p>
                        <FormValidator buttonClass="login__side-right-summit"
                            classname=" login__side-right-container "
                            data={this.state} rules={this.rules}
                            submit={this.submit}>
                            <div className="login__side-right-form">
                                <StyledInput name="email" handleChange={this.updateFormValue} value={this.state.email}
                                    placeHolder="Email" type="email" icon={envelope} />
                                <ValidationMessage field="email" />

                                <StyledInput name="password" handleChange={this.updateFormValue}
                                    value={this.state.password}
                                    placeHolder="Password" type="password" icon={lock} />
                                <ValidationMessage field="password" />
                            </div>
                            <p className="login__side-right-isSugnedIn">
                                Don't have an account?
                            <Link to="sign-up" className="login__side-right-isSugnedIn-action">Sign Up</Link>
                            </p>
                            {/* <button className="login__side-right-summit">Login</button> */}
                        </FormValidator>

                    </div>
                </div>
            </Container>
        )
    }
}
