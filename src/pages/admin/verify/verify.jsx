import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/sellGiftcard.png"
import giftCard from "../../../images/amazon-cardCrop.png"
import { useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import routes from '../../../navigation/routes';
import { PopUpMessage, Storage } from '../../../components';

const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100%;
    min-width: 100%;
    place-items: center;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    position: relative;
    .rate{
        grid-column: 1/-1;
        width: clamp(100%, 100vw, 65vw);
        padding: .1rem;
        height: 100%;
        margin: 12rem .3rem 1rem  ;
        max-width: 70rem;
        img{
            height: 100%;
            /* width: 100%;         */
        }
        
        .form{
            display: grid;
            /* width: clamp(40vw, 20vw, 45vw); */
            /* border: 1px solid red; */
            justify-items: center;
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
            &__title-image{
                width: 25rem;
                object-fit: cover;
                
                &-icon{
                    height: 100%;
                    width: 100%;        
                }
            }
            &__message{
                color: ${props => props.didUpload ? "green" : "red"};
            }
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
            &__amount{
                display: flex;
                margin-right: auto;
                padding: 1rem 2rem;
                justify-content: flex-start;
                align-content: center;
                vertical-align: middle;
                span{
                    align-self: center
                }
                &-price{
                    font-size: ${props => props.theme.font.xlarge};
                    border: 1px solid ${props => props.theme.colorSecondary};
                    border-radius: 1rem;
                    padding: 1rem 2rem;
                    margin: 0 1rem;
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
        }
    }
`
function UserVerify(props) {
    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    // const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [didUpload, setDidUpload] = useState(false);
    const [showpopUpMessage, setShowPopUpMessage] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState(null)
    const [error, setError] = useState(false)

    let handleChange = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        createImage(files[0], e.target.name);
    }
    let createImage = (file, name) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            if (name === "selfi") {
                setImage(e.target.result)
            } else if (name === "idCard") {
                setImage1(e.target.result)
            } else {
                setImage2(e.target.result)
            }
        };
        reader.readAsDataURL(file);
    }
    let handleSubmit = () => {
        setIsLoading(true)

        console.log(image);
        const auth_token = Storage.get("userInfo").user.auth_token
        const formData = new FormData()
        formData.append("image", image)
        let data = {
            id: Storage.get("userInfo").user.id,
            selfi: image,
            address: image2,
            idCard: image1
        }
        console.log(data);
        Axios.post(`${routes.api.requestVerification}?token=${auth_token}`, data)
            .then(res => {
                // console.log(res);
                if (res.data.status === "success") {
                    // setMessage("Uploaded Successfully, Account will be reviewed and verified within three days")
                    setDidUpload(!didUpload)
                    setPopUpMessage("Uploaded Successfully, Account will be reviewed and verified within three days")
                    setShowPopUpMessage(true)
                    setIsLoading(false)
                    
                }
                // setIsLoading(!isLoading);
                setTimeout(() => {
                    props.history.push(routes.admin.index)
                }, 8000);

            })
            .catch(res => {
                setPopUpMessage("An error occured while uploading image. Try again or contact admin")
                setError(true)
                setShowPopUpMessage(true)
                setIsLoading(!true)

                // setMessage("An error occured while uploading image. Try again or contact admin")
            })
    }

    return (
        <Container didUpload={didUpload}>
            {showpopUpMessage ? <PopUpMessage error={error}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null}

            <div className="rate">
                {/* <img src={rateImage} alt="rate" /> */}

                <div className="form">
                    <h2 className="form__title"> Verify Your Accourt</h2>
                    <p className="form__subTitle">To be able to do some transactions you need to be verified</p>
                    <div className="form__title-image">
                        <img src={giftCard} alt="Gift card" className="form__title-image-icon" />
                    </div>
                    {/* <p className="form__message">
                        {message}
                    </p> */}
                    <ul className="form__subTitle">
                        <li>
                            Upload a selfi of you.
                        </li>
                        <li>
                            Upload an image containing your address (eletricity bill) etc.
                        </li>
                        <li>
                            Upload an image containing a valid Id Card with your details.
                        </li>
                    </ul>
                    <div className="form__input">
                        {/* {image} */}
                        <input type="file"
                            alt="verify logo"
                            name="selfi"
                            onChange={e => handleChange(e)} className="form__input-item" />

                        <input type="file"
                            alt="verify logo"
                            onChange={e => handleChange(e)}
                            name="idCard" placeholder="Enter Value" className="form__input-item" />

                        <input type="file"
                            alt="verify logo"
                            onChange={e => handleChange(e)}
                            name="address" placeholder="Enter Value" className="form__input-item" />
                    </div>

                    <p>
                        <img src={image} height="40rem" width="40rem" alt="preview" />
                        <img src={image1} height="40rem" width="40rem" alt="preview" />
                        <img src={image2} height="40rem" width="40rem" alt="preview" />
                    </p>
                    <button onClick={handleSubmit} className="form__actionButton">
                        {isLoading ? "Loading..." : "Continue"}
                    </button>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = ({ users }) => ({
    user: users
})

export default connect(mapStateToProps)(UserVerify)
