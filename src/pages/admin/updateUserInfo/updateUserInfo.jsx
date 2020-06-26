import React, { useState } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/sellGiftcard.png"
import lock from "../../../images/svgIcons/lock.svg"

import giftCard from "../../../images/bitcoinSvg-2.svg"
import { FormValidator } from '../../../formValidator'
import { StyledInput } from '../../../components/styledComponents'
import { ValidationMessage } from '../../../validationMessage'
import Axios from 'axios'
import routes from '../../../navigation/routes'
import { Modal, PopUpMessage } from '../../../components'

const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100%;
    min-width: 100%;
    place-items: center;
    align-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    /* .rate{
        grid-column: 1/-1;
        width: clamp(100%, 100vw, 65vw);
        padding: .1rem;
        height: 100%;
        margin: 12rem .3rem 1rem  ;
        max-width: 70rem;
        img{
            height: 100%;
            /* width: 100%;         
        } */
        .modal{
            background: white;
            /* width: 100%; */
            display: grid;
            padding: 3rem;
            /* height: 40rem; */
            align-self: center;
            border-radius: 1rem;
            color: ${props => props.theme.colorPrimary};
            span:first-child{
                cursor: pointer;
                justify-self: flex-end;
                font-size: ${props => props.theme.font.xlarge};
            }
            &-form{
                /* justify-self: flex-start; */
                width: 95%;
            }
        }
        
        .updateForm{
            display: grid;
            width: max(max-content);
            /* border: 1px solid red; */
            justify-items: center;
            align-self: flex-start;
            color: ${props => props.theme.colorPrimary};
            margin: 2rem;
            padding: 2rem 3rem;
            box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
            -0.2rem -0.4rem 20px rgba(255,255,255, .3);

            &__title{
                color: ${props => props.theme.colorSecondary};
                padding: .2rem 2rem;
            }
            &__subTitle{
                opacity: .6;
                padding-bottom: 2rem;
            }
            /* &__title-image{
                width: 25rem;
                object-fit: cover;
                
                &-icon{
                    height: 100%;
                    width: 100%;        
                }
            } */
            &__input{
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                width: 100%;
                text-align: center;
                &-item{
                    background: transparent;
                    margin: 2rem;
                    border: none;
                    padding: 1rem;
                    border-bottom: 1px solid ${props => props.theme.colorPrimary};
                    width: 85%;
                    line-height: 2rem;
                    transition: all .1s ease .2s;
                    &:focus{
                        outline: none;
                        border-bottom: 1px solid ${props => props.theme.colorSecondaryDark};
                    }
                    &::placeholder{
                        margin-bottom: 9rem;
                        display: block;
                        color: ${props => props.theme.colorPrimary};
                        opacity: .6;
                    }
                }
            }
            
            &__actionButton{
                padding: 1rem 4rem;
                font-size: ${props => props.theme.font.xlarge};
                border-radius: 1rem;
                box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
                background: ${props => props.theme.colorSecondary};
                color: ${props => props.theme.colorLight};
                border: none;
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

            &-container{
                justify-self: flex-start;
                width: 100%;
                display: grid;
                justify-items: center;
               
            }
            &-form{
                justify-self: flex-start;
                width: 90%;
                padding: 1rem;
                overflow: hidden;
                
                &--item{
                    width: 100%; 
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
                    gap: .5rem 1rem;
                }
            }
            &-isSugnedIn{
                justify-self: center;
                text-align: left;
                width: 70%;
                color: ${props => props.theme.colorPrimary};
                &-action{
                    font-weight: 700;
                    text-decoration: none;
                    &-red{
                        color: ${props => props.theme.colorError};
                    }
                }
            }
    }
`
function UpdateUserInfo() {
    const [isActive, setIsActive] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState(null)
    const [showpopUpMessage, setShowPopUpMessage] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false)
	// const [isModalActive, setIsModalActive] = useState(false)

    const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
    const slug = JSON.parse(localStorage.getItem("userInfo")).user.slug
    const first_name = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.first_name : null
    // const status = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.status : null
    const dob = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.dob : null
    const city = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.city : null
    const coin_address = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.coin_address : null
    const coutry = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.coutry : null
    const email = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.email : null
    const last_name = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.last_name : null
    const phone_no = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.phone_no : null
    const stateOfOrigin = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.state : null
    const zip_code = JSON.parse(localStorage.getItem("userInfo")) ? JSON.parse(localStorage.getItem("userInfo")).user.zip_code : null

    const state = {
        email: "",
        password: "",
        phone: "",
        first_name: "",
        last_name: "",
        dob: "",
        coutry: "",
        state: "",
        city: "",
        coin_address: "",
        zip_code: "",
        slug: slug,
        isLoading: false,
        is_super: true,
        message: "",
        popUpMessage: '',
        showpopUpMessage: false,

        // messageDetails: "Email or password incorrect",
    }
    const rules = {
        email: { minlength: 4, email: true },
        password: { minlength: 6, },
        phone: { minlength: 6, },
        last_name: { minlength: 6, },
        first_name: { minlength: 6, },
    }
    const modalState = {
        oldPassword: "",
        newPassword: "",
        slug: slug,
    }
    const modalRule = {
        oldPassword: { required: true, minlength: 4},
        newPassword: { required: true, minlength: 4 },
    }
    const submit = async (data) => {

        console.log('data :>> ', data);

        Axios.post(`${routes.api.updateUserInfo}?token=${auth_token}`, data) //routes.api.login
            .then(res => {
                if (res.data.status === "success") {
                    console.log(res.data);

                    setPopUpMessage("Info Updated Successfully")
                    setShowPopUpMessage(true)
                    setIsLoading(!true)

                    const logInInfo = {
                        isLoggedIn: true,
                        user: res.data.data
                    }
                    localStorage.userInfo = JSON.stringify(logInInfo)

                    // this.props.history.push(routes.admin.index)

                }
            })
            // .then(res => console.log(this.props.users))
            .catch(err =>{
                setPopUpMessage("An error occured. Please try again or contact Admin")
                setHasError(true)
                setShowPopUpMessage(true)
                setIsLoading(!true)
            })
        // console.log('state :>> ', this.state);
    }
    const updatePassword = (data) => {
        console.log('data :>> ', data);
        Axios.post(`${routes.api.updateUserPassword}?token=${auth_token}`, data) //routes.api.login
            .then(res => {
                if (res.data.status === "success") {
                    console.log(res.data);
                    // console.log("error");
                    setHasError(!true)
                    setPopUpMessage("Password Updated Successfully")
                    setShowPopUpMessage(true)
                    setIsLoading(!true)
                    setIsActive(!true)

                     setTimeout(() => {
                        setShowPopUpMessage(!true)
                    }, 8000);

                }else{
                    // console.log("error");
                    
                    setPopUpMessage(res.data.data)
                    setHasError(true)
                    setShowPopUpMessage(true)
                    setIsLoading(!true)
                    setIsActive(!true)
                    setTimeout(() => {
                        setShowPopUpMessage(!true)
                    }, 8000);
                }
            })
            // .then(res => console.log(this.props.users))
            .catch(err =>{
                // console.log(" >>>", err);
                
                setPopUpMessage("An error occured. Please try again or contact Admin")
                setHasError(true)
                setShowPopUpMessage(true)
                setIsLoading(!true)
                setIsActive(!true)
            })
    }
    const updateFormValue = (name, value) => {
        state[name] = value;
    }
    const updateResetValue = (name, value) => {
        modalState[name] = value 
    }
    return (
        <Container>
			{showpopUpMessage ? <PopUpMessage error={hasError}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false) }>✖</span> </PopUpMessage> : null}

            <div className="rate">
                {/* <img src={rateImage} alt="rate" /> */}

                <div className="updateForm">
                    <h2 className="updateForm__title">Update info</h2>
                    <p className="updateForm__subTitle">Enter new information you wish to change in the form below. Your changes will be effected</p>
                    {/* <div className="updateForm__input">
                        <input type="text" placeholder="Enter Value" className="updateForm__input-item" />
                        <input type="text" placeholder="Enter Bitcoin Value" className="updateForm__input-item" />
                        <input type="text" placeholder="Enter Value" className="updateForm__input-item" />
                        <input type="text" placeholder="Enter Value" className="updateForm__input-item" />
                        <input type="text" placeholder="Enter Value" className="updateForm__input-item" />

                    </div> */}
                    <FormValidator buttonText={state.isLoading ? "loading..." : "Submit"} buttonClass="updateForm__actionButton"
                        classname=" updateForm-container "
                        data={state} rules={rules}
                        submit={submit}>
                        <div className="updateForm-form">
                            <div className="updateForm-form--item">
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="email" label="Email" handleChange={updateFormValue} value={state.email}
                                        placeHolder={email} type="email" icon={lock} />
                                    <ValidationMessage field="email" />
                                </span>
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="first_name" label="First name" handleChange={updateFormValue} value={state.first_name}
                                        placeHolder={first_name} type="text" icon={lock} />
                                    <ValidationMessage field="first_name" />
                                </span>
                            </div>
                            <div className="updateForm-form--item">
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="last_name" label="Last_name" handleChange={updateFormValue} value={state.last_name}
                                        placeHolder={last_name} type="text" icon={lock} />
                                    <ValidationMessage field="last_name" />
                                </span>
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="phone" label="Phone_number" handleChange={updateFormValue} value={state.phone}
                                        placeHolder={phone_no} type="text" icon={lock} />
                                    <ValidationMessage field="phone" />
                                </span>
                            </div>
                            
                            <div className="updateForm-form--item">
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="dob" label="Date_of_Birth" handleChange={updateFormValue} value={state.dob}
                                        placeHolder={dob} type="date" icon={lock} />
                                    <ValidationMessage field="dob" />
                                </span>
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="city" label="City" handleChange={updateFormValue} value={state.city}
                                        placeHolder={city} type="text" icon={lock} />
                                    <ValidationMessage field="city" />
                                </span>
                            </div>
                            <div className="updateForm-form--item">
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="state" label="State" handleChange={updateFormValue} value={state.state}
                                        placeHolder={stateOfOrigin} type="text" icon={lock} />
                                    <ValidationMessage field="state" />
                                </span>
                                <span className="updateForm-form--item--small">
                                    <StyledInput name="coutry" label="Country" handleChange={updateFormValue} value={state.coutry}
                                        placeHolder={coutry} type="text" icon={lock} />
                                    <ValidationMessage field="coutry" />
                                </span>
                            </div>
                            <StyledInput name="zip_code" handleChange={updateFormValue} value={state.zip_code}
                                placeHolder={zip_code} type="text" label="Zip_code" icon={lock} />
                            <ValidationMessage field="zip_code" />

                            <StyledInput name="coin_address" label="Coin_address" handleChange={updateFormValue} value={state.coin_address}
                                placeHolder={coin_address} type="text" icon={lock} />
                            <ValidationMessage field="coin_address" />

                        </div>
                        <div className="form-isSugnedIn">
                            {/* Don't have an account?
                                <br /> */}
                            {/* Forgot password? */}
                            <span className="updateForm-isSugnedIn-action"
                                onClick={() => setIsActive(!false)}> Change Password</span>

                            <br /> <br />
                            {/* <span className="updateForm-isSugnedIn-action-red"> * </span>
                                By clicking the "Open Account" button I confirm the agreement with the terms and conditions.
                            </div> */}
                            {/* <button className="form-summit">Login</button> */}
                        </div>
                    </FormValidator>

                </div>
            </div>
            <Modal isActive={isActive}>
                <FormValidator buttonClass="updateForm__actionButton"
                    classname="modal "
                    data={modalState} rules={modalRule}
                    submit={updatePassword}>
                    <span onClick={() => setIsActive(false)}>X</span>
                    <div className="modal-form">
                        <StyledInput name="oldPassword" handleChange={updateResetValue}
                            value={modalState.oldPassword}
                            placeHolder="Old Password" type="password" icon={lock} />
                        <ValidationMessage field="oldPassword" />

                        <StyledInput name="newPassword" handleChange={updateResetValue}
                            value={modalState.newPassword}
                            placeHolder="New password" type="password" icon={lock} />
                        <ValidationMessage field="newPassword" />
                    </div>
                    <p className="rate-isSugnedIn">
                        Enter your old password and a new password to replace it.
					</p>
                </FormValidator>
            </Modal>
        </Container>
    )
}

export default UpdateUserInfo
