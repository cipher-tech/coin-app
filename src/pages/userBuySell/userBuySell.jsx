import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
// import Select from 'react-select';

import { ContextData } from '../../context/contextData'
import SingleCoinRates from "../admin/rates/singleCoinRates" //'../ rates/singleCoinRates'
import chattingSvg from "../../images/chattingSvg.svg"
// import NGNFlag from "../../images/flags/ng.svg"
// import CMFlag from "../../images/flags/cm.svg"
// import GHFlag from "../../images/flags/gh.svg"
// import BuySellComponent from '../../components/buySellComponent/buySellComponent'
import { Modal, SelectRegion } from '../../components'
import SellGiftCardComponent from '../../components/sellGiftCardCOmponent/sellGiftCardComponent'

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
    grid-row: auto;
    .selectContainer{
        grid-column: 1/-1;
        justify-self: flex-end;
        display: flex;
        padding: 2rem;
        height: fit-content;
        .region-select{
            background: transparent;
            padding: .5rem 1rem;
            color: ${props => props.theme.colorDark};
            border-radius: .5rem;
            /* margin-bottom: 1rem; */
            option{
                color: ${props => props.theme.colorPrimary}
            }
            &:focus{
                outline: none;
            }
        }
    }
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
        max-width: 65rem;
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
    .tab{
        display: flex;
        place-content: center;
        width: 100%;
        grid-column: 1/-1;
        height: fit-content;
        &-item{
            padding: 1rem 3rem;
            font-size: ${props => props.theme.font.xlarge};
            color: ${props => props.theme.colorPrimary};
            cursor: pointer;
            /* font-weight : medium; */
            text-align: center;
        }
        .active{
            border-bottom: solid 2px ${props => props.theme.colorSecondary};
        }
    }
`
const UserBuySell = () => {
    const regionContext = useContext(ContextData)
    const [isModalActive, setIsModalActive] = useState(false)
    const [showCoinOptions, setShowCoinOptions] = useState(true)
    // const [selectInput, setSelectInput] = useState('')
    useEffect(() => {
        setTimeout(() => {
            // console.log(typeof +localStorage.counts);

            if (localStorage.counts && +localStorage.counts % 10 === 0) {
                setIsModalActive(true)
                localStorage.counts = +localStorage.counts + 1
            } else if (localStorage.counts) {
                localStorage.counts = +localStorage.counts + 1
            } else {
                setIsModalActive(true);
                localStorage.counts = 1
            }
        }, 3000)
    }, [setIsModalActive])

    const selectRegion = (e) => {
        regionContext.changeRegion(e.target.value)
    }
    const switchTab = (value) => {
        setShowCoinOptions(value)
    }
    // const handleSelect = (value) => {
    //     setSelectInput(value)
    //     console.log(value);
    // }
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];
    // let input = ''
    return (
        <Container>
               {/* <SelectRegion /> */}
            <p className="selectContainer">
                <span title="Select Country" className="">
                    <select className="region-select" defaultValue={localStorage.region ? JSON.parse(localStorage.region).id : "nigeria"} onChange={selectRegion} name="language" id="lang">
                        <option name="nigeria" value="nigeria" > Nigeria </option>
                        <option name="ghana" value="ghana"> Ghana </option>
                        <option name="cameroon" value="cameroon"> Cameroon</option>
                    </select>
                </span>
            </p>

            <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌
                    </span>
                    <img src={chattingSvg} alt="homepage modal icon" />
                    <p className="modal__container--text">
                        Due to constant changes in market price, contact customer care via the
                        live chat icon on the bottom right hand corner of your screen for lower rate latency trading experience.
                        <br /> Happy Trading :)
                    </p>
                </div>
            </Modal>

            <p className="tab">
                <span className={`tab-item ${showCoinOptions ? "active" : null}`} onClick={() => switchTab(true)}>Coins</span>
                <span className={`tab-item ${showCoinOptions ? null : "active"}`} onClick={() => switchTab(false)}>GiftCards</span>
            </p>

            {
                showCoinOptions ?
                    <SingleCoinRates />
                    :
                    <SellGiftCardComponent />
            }
        </Container>
    )
}

export default UserBuySell
