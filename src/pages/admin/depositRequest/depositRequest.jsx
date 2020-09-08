import React, { useState, useContext } from 'react'
import envelope from "../../../images/svgIcons/envelope.svg"
// import { ReactComponent as Icon } from "../../../images/svgIcons/envelope.svg"
import styled from 'styled-components'
import { StyledInput } from '../../../components/styledComponents'
// import Button from '../../../components/button/button'
import Axios from 'axios'
import { connect } from 'react-redux'
import routes from '../../../navigation/routes'
import { PopUpMessage, Modal, Storage } from '../../../components'
import qrcode from "../../../images/qrcode.png"
import { FormValidator } from '../../../formValidator'
import { ValidationMessage } from '../../../validationMessage'
import { ContextData } from '../../../context/contextData'


const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    /* grid-template-columns: 1fr; */
    min-height: 100%;
    min-width: 100%;
    /* place-items: center; */
    justify-items: center;
    align-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    position: relative;
    .modal__container{
        place-items: center;
        background: ${props => props.theme.colorLight};
        padding: 2rem 3rem;
        height: max-content;
        align-self: center;
        color: ${props => props.theme.colorDark};
        text-align: center;
        position: relative;
        border-radius: 1rem;
        display: grid;

        .close{
            justify-self: flex-end;
            cursor: pointer;
        }
        img{
            height: 20rem;
            width: 20rem;
        }
        &--text{
            padding: 1rem;
        }
        &-address{
            font-size: ${props => props.theme.font.large};
            color: ${props => props.theme.colorSecondary};
        }
    }
    .title{   
        justify-self: flex-start;
        font-weight: 500;
        color: ${props => props.theme.colorPrimary};
        font-family: ProximaNovaSoftW03-Regular;
        position: relative;
        margin-top: 8rem;
        &::after{
          content: '';
          position: absolute;
          width: 120%;
          height: .4rem;
          bottom: 0;
          left: 0;
          background: ${props => props.theme.colorPrimary};
        }
      }
    .deposit{
        display: grid;
        /* margin-top: 13rem; */
        padding: 2rem ;
        /* display: flex; */
        align-self: center;
        justify-items: center;
        color: ${props => props.theme.colorDark};
        /* height: 1rem; */
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
            -0.2rem -0.4rem 20px rgba(255,255,255, .3);
        
        &-header{
            font-weight: 600;
            font-size: ${props => props.theme.font.xlarge};
            color: ${props => props.theme.colorPrimary};
            justify-self: flex-start;
            padding: 2rem;
        }
        &-form{
            display: grid;
            width: 90%;
            justify-items: center;
            
            &__wrapper{
                justify-items: initial;
            }
        }
        .paymentOptions{
            padding: 1rem 2rem;
                margin: 1rem;
                box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                    .2rem .4rem 10px rgba(0,0,0, .3);
                background: none;
                border-radius: .4rem;  
                border: none;  
                font-size: ${props => props.theme.font.medium};
                color: ${props => props.theme.colorSecondary};
                /* &:hover{
                } */
                &:focus{
                    outline: none;
                    /* color: ${props => props.theme.colorSecondary}; */
                }
        }
        .summit{
            margin: 0 2rem;
        }
    }
`
function DepositRequest(props) {
    const regionContext = useContext(ContextData)
    // const [depositValue, setDepositValue] = useState("")
    const [showPopUpMessage, setShowPopUpMessage] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [refrenceId, setRefrenceId] = useState("")

    const [isModalActive, setIsModalActive] = useState(false)
    const [paymentOptions, setPaymentOptions] = useState('bank')
    const [bitcoinAddress] = useState("d763hei899o889hvy889yvreiohvo99e9jv8r98re8viu89h")
    const [amountInput, setAmountInput] = useState('bank')

    // const updateFormValue = (name, value) => {
    //     setDepositValue(value)
    // }
    const state = {
        amount: amountInput,
        paymentOptions: paymentOptions
        // newPassword: "",
        // slug: slug,
    }
    const modalRule = {
        amount: { required: true, minlength: 2 },
        // paymentOptions: { required: true },
    }
    const handleSubmit = (e) => {
        if (state?.amount.length < 1) {
            console.log("short");

            setError(!false)
            setPopUpMessage("Must be at least 2 digits")
            setShowPopUpMessage(true)
            return
        }
        setError(false)
        const auth_token = Storage.get("userInfo").user.auth_token
        const userId = Storage.get("userInfo").user.id
        const email = Storage.get("userInfo").user.email
        const status = Storage.get("userInfo").user.status
        setIsLoading(true)
        const object = {
            id: userId,
            paymentMethod: paymentOptions,
            email: email,
            amount: +state?.amount
        }
        console.log(object);
        if (status === "verified") {
            Axios.post(`${routes.api.usersDeposit}?token=${auth_token}`, object)
                .then(res => {
                    setShowPopUpMessage(false)
                    if (res.data.status === "success") {
                        setPopUpMessage(res.data.data[0])
                        setRefrenceId(res.data.data[1])
                        setShowPopUpMessage(true)
                        setIsLoading(!true)
                        setIsModalActive(true)
                        // setTimeout(() => {
                        //     props.history.push(routes.admin.index)
                        // }, 8000);
                        return
                    }

                })
                .catch(res => {
                    setPopUpMessage("An error occurred please try again or contact customer support")
                    setError(true)
                    setShowPopUpMessage(true)
                    setIsLoading(!true)
                })
        } else {
            setError(!false)
            setPopUpMessage("You are unverified. Click on the verify link on the menu to verify your account and continue")
            setShowPopUpMessage(true)
            setTimeout(() => {
                setError(false)
                setShowPopUpMessage(false)
                setIsLoading(!true)
            }, 8500)

        }
    }
    // const updateAmountValue = (name, value) => {
    //     state[name] = value
    //     console.log(state);
    // }
    async function copy(e) {

        if (e === "refId") {
            navigator.clipboard.writeText(refrenceId)
        } else {
            navigator.clipboard.writeText(bitcoinAddress)
        }
    }
    // let createImage = (file) => {
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //         return e.target.result
    //     };
    //     reader.readAsDataURL(file);
    // }
    return (
        <Container>
            <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌

                        </span>
                    <img src={qrcode} alt="" />

                    <p className="modal__container--text">
                        please pay exactly ${state.amount} into this bitcoin address
                    </p>

                    <p className="modal__container-address">
                        {bitcoinAddress}
                        <button onClick={() => copy()}> copy</button>
                    </p>
                    <p className="modal__container--text">
                        After successful payment contact customer care with the refrence Id below and prof of confirmation.

                        <span className="modal__container-address">
                            {refrenceId}
                            <button onClick={() => copy("refId")}> copy</button>
                        </span>
                        {/* <button onClick={() =>copy()}> copy</button> */}

                    </p>
                </div>
            </Modal>
            {/* <h1 className="title">Deposit Requests</h1> */}
            {showPopUpMessage ? <PopUpMessage error={error}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null}
            <div className="deposit">
                <h3 className="deposit-header">
                    Deposit Form:
                </h3>
                <p className="deposit-text">
                    Enter your amount to deposit and payment method.
				</p>
                <FormValidator buttonClass="summit"
                    buttonText={isLoading ? "Loading..." : "Submit"}
                    classname="deposit-form"
                    wrapperClass="deposit-form__wrapper"
                    data={state} rules={modalRule}
                    submit={handleSubmit}>
                    <div className="">

                        {/* <StyledInput name="deposit" label="" updatedValue={setDepositValue}
                            handleChange={updateFormValue} value={depositValue}
                            placeHolder="Enter amount to Deposit" type="number" icon={envelope} /> */}

                        {/* <br /> */}
                        <StyledInput name="amount" updatedValue={setAmountInput}
                            value={state.amount}
                            placeHolder="Enter amount to Deposit" type="number" icon={envelope} />
                        <ValidationMessage field="amount" />

                        <select className="paymentOptions" value={paymentOptions} onChange={(e) => setPaymentOptions(e.target.value)} name="paymentOptions">
                            {
                                <>
                                    <option value={"bank"}>
                                        Select payment method
                                    </option>
                                    {
                                        regionContext?.country?.paymentMethods?.map((item, i) => (
                                            <option key={i} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))
                                    }
                                </>
                            }
                        </select>
                        <ValidationMessage field="paymentOptions" />
                    </div>

                </FormValidator>
                {/* <Button className="summit" onClick={handleSubmit}>
                    {isLoading ? "Loading..." : "Request"}
                </Button> */}
            </div>
        </Container>
    )
}

const mapStateToProps = ({ users }) => ({
    user: users
})

export default connect(mapStateToProps)(DepositRequest)