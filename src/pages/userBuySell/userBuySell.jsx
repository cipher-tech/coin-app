import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import SingleCoinRates from "../admin/rates/singleCoinRates" //'../ rates/singleCoinRates'
import chattingSvg from "../../images/chattingSvg.svg"
import BuySellComponent from '../../components/buySellComponent/buySellComponent'
import { Modal } from '../../components'
// import Rates from '../admin/rates/rates'

const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* gap: 10rem; */
    min-height: 100vh;
    width: 100%;
    justify-items: center;
    position: relative;
    /* align-items: center; */
    place-self: center;
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
        width: 90%;
        justify-self: center;

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
            font-size: ${props => props.theme.font.large};
        }
        &-address{
            font-size: ${props => props.theme.font.large};
            color: ${props => props.theme.colorSecondary};
        }
    }
`
const UserBuySell = () => {
    const [isModalActive, setIsModalActive] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsModalActive(true)
        }, 4000)
    }, [setIsModalActive])
    return (
        <Container>
         <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌
                    </span>
                    <img src={chattingSvg} alt="homepage modal icon"/>
                    <p className="modal__container--text">
                        Due to constant changes in market price, contact customer care via the 
                        live chat icon on the bottom right hand coner of your screen for lower rate latency trading experience. 
                        <br/> Happy Trading :)
                    </p>
                </div>
            </Modal>
            <SingleCoinRates />
            {/* <Rates /> */}
            <BuySellComponent />
        </Container>
    )
}

export default UserBuySell
