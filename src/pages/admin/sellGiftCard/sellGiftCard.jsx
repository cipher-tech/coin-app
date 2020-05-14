import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/sellGiftcard.png"
import giftCard from "../../../images/amazon-cardCrop.png"

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
    .rate{
        grid: 1/-1;
        padding: 3rem;
        /* height: 78vh; */
        margin: 2rem;
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
function AdminSellGiftCard() {
    return (
        <Container>
            <div className="rate">
                {/* <img src={rateImage} alt="rate" /> */}

                <div className="form">
                    <h2 className="form__title">Sell Your Gift Card</h2>
                    <p className="form__subTitle">We offer amazing rates for your gift cards</p>
                    <div className="form__title-image">
                        <img src={giftCard} alt="Gift card" className="form__title-image-icon" />
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder="Enter Value" className="form__input-item" />
                        <input type="text" placeholder="Enter Value" className="form__input-item" />
                        <input type="text" placeholder="Enter Value" className="form__input-item" />
                        <input type="text" placeholder="Enter Value" className="form__input-item" />
                        <input type="text" placeholder="Enter Value" className="form__input-item" />
                    </div>

                    <p className="form__amount">
                        <span>You will Be Credited: </span>
                        <span className="form__amount-price">
                            0.00
                        </span>
                    </p>
                    <button className="form__actionButton">
                        Continue
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default AdminSellGiftCard
