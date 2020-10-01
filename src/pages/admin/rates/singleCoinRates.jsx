import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import fx from "money";
// import CoinWidget from "../../../components/widget/wigjet"
import Axios from "axios";
import qrcode from "../../../images/qrcode.png";

import BCH_thumbnail from "../../../images/BCH_thumbnail.png";
import LTC_thumbnail from "../../../images/LTC_thumbnail.png";
import ETH_thumbnail from "../../../images/ETH_thumbnail.png";
import XBT_thumbnail_alt from "../../../images/XBT_thumbnail_alt.png";
import { ReactComponent as BCHIcon } from "../../../images/svgIcons/bitcoinSvg.svg";
import { ReactComponent as ETHIcon } from "../../../images/svgIcons/ethereumSvg.svg";
import { ReactComponent as LTCIcon } from "../../../images/svgIcons/blockchainSvg.svg";
import { ReactComponent as XBTIcon } from "../../../images/svgIcons/blockchainSvg.svg";
import { ReactComponent as ArrowDownCircleSvg } from "../../../images/svgIcons/arrow-down-circle.svg";
import { ReactComponent as Spinner } from "../../../images/svgIcons/spinner.svg";

import routes, { defaultcurrencies } from "../../../navigation/routes";
import { fetchAllRatesActionCreator } from "../../../reduxStore";
import { connect } from "react-redux";
import { StyledInput } from "../../../components/styledComponents";
import { ValidationMessage } from "../../../validationMessage";
import { ContextData } from "../../../context/contextData";
import { Modal, PopUpMessage, Storage } from "../../../components";
// import PaginatedTable from '../../../components/table/tablePagination'
// import CoinWidget from '../../../components/widget/wigjet'

const spinnerRotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const Container = styled.div`
    grid-column: 1/-1; /*  ${(props) => props.gridPos || "2/-1"}; */
    display: ${(props) => (props.hidden ? "none" : "grid")} ;
    min-height: 100%;
    min-width: 100%;
    padding: 1.5rem;
    place-items: flex-start;
    background: ${(props) => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    margin-top: 1rem;
    /* position: relative; */
    
    .loadingSpinner{
        justify-self: center;
        align-self: center;
        text-align: center;
        height: 2rem;
        width: 2rem;
        margin-left: 1rem;
        path{  
            fill: ${(props) => props.theme.colorWhite};
        }
        animation: ${spinnerRotation} 2s infinite;
        /* transform: rotate(40) */
    }
    .modal__container{
        place-items: center;
        background: ${(props) => props.theme.colorLight};
        padding: 2rem 3rem;
        height: max-content;
        align-self: center;
        color: ${(props) => props.theme.colorDark};
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
        }
        &-address{
            font-size: ${(props) => props.theme.font.large};
            color: ${(props) => props.theme.colorSecondary};
            width: 90%;
            overflow-x: scroll;
            width: 100%;
            overflow: hidden;
        }
    }
    .coin{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));
        width: 100%;
        /* padding: 3rem; */
        align-items: flex-start;
        place-items: center;
        gap: 1rem;
        /* height: 78vh; */
        @media only screen and (max-width: ${(props) =>
        props.theme.breakPoints.bpSmall2}) {
           padding: 3rem 0;
           display: flex;
           flex-direction: column-reverse;
        }

        &-options{
            display: grid;
            align-self: flex-start;
            justify-items: center;
            /* grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); */
            box-shadow: .3rem .3rem 20px rgba(0,0,0, .3),
                -0.2rem -0.4rem 20px rgba(255,255,255, .3);
            border-radius: 1rem;
            gap: .5rem;
            /* height: 30rem; */
            max-width: 80rem;
            width: 100%;
            padding: 2rem 1rem;
            position: relative;
            margin-top: 8rem;

            .red{
                color: ${(props) => props.theme.colorError} !important;
            }
            .disabled{
                background: #b9b9b9 !important;
            }
            
            
            &__types{
                position: absolute;
                display: grid;
                top: -1rem;
                width: 90%;
                left: 50%;
                transform: translate(-50%, -50%);
                /* height: 10rem; */
                padding: 2rem 1rem;
                border-radius: 1rem;
                background: ${(props) => props.theme.colorPrimary};
                &--container{
                    grid-column: 1/-1;
                    width: 100%;
                    display: grid;
                    align-self: flex-start;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
                    gap: 1rem 0;

                    .active{
                        background:  ${(props) => props.theme.colorSecondary};
                    }

                    &--item{
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        padding: 1rem;
                        align-self: flex-start;
                        justify-self: center;
                        /* width: max-content; */
                        /* border: solid .5px ${(props) =>
        props.theme.colorWhite}; */
                        box-shadow: .1rem -.1rem 10px rgba(0,0,0, .2),
                            -0.1rem 0.1rem 10px rgba(255,255,255, .2);
                        color: ${(props) => props.theme.colorWhite};
                        cursor: pointer;
                        font-size: ${(props) => props.theme.font.small};
                        border-radius: 1.5rem;
                        transition: all .2s ease-in-out;
                        &:hover{
                        background:  ${(props) => props.theme.colorSecondary};
                        color: ${(props) => props.theme.colorLight};
                        }
                        
            
                        img{
                            justify-self: center;
                            align-self: center;
                            text-align: center;
                            height: 2rem;
                            width: 2rem;
                        }
                        &--text{
                            padding: 0 1rem;
                            justify-self: center;
                            justify-self: center;
                            align-self: center;
                            text-align: center;
                            text-transform: capitalize;
                            
                            &--rate{
                                margin: 1rem 0;
                                font-size: ${(props) => props.theme.font.large};
                                font-weight: 500;
                                color: ${(props) => props.theme.colorSecondary}
                            }
                        }
                    }
                    .price{
                        grid-template-columns: 1fr; 
                        margin-left: 1rem;
                    }
                }
            }

            &__card--container{
                grid-column: 1/-1;
                width: 100%;
                display: grid;
                align-self: flex-start;
                justify-items: center;
                grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
                gap: 1rem 0;


                &--item{
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    padding: 1rem;
                    align-self: flex-start;
                    justify-self: center;
                    /* width: max-content; */
                    border: solid 1.5px ${(props) => props.theme.colorPrimary};
                    color: ${(props) => props.theme.colorDark};
                    border-radius: 1.5rem;
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                    &:hover{
                    background:  ${(props) => props.theme.colorSecondary};
                    color: ${(props) => props.theme.colorLight};
                    }
        
                    img{
                        justify-self: center;
                        align-self: center;
                        text-align: center;
                        height: 2rem;
                        width: 2rem;
                    }
                    &--text{
                        padding: 0 1rem;
                        justify-self: center;
                        justify-self: center;
                        align-self: center;
                        text-align: center;
                        
                        &--rate{
                            margin: 1rem 0;
                            font-size: ${(props) => props.theme.font.large};
                            font-weight: 500;
                            color: ${(props) => props.theme.colorSecondary}
                        }
                    }
                }
                .price{
                    grid-template-columns: 1fr; 
                    margin-left: 1rem;
                }
            }

            &__buy-sell{
                grid-column: 1/-1;
                font-size: ${(props) => props.theme.font.xlarge};
                padding: 1.5rem 2rem;
                margin-top: 3rem;
                transition: all .5s ease;
                display: flex;
                color: ${(props) => props.theme.colorPrimary};
                &--item{
                    padding: .5rem 2rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    cursor: pointer;
                }
                .tab{
                    border-bottom: solid 2px ${(props) =>
                    props.theme.colorPrimary};
                    transition: all .2s linear;
                }
            }
            
            &__header{
                grid-column: 1/-1;
                font-size: ${(props) => props.theme.font.xlarge};
                padding: 1rem 1rem;
                font-weight: 600;
                /* margin-top: 1rem; */
                transition: all .5s ease;
                color: ${(props) => props.theme.colorPrimary}
            }

            &__amounts{
                position: relative;
                display: flex;
                &::before{
                content: attr(symbol);
                color: ${(props) => props.theme.colorPrimary};
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                padding: 0 2rem;
                font-size: ${(props) => props.theme.font.xlarge};
                }
            }
            &__prices{
                display: flex;
                justify-content: space-evenly;
                grid-column: 1/-1;
                width: 100%;
                font-size: ${(props) => props.theme.font.large};
                padding: 1rem 1rem;
                font-weight: 600;
                /* margin-top: 1rem; */
                transition: all .5s ease;
                color: ${(props) => props.theme.colorSecondary};

                &--icon{
                    height: 2rem;
                    width: 2rem;
                    margin-left: .5rem;
                    color: ${(props) => props.theme.colorPrimary};
                    path{  
                        fill: ${(props) => props.theme.colorPrimary};
                        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                            .2rem .4rem 10px rgba(0,0,0, .3);
                    }
                }
            }

            &__group{
				border: none 1px;
				padding: .3rem;
				width: 100%;
				margin: .5rem 0;
            }
            &-attributes{
				grid-column: 1/-1;
				display: flex;
				width: 100%;
				/* min-width: 55rem; */
				justify-content: space-around;
				padding: 1rem 1.5rem;
				margin: 1rem 0;
				box-shadow: .2rem .3rem 10px rgba(0,0,0, .3),
					-0.2rem -0.3rem 20px rgba(255,255,255, .3);
				border-radius: 1.4rem;
				&__item{
					width: 100%;
					text-transform: capitalize;
					text-align: center;
					justify-content: space-around;
                    color: ${(props) => props.theme.colorDark};
				}
	  		}

            &__value{
                margin: 2rem 0 ;
                background: ${(props) => props.theme.colorDark};
                padding: 1.5rem 7.5rem;
                font-size: ${(props) => props.theme.font.xlarge};
                opacity: .8;
                border-radius: .5rem;
            }
            .input-container{
                margin: .2rem 0 ;
                background: transparent;
                padding: 1rem 2.5rem 1rem 5rem;
                font-size: ${(props) => props.theme.font.xlarge};
                opacity: .8;
                border: solid 1px ${(props) => props.theme.colorPrimary};
                border-radius: .5rem;

                &::before{
                    content: "$";
                    position: absolute;
                    top: 1.6rem;
                    left: 2.5rem;
                    color: ${(props) => props.theme.colorDark};
                }
            }

            &-paymentOptions{
                padding: 1rem 2rem;
                margin: 1rem;
                box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                    .2rem .4rem 10px rgba(0,0,0, .3);
                background: none;
                border-radius: .4rem;  
                border: none;  
                font-size: ${(props) => props.theme.font.medium};
                color: ${(props) => props.theme.colorSecondary};
                /* &:hover{
                } */
                &:focus{
                    outline: none;
                    /* color: ${(props) => props.theme.colorSecondary}; */
                }
            }
            &__acceptedPaymentMethods{
                font-size: ${(props) => props.theme.font.small};
                color: red;
            }
            &__button{
                display: flex;
                padding: 1rem 6rem;
                border-radius: 2rem;
                color: ${(props) => props.theme.colorWhite};
                background: ${(props) => props.theme.colorPrimary};
                border: none;
                font-size: ${(props) => props.theme.font.large};
                &:active{
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
                        .2rem .4rem 10px rgba(0,0,0, .3);
                    /* color: ${(props) => props.theme.colorPrimary}; */
                }
                &:focus{
                    outline: none;
                }
            }
        }
        .amount{
            display: flex;
            justify-content: center;
            width: 100%; 
            
        }
       
        
        &-icon{
            display: grid;
            align-items: center;
            align-items: center;
            justify-items: center;
            height: 100%;
            width: 100%;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            cursor: pointer;
            align-self: center;
            justify-self: ${(props) =>
        props.sidenavIsOpen ? "center" : "flex-start"};
            svg{
                height: 20rem;
                width: 20rem;
            }
            svg path{  
                /* fill: white;
                color: white; */
            }
        }
        /* img, #icon{
            height: 3rem;
            width: 3rem;
        } */

    }
`;
function SingleCoinRates({ gridPos, fetchAllRates, rates, hidden }) {
    // console.log(Storage.get("userInfo"));
    const isVerified = !Storage.get("userInfo")
        ? ""
        : Storage.get("userInfo")?.user?.status || "";

    const coins = rates?.allRates?.slice(0, 4);

    const coinInfo = {
        bitcoin: {
            id: "bitcoin",
            currentRate: 4102433,
            selling: 430,
            short: "BTC",
            buying: 410,
        },

        etherum: {
            id: "etherum",
            currentRate: 4102433,
            selling: 430,
            short: "ETH",
            buying: 410,
        },
        xpp: {
            id: "xpp",
            currentRate: 4102433,
            selling: 430,
            short: "XPP",
            buying: 410,
        },
        lite: {
            id: "lite",
            currentRate: 4102433,
            selling: 430,
            short: "LTE",
            buying: 410,
        },

        bitcoinPrice: 1000,
    };
    // const current = 4099999

    const icons = [
        BCH_thumbnail,
        ETH_thumbnail,
        LTC_thumbnail,
        XBT_thumbnail_alt,
    ];

    const [showinput, setShowinput] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState([]);
    const [selectedCoinClass, setSelectedCoinClass] = useState([]);
    const [toggleSelectedCoinClass, setToggleSelectedCoinClass] = useState(false);
    // const [selectedCoinImage, setSelectedCoinImage] = useState(icons[0])
    const [amount, setAmount] = useState(coinInfo.bitcoinPrice);
    const [input, setInput] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [rate, setRate] = useState(0);
    const [dollarSellingPrice, setDollarSellingPrice] = useState("");
    const [nairaSellingPrice, setLocalSellingPrice] = useState("");
    const [modeOfPayment, setModeOfPayment] = useState("");
    const [bitcoinAddress] = useState(process.env.REACT_APP_WALLET_ADDRESS)
    const [isSelling, setIsSelling] = useState(true);
    const [isModalActive, setIsModalActive] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(null);
    const [showpopUpMessage, setShowPopUpMessage] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [refrenceId, setRefrenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [, setIsCopied] = useState('')

    const regionContext = useContext(ContextData);
    // fx.rates = defaultcurrencies.rates
    // updateRate(1000)
    async function copy(type) {
        if (type === "refId") {
            navigator.clipboard.writeText(refrenceId)
            setIsCopied(true)
            return
        }
        navigator.clipboard.writeText(bitcoinAddress)
        setIsCopied(true)
    }
    
    const user_id = !Storage.get("userInfo")
        ? ""
        : Storage.get("userInfo")?.user?.id || "";

    const auth_token = Storage.get("userInfo")?.user?.auth_token || "";

    useEffect(() => {
        fx.base = "USD";
        const auth_token = !Storage.get("userInfo")
            ? ""
            : Storage.get("userInfo")?.user?.auth_token || "";
        // console.log('data :>> ', data);
        // updateRate(1000)
        Axios.get(routes.exchangeApi)
            .then((res) => {
                fx.rates = res.data.rates;
                console.log("live", res.data.rates);
            })
            .catch((err) => {
                console.log(err);
                fx.rates = defaultcurrencies.rates;
                console.log("dummy");
            })
            .finally((res) =>
                Axios.get(`${routes.api.getRates}?token=${auth_token}`)
                    .then((res) => {
                        fetchAllRates(res.data.data);
                        updateSelectedCoin(res.data.data[0], res.data.data);
                        return;
                    })
            );

        // eslint-disable-next-line
    }, [fetchAllRates]);

    const updateAmount = (value) => {
        setAmount(value);
        setShowinput(false);
        updateRate(value);
    };
    const updateRate = (value) => {
        //   let quantity = (value/current).toFixed(6)
        setAmount(value);
        setRate((value / selectedCoin?.buying || 1).toFixed(6));
    };

    const updateInput = (name, value) => {
        setInput(value);
        updateRate(value);
        // console.log(value); 
    };
    const updateSelectedCoin = (coin, allCoins) => {
        let coinClass = allCoins?.filter(item => item.name === coin.name) || rates?.allRates?.filter(item => item.name === coin.name)
        setSelectedCoinClass(coinClass)
        // console.log(selectedCoinClass);

        selectCoinImage();
        if (!coin.converted) {
            coin.buying = fx
                .convert(coin.buying, {
                    from: "NGN",
                    to: regionContext.country.code || "NGN",
                })
                .toFixed(1);

            coin.selling = fx
                .convert(coin.selling, {
                    from: "NGN",
                    to: regionContext.country.code || "NGN",
                })
                .toFixed(1);
        }
        //to notify that coin buying and selling prop has been converted to the accurate region
        coin.converted = true
        setShowinput(false);
        setSelectedCoin(coin);
    };

    const updateSellingDollarAmounts = (e) => {
        setDollarSellingPrice(e.target.value);
        setLocalSellingPrice(e.target.value * selectedCoin?.buying || 1);
    };
    const updateSellingLocalAmounts = (e) => {
        setDollarSellingPrice(e.target.value / selectedCoin?.buying || 1);
        setLocalSellingPrice(e.target.value);
    };
    const sellButton = async (e) => {
        await setShowPopUpMessage(false);

        if (isNaN(dollarSellingPrice) || isNaN(nairaSellingPrice)) {
            setPopUpMessage("Value must be a number.");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        } else if (dollarSellingPrice === "" || nairaSellingPrice === "") {
            setPopUpMessage("Please enter a value");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        } else if (modeOfPayment === "") {
            setPopUpMessage("Please select mode of payment.");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        } else if (userEmail.length < 4) {
            setPopUpMessage("Please enter a valid email.");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        }
        const data = {
            user_id: user_id || null,
            amount: dollarSellingPrice,
            type: "bitcoin",
            action: "sell",
            email: userEmail,
            modeOfPayment: modeOfPayment,
        };
        console.log(data);
        await setIsLoading(true);

        Axios.post(`${routes.api.userSellCoin}`, data)
            .then((res) => {
                // console.log(res);
                if (res.data.status === "success") {
                    setRefrenceId(res.data.data);
                    // setMessage("Uploaded Successfully, Account will be reviewed and verified within three days")
                    setPopUpMessage("Order placed successfully");
                    setShowPopUpMessage(true);
                    setIsLoading(false);
                    setIsModalActive(true);
                }
                return setTimeout(() => {
                    setShowPopUpMessage(false);
                    setHasError(false);
                }, 8000);
            })
            .catch((res) => {
                setPopUpMessage("An error occurred. Try again or contact admin");
                setHasError(true);
                setShowPopUpMessage(true);
                setIsLoading(false);

                return setTimeout(() => {
                    setShowPopUpMessage(false);
                    setHasError(false);
                }, 8000);
            });
    };

    const buyButton = async (e) => {
        await setShowPopUpMessage(false);

        if (amount < 2 ) {
            setPopUpMessage("Must be at least 2 digits.");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        } else if (modeOfPayment === "") {
            setPopUpMessage("Please select mode of payment.");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        }else if(!user_id){
            setPopUpMessage("Must be registered");
            setHasError(true);
            await setShowPopUpMessage(true);
            return setTimeout(() => {
                setShowPopUpMessage(false);
                setHasError(false);
            }, 8000);
        } 
        const data = {
            user_id: user_id,
            amount: amount,
            type: "bitcoin",
            action: "buy",
            email: userEmail || null,
            modeOfPayment: modeOfPayment,
        };
        console.log(data);
        await setIsLoading(true);

        Axios.post(`${routes.api.userBuyCoin}?token=${auth_token}`, data)
            .then((res) => {
                // console.log(res);
                if (res.data.status === "success") {
                    setRefrenceId(res.data.data);
                    // setMessage("Uploaded Successfully, Account will be reviewed and verified within three days")
                    setPopUpMessage("Order placed successfully");
                    setShowPopUpMessage(true);
                    setIsLoading(false);
                    setIsModalActive(true);
                }
                return setTimeout(() => {
                    setShowPopUpMessage(false);
                    setHasError(false);
                }, 8000);
            })
            .catch((res) => {
                setPopUpMessage("An error occurred. Try again or contact admin");
                setHasError(true);
                setShowPopUpMessage(true);
                setIsLoading(false);

                return setTimeout(() => {
                    setShowPopUpMessage(false);
                    setHasError(false);
                }, 8000);
            });
    };

    const selectCoinImage = () => {
        switch (selectedCoin.name) {
            case "bitcoin": {
                // setSelectedCoinImage(icons[0])
                return <BCHIcon />;
            }
            case "etherum": {
                // setSelectedCoinImage(icons[1])
                return <ETHIcon />;
            }
            case "xpss": {
                // setSelectedCoinImage(icons[2])
                return <LTCIcon />;
            }
            case "cycoin": {
                // setSelectedCoinImage(icons[3])
                return <XBTIcon />;
            }

            default: {
                // setSelectedCoinImage(icons[0])
                return <XBTIcon />;
            }
        }
    };
    return (
        <>

            {showpopUpMessage ? (
                <PopUpMessage error={hasError}>
                    {" "}
                    {popUpMessage}{" "}
                    <span onClick={() => setShowPopUpMessage(false)}>✖</span>{" "}
                </PopUpMessage>
            ) : null}
            {/* {console.log(fx.rates)} */}
            <Container hidden={hidden} gridPos={gridPos}>
            <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span
                        role="img"
                        aria-label="img"
                        className="close"
                        onClick={() => setIsModalActive(false)}
                    >
                        ❌
                    </span>
                    <img src={qrcode} alt="" />

                    <p className="modal__container--text">
                        please pay exactly ${isSelling? dollarSellingPrice: amount} into this {isSelling ? "bitcoin address" : "account"}
                    </p>

                    <p className="modal__container-address">
                        {bitcoinAddress}
                        <button onClick={() => copy()}> copy</button>
                    </p>

                    <p className="modal__container--text">
                        After successful payment contact customer care with the unique
                        refrence_id below,and proof of payment. <br />
                        <span className="modal__container-address">
                            {refrenceId}
                            <button onClick={() => copy("refId")}> copy</button>
                        </span>
                    </p>
                </div>
            </Modal>
                {/* <div className="loadingScreen"/> */}
                <div className="coin">
                    <div className="coin-options">
                        <div className="coin-options__types">
                            <div className="coin-options__types--container">
                                {coins?.map((coin, index) => (
                                    <div
                                        key={index}
                                        className={`coin-options__types--container--item ${
                                            selectedCoin.name === coin.name ? " active" : ""
                                            }`}
                                        onClick={() => updateSelectedCoin(coin)}
                                    >
                                        <img src={icons[index]} alt="bitcoin" />
                                        <p className="coin-options__types--container--item--text">
                                            {coin.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="coin-options__buy-sell">
                            {!isVerified ? null : (
                                <span
                                    className={`coin-options__buy-sell--item ${
                                        isSelling ? null : " tab"
                                        }`}
                                    onClick={() => setIsSelling(false)}
                                >
                                    Buy
                                </span>
                            )}
                            <span
                                className={`coin-options__buy-sell--item ${
                                    isSelling ? " tab" : null
                                    }`}
                                onClick={() => setIsSelling(true)}>
                                sell
                            </span>
                        </p>
                        <h3 className="coin-options__prices">
                            

                            {isSelling? <span>
                                We buy at: {selectedCoin?.buying}/$
                                {toggleSelectedCoinClass ?
                                    <span style={{ cursor: "pointer" }} role="img" aria-label="emoji" onClick={() => setToggleSelectedCoinClass(!toggleSelectedCoinClass)}>❌</span>
                                    :
                                    <ArrowDownCircleSvg onClick={() => setToggleSelectedCoinClass(!toggleSelectedCoinClass)} className="coin-options__prices--icon" />
                                }
                            </span>: null}

                            {isSelling? null : (
                                <span>We sell at: {selectedCoin?.selling}/$</span>
                            )}

                            {isSelling ? null : <span>Available Qty: {selectedCoin?.quantity || 0}</span>}
                        </h3>
                        <br />
                        {
                            !toggleSelectedCoinClass ||
                            <div className="coin-options__group" >
                                <p className="coin-options-attributes" >
                                    <span className="coin-options-attributes__item">Class</span>
                                    <span className="coin-options-attributes__item">Range</span>
                                    <span className="coin-options-attributes__item">Rate</span>
                                </p>
                                {
                                    selectedCoinClass.map((item, index) => (
                                        <p key={index} className="coin-options-attributes">
                                            <span className="coin-options-attributes__item"> {item.class} </span>
                                            <span className="coin-options-attributes__item"> {item.from} -  {item.to} </span>
                                            <span className="coin-options-attributes__item"> {item.buying} </span>
                                        </p>
                                    ))
                                }
                            </div>
                        }
                        {!isSelling && !selectedCoin?.quantity ? (
                            <h3 className="coin-options__header red">
                                {" "}
                                Currently not available
                            </h3>
                        ) : (
                                ""
                            )}

                        <h3 className="coin-options__header">
                            How much {selectedCoin?.name} do you want to{" "}
                            {isSelling ? "sell" : "buy"}?
                        </h3>

                        {isSelling ? null : (
                            <>
                                <div className="coin-options__card--container amount">
                                    <div className="coin-options__card--container--item price">
                                        <p
                                            className="coin-options__card--container--item--text"
                                            onClick={() => updateAmount(1000)}
                                        >
                                            ₦1000
                                        </p>
                                    </div>
                                    <div className="coin-options__card--container--item price">
                                        <p
                                            className="coin-options__card--container--item--text"
                                            onClick={() => updateAmount(1500)}
                                        >
                                            ₦1500
                                        </p>
                                    </div>
                                    <div className="coin-options__card--container--item price">
                                        <p
                                            className="coin-options__card--container--item--text"
                                            onClick={() => setShowinput(true)}
                                        >
                                            Own Amount
                                        </p>
                                    </div>
                                </div>
                                {!showinput ? null : (
                                    <div className="coin-options__form">
                                        <StyledInput
                                            name="amount"
                                            handleChange={updateInput}
                                            value={input}
                                            placeHolder="Enter Amount"
                                            type="text"
                                            icon={BCH_thumbnail}
                                        />
                                        <ValidationMessage field="amount" />
                                    </div>
                                )}
                                <div className="coin-options__value">
                                    {/* {selectedCoin.short} */} $ {rate}
                                </div>
                            </>
                        )}
                        {!isSelling ? null : (
                            <>
                                <p>
                                    {/* <span>{ console.log(regionContext?.country?.symbol)}</span>  */}
                                    <span className="coin-options__amounts" symbol={"@"}>
                                        <input
                                            type="text"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            className="coin-options__value input-container"
                                            placeholder="Email"
                                        />
                                    </span>
                                </p>
                                <p>
                                    {/* <span>{ console.log(regionContext?.country?.symbol)}</span>  */}
                                    <span className="coin-options__amounts" symbol={"$"}>
                                        <input
                                            type="number"
                                            value={dollarSellingPrice}
                                            onChange={updateSellingDollarAmounts}
                                            className="coin-options__value input-container"
                                            placeholder="0.0"
                                        />
                                    </span>
                                </p>
                                <p>
                                    <span className="coin-options__header">We will pay you:</span>
                                    <br />
                                    <span
                                        className="coin-options__amounts"
                                        symbol={regionContext?.country?.symbol || "₦"}
                                    >
                                        <input
                                            type="number"
                                            value={nairaSellingPrice}
                                            onChange={updateSellingLocalAmounts}
                                            className="coin-options__value input-container"
                                            placeholder="0.0"
                                        />
                                    </span>
                                </p>
                            </>
                        )}
                        <select
                            name="coin-options"
                            onChange={(e) => setModeOfPayment(e.target.value)}
                            className="coin-options-paymentOptions"
                        >
                        
                            <option value="">Mode of payment</option> 
                            {regionContext?.country?.paymentMethods?.map((item, i) => (
                                <option key={i} value="bank">
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <p className="coin-options__acceptedPaymentMethods">
                            *Currently accepted payment methods: UBA, BITCOIN
                        </p>
                        <button
                            onClick={isSelling ? sellButton : buyButton}
                            disabled={!isSelling && !selectedCoin?.quantity}
                            className={`coin-options__button ${
                                !isSelling && !selectedCoin?.quantity ? "disabled" : ""
                                }`}
                        >
                            {isSelling ? "Sell" : "Buy"}
                            {isLoading ? <Spinner className="loadingSpinner" /> : null}
                        </button>
                    </div>
                    {/* <div className="coin-icon">
                        {selectCoinImage()} */}
                        {/* {console.log(selectedCoinImage)} */}
                        {/* <iframe id="tradingview_dd6f1"
                        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD"
                        style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
                        allowtransparency="true" scrolling="no" allowFullScreen="" frameBorder="0"
                        title="coinrate">
                    </iframe> */}
                    {/* </div> */}
                </div>
            </Container>
        </>
    );
}
const mapStateToProps = ({ rates }) => ({
    rates: rates,
});

const mapDispatchToProps = {
    fetchAllRates: fetchAllRatesActionCreator,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleCoinRates);
