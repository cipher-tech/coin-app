import React from 'react'
import styled from 'styled-components'
import icon from "../../images/invest.svg"
const Container = styled.div`
    .features--content{
    display: grid;
    margin-top: 3rem;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    /* height: 20rem; */
    /* gap: .5rem; */
    border-radius: 1.5rem;
    padding: 1rem 5rem;
    box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
    -0.2rem -0.4rem 20px rgba(255,255,255, .3);

    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
        padding: 3rem 1rem;
        /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
    }
    
    &--calc{
        border-radius: .5px;
        box-shadow: .2rem .4rem 30px rgba(0,0,0, .3),
        -0.2rem -0.4rem 30px rgba(255,255,255, .3);
        margin: 1.5rem;
        border-radius: 1rem;
        &-title{
            display: grid;
            grid-template-rows: max-content;
            font-size: ${props => props.theme.font.xlarge};
            width: 100%;
            text-align: center;
            padding: .5rem 1rem;
            /* height: 5rem; */
            justify-content: center ;
            align-content: center;

            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                width: 100%;
                padding: 1.5rem 1rem;
            }
        }
        &-text{
            grid-column: 1;
            display: grid;
            /* width: 40%; */
            text-align: center;
            justify-items: center;
            align-items: center;
            width: 100%;
            font-size: ${props => props.theme.font.small};
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                width: 100%;
                justify-content: center;
                align-content: flex-start;
                padding: 1rem 2rem;
            }
        }
        .active{
            background: ${props => props.theme.colorSecondary};
            color: ${props => props.theme.colorLight};
        }
        &-switch{
            display: flex;
            text-align: center;
            margin-left: auto;
            justify-content: center;
            padding: 1rem 2rem;
            &--button{
                padding: 1.5rem 3.5rem;
                border: 1px solid ${props => props.theme.colorPrimary};
                font-size: ${props => props.theme.font.large};
                border-radius: .5rem 0 0 .5rem;
            }
        }
        &-options{
            display: grid;
            grid-template-columns: 1fr;
            padding: .5rem 2rem;
            
            &-item{
                background: transparent;
                padding: 1rem .5rem;
                border: thin solid ${props => props.theme.colorPrimary};
                border-radius: .5rem;

                &::placeholder{
                    opacity: .5;
                }
                &:focus{
                    outline: none;
                }
                &:not(:last-child){
                    margin-bottom: 1rem;
                }
            }
        }
        &-output{
            display: flex;
            justify-content: space-between;
            padding: 1rem 2.5rem;
            margin-bottom: 3rem;
            align-content: center;

            &-total{
                font-weight: 600;

                span{
                    font-size: ${props => props.theme.font.large};
                    color: ${props => props.theme.colorSecondary}
                }
            }
            &-rate{
                align-self: center;
                font-weight: 400;
                vertical-align: middle;
            }
        }
    }

    &-image{
        grid-row: ${props => props.invert ? 1 / -1 : ""};
        padding: 1rem;
        justify-self: center;
        width: 100%;
        height: 100%;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            grid-row: 1/-1;
            margin-bottom: 2rem;
        /* grid-column: 2/-1; */
        }

        &-header{
            display: flex;
            padding: 1rem .8rem;
        }

        &-text{
            padding: 2rem;
        }

        img{
            width: 100%;
            height: 25rem;
        }
    }
    }
`
const SellCoin = props => {
    return (
        <Container invert={true}>
            <div className="features--content"
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="500"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-once="true">

                <div className="features--content--calc">
                    <h4 className='features--content--calc-title'>
                        Rate Calculator
                        </h4>
                    <p className="features--content--calc-text">
                        Get the current value of your transaction
                        </p>
                    <div className="features--content--calc-switch">
                        <p className="features--content--calc-switch--button active">Bitcoin</p>
                        <p className="features--content--calc-switch--button">Gift Card</p>
                    </div>
                    <div className="features--content--calc-options">
                        <select name="options" className="features--content--calc-options-item" id="options">
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                        </select>
                        <select name="options" placeholder="Digital Assets" className="features--content--calc-options-item" id="options">
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                        </select>
                        <select name="options" className="features--content--calc-options-item" id="options">
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoin">Bitcoin</option>
                        </select>
                        <input type="text" name="option" className="features--content--calc-options-item" placeholder="Digital Assets" id="options" />
                    </div>
                    <div className="features--content--calc-output">
                        <p className="features--content--calc-output-total">
                            Total <br />
                            <span> NGN 0.00 </span>
                        </p>
                        <p className="features--content--calc-output-rate">
                            Rate:
                                <span> NGN 0.00 </span>
                        </p>
                    </div>
                </div>
                <div className="features--content-image">
                    <h2 className="features--content-image-header">
                        Our Rates:
                        The Best Every Time.
                    </h2>
                    <p className="features--content-image-text">
                       We give you good value for your Gift cards and Bitcoin every time you choose AJ.
                    </p>
                    <img src={icon} alt="bitcoin img" />
                </div>
            </div>
        </Container>
    )
}

export default SellCoin
