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
// import { Link } from 'react-router-dom'
import Axios from 'axios'
import routes from '../../../navigation/routes'
import { fetchUserInfoActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'
import { Modal, PopUpMessage } from '../../../components'
import SecureLS from 'secure-ls'
import { ContextData } from '../../../context/contextData'


const Container = styled.div`
   grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    min-height: 100vh;
    /* min-width: 100vh; */
    /* background: ${props => props.theme.colorLight}; */
    .login{
        grid-column: 2/6;
        /* height: 60vh; */
        display: grid;
        grid-template-columns: 40% 1fr;
        margin: 5rem 0 ;
        width: 100%;
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
        -0.2rem -0.4rem 10px rgba(255,255,255, .3);
        background: ${props => props.theme.colorLight};
        overflow: hidden;
        border-radius: .9rem;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
            grid-column: 1/-1;
            /* width: 90%; */

        }

        &__side-left{
            background: ${props => props.theme.colorPrimary};
            display: grid;
            padding: 2rem;
            position: relative;
            font-family: ProximaNovaSoftW03-Regular;
            /* background-image: url($);
            background-repeat: no-repeat;
            background-position: 104px right; */
            .circle{
                display:none;
                position: absolute;
                height: 20rem;
                width: 20rem;
                right: -10rem;
                top: -10rem;
                background: #eee;
                border-radius: 50%
            } 
            .circle2{
                display:none;
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
                text-decoration: none;
                cursor: pointer;
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
                padding: 1rem;
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
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
                    width: 100%;
                    text-align: center;
                }
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
                /* width: auto; */
                display: grid;
                justify-items: center;
                &-modal{
                    justify-self: center;
                    background-color: ${({theme}) => theme.colorLight};
                    align-self: center;
                    color: ${({theme}) => theme.colorPrimary} ;
                    padding: 2rem;
                    border-radius: 1rem;
                    width: min-content;
                    &-form{
                        width: 80%;
                    }
                }
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
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
                    width: 100%;
                    padding: 2rem;
                    text-align: center;
                }
                &-action{
                    font-weight: 700;
                    text-decoration: none;
                    cursor: pointer;
                    &-red{
                        color: ${props => props.theme.colorError};
                    }
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
class Login extends Component {
    static contextType = ContextData
    constructor(props) {
        super(props)
        this.modalState = {
            resetEmail: "",
        }
        this.modalRule = {
            resetEmail: { required: true, minlength: 4, email: true },
        }

        this.state = {
            isActive: false,
            email: "",
            resetEmail: "",
            password: "",
            type: "client",
            isLoading: false,
            message: "",
            messageDetails: "Email or password incorrect",
            showpopUpMessage: false,
            popUpMessage: "",
            error: false,
        }
        this.rules = {
            email: { required: true, minlength: 4, email: true },
            password: { required: true, minlength: 6, },
            // order: { required: true }
        }
    }
    submit = async (data) => {
        // console.log('data :>> ', data);
        this.setState({ isLoading: !this.state.isLoading })
        Axios.post(routes.api.login, data) //routes.api.login
            .then(res => {
                if (res.data.status === false) {
                    // console.log(res.data);
                    // this.props.history.push(routes.admin.index)
                    this.setState({ message: res.data.data, isLoading: !this.state.isLoading })
                }
                if (res.data.status) {
                    this.props.fetchUserInfo(res.data.data.user)
                    this.setState({ message: false, isLoading: !this.state.isLoading })
                    const logInInfo = {
                        isLoggedIn: true,
                        user: res.data.data.user
                    }
                    // localStorage.userInfo = JSON.stringify(logInInfo)

                    let ls = new SecureLS({ encodingType: "rabbit" })
                    ls.set("userInfo", logInInfo)
                    console.log(ls.get("userInfo"))
                    this.props.history.push(routes.admin.index)

                    this.props.modal && this.props.close() 
                }
            })
            // .then(res => console.log(this.props.users))
            .catch(err => console.log(err))
        // console.log('state :>> ', this.state);
    }
    resetEmail = (data) => {
        console.log(data);
        const { resetEmail } = data
        // setIsLoading(true)
        this.setState(state => { return state.isLoading = true })

        // console.log('data :>> ', data);
        Axios.post(`${routes.api.resetPassword}`, { email: resetEmail })
            .then(res => {
                if (res.data.status === "success") {
                    this.setState((state, props) => {
                        return {
                            popUpMessage: "Password reset Successfully",
                            showpopUpMessage: true,
                            isLoading: false,
                            isActive: false,
                        }
                    })

                    // console.log(res.data);
                    // setPopUpMessage("Added Successfully")
                    // setShowPopUpMessage(true)
                    // setIsLoading(false)

                    // fetchAllRates(res.data.data)
                    // setIsActive(false)
                }
            })
            .catch(res => {
                this.setState((state, props) => {
                    return {
                        error: !false,
                        showpopUpMessage: true,
                        popUpMessage: "An error occurred while trying to Password reset. Make sure you are registered ",
                        isLoading: false,
                        isActive: false,
                    }
                })
            })

    }
    updateFormValue = (name, value) => {
        this.setState({ [name]: value });
    }
    updateResetValue = (name, value) => {
        this.setState({ [name]: value });
    }
    render() {
        console.log(this.context);

        return (
            <Container>
                {this.state.showpopUpMessage ? <PopUpMessage error={this.state.error}> {this.state.popUpMessage} <span onClick={() => this.setState({ setShowPopUpMessage: false })}>✖</span> </PopUpMessage> : null}

                <div className="login">
                    <div className="login__side-left">
                        <div className="circle" />
                        <div className="circle2" />
                        <p className="login__side-left-title">Welcome Back</p>
                        <p className="login__side-left-text">
                           Fill in your details to continue
                        </p>
                        <span onClick={() => this.context.auth.toggleLoginSignUp("signUp")} className="login__side-left-button"> Sign Up</span>
                        {/* <button ></button> */}
                    </div>
                    <div className="login__side-right">
                        <div className="login__side-right-image">
                            <WelcomeSvg />
                        </div>
                        <div className="login__side-right-title">Login To Account</div>
                        {this.state.message ? <p className="login__side-right-message">
                            {this.state.message ? `${this.state.message}` : null}
                            <br />
                            {this.state.message ? `${this.state.messageDetails}` : null}
                        </p>
                            : null}
                        <FormValidator buttonText={this.state.isLoading ? "loading..." : "Submit"} buttonClass="login__side-right-summit"
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
                            <span onClick={() => this.context.auth.toggleLoginSignUp("signUp")} className="login__side-right-isSugnedIn-action"> Sign Up</span>
                                <br />
                            Forgot password?
                            <span className="login__side-right-isSugnedIn-action"
                                    onClick={() => this.setState({ isActive: !false, })}> Reset</span>
                            </p>
                            {/* <button className="login__side-right-summit">Login</button> */}
                        </FormValidator>
                        <Modal isActive={this.state.isActive}>
                            <FormValidator buttonClass="login__side-right-summit"
                                classname=" login__side-right-container-modal "
                                data={this.state} rules={this.modalRule}
                                submit={this.resetEmail}>
                                <span onClick={() => this.setState({ isActive: false })}>X</span>
                                <div className="login__side-right-container-modal-form">
                                    <StyledInput name="resetEmail" handleChange={this.updateResetValue}
                                        value={this.state.resetEmail}
                                        placeHolder="Enter Email" type="email" icon={lock} />
                                    <ValidationMessage field="resetEmail" />
                                </div>
                                <p className="rate-isSugnedIn">
                                    Enter your email and a new password will be sent to your email address.
						        </p>
                            </FormValidator>
                        </Modal>
                    </div>
                </div>
            </Container>
        )
    }
}


const mapStateToProps = ({ users }) => ({
    users: users
})

const mapDispatchToProps = {
    fetchUserInfo: fetchUserInfoActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
