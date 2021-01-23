import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import fx from "money";
// import CoinWidget from "../../../components/widget/wigjet"
import Axios from "axios";
import amazonCard from "../../images/optimazedImage/amazon-card.png";


import ETH_thumbnail from "../../images/ETH_thumbnail.png";
import amazonIcon from "../../images/svgIcons/amazon-icon.svg";
import iTunsIcon from "../../images/svgIcons/apple-itunes.svg";
import playStoreIcon from "../../images/svgIcons/google-play-store.svg";
import steam from "../../images/svgIcons/steam.svg";
// import { ReactComponent as BCHIcon } from "../../images/svgIcons/bitcoinSvg.svg";
// import { ReactComponent as ETHIcon } from "../../images/svgIcons/ethereumSvg.svg";
// import { ReactComponent as LTCIcon } from "../../images/svgIcons/blockchainSvg.svg";
// import { ReactComponent as XBTIcon } from "../../images/svgIcons/blockchainSvg.svg";
// import { ReactComponent as Spinner } from "../../images/svgIcons/spinner.svg";

import routes, { defaultcurrencies } from "../../navigation/routes";
import { fetchAllRatesActionCreator } from "../../reduxStore";
import { connect } from "react-redux";
import { ValidationMessage } from "../../validationMessage";
import { ContextData } from "../../context/contextData";
import { Modal, PopUpMessage, Storage } from "../index";
import { FormValidator } from "../../formValidator";
// import { StyledInput } from "../styledComponents";
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
    margin-top: 1rem;
    place-items: flex-start;
    background: ${(props) => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
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

        .capitalize{
            text-transform: capitalize;
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
            max-width: 90rem;
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
            
            &--inputContainer{
                padding: .5rem .5rem;
            }

            &__card{
                &--container{
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                }
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
                    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
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
                            
                            &-more{
                                padding: 0 .5rem;
                                grid-column: 1/-1;
                                
                            }
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
                width: 100%;
                text-align: center;
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
                font-size: ${(props) => props.theme.font.medium};
                padding: 2rem 1rem;
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
                width: 100%;
                &::before{
                    content: "$";
                    position: absolute;
                    top: 1.6rem;
                    left: 2.5rem;
                    color: ${(props) => props.theme.colorDark};
                }
            }

            
            &__button{
                display: flex;
                padding: 1rem 6rem;
                border-radius: 2rem;
                color: ${(props) => props.theme.colorWhite};
                background: ${(props) => props.theme.colorPrimary};
                border: none;
                font-size: ${(props) => props.theme.font.large};
                justify-self: center;
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
function SellGiftCardComponent({ gridPos, fetchAllRates, rates, hidden, }) {
    // console.log(Storage.get("userInfo"));
    // const isVerified = !Storage.get("userInfo")
    //     ? ""
    //     : Storage.get("userInfo")?.user?.status || "";


    // const current = 4099999

    const icons = [
        amazonIcon,
        steam,
        playStoreIcon,
        iTunsIcon,
        ETH_thumbnail,
    ];

    const [selectedCard, setSelectedCard] = useState([]);
    const [selectedCardClass, setSelectedCardClass] = useState('');
    // const [selectedCardImage, setSelectedCardImage] = useState(icons[0])
    // const [cardAmount, setCardAmount] = useState('');
    const [giftCardAmount, setGiftCardAmount] = useState('');
    const [input, /* setInput */] = useState("");
    const [userEmail, setUserEmail] = useState("");
    // const [rate, setRate] = useState(0);
    // const [dollarSellingPrice, setDollarSellingPrice] = useState("");
    // const [modeOfPayment, setModeOfPayment] = useState("");
    const [bitcoinAddress] = useState(process.env.REACT_APP_WALLET_ADDRESS)
    const [isSelling, setIsSelling] = useState(true);
    const [isModalActive, setIsModalActive] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState(null);
    const [showpopUpMessage, setShowPopUpMessage] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [refrenceId, setRefrenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [, setIsCopied] = useState('')
    const [account_no, /* setAccount_no */] = useState('')
    // const [card_id, setCard_id] = useState('')
    const [SelectedCardCountry, setSelectedCardCountry] = useState('')
    const [filteredCardCountry, setFilteredCardCountry] = useState({})
    const [filteredCardClass, setFilteredCardClass] = useState({})
    // const [SelectedCardRange, setSelectedCardRange] = useState('')
    const [giftCardImage, setGiftCardImage] = useState(null)
    const [cards, setCards] = useState(rates?.allRates?.filter(item => item.type === "card").slice(0, 4))
    const [showMoreCards, setShowMoreCards] = useState(false)

    // const coins = showMoreCards
    // console.log("coins >>>", coins);


    const regionContext = useContext(ContextData);
    // fx.rates = defaultcurrencies.rates
    // updateRate(1000)
    const CardRules = {
        amount: { required: true, minlength: 2, },
        card_id: { minlength: 2, },
        userEmail: { required: true, email: true },
        class: { required: true },
        country: { required: true },
        range: { required: true },
    }
    const CardState = {
        amount: giftCardAmount,
        account_no: account_no,
        // card_id: card_id,
        userEmail: userEmail,
        // range: SelectedCardRange,
        class: selectedCardClass,
        country: SelectedCardCountry
    }
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
                        const allCards = res.data.data.filter(item => item.type === "card")
                        fetchAllRates(allCards);
                        updateSelectedCard(allCards[0], allCards);
                        return;
                    })
            );

        // eslint-disable-next-line
    }, [fetchAllRates]);

    const updateSelectedCard = (coin, allCoins) => {
        /* get all coins of the same name */
        /* get the different classes(range) of a coin/card */
        // console.log(selectedCardClass);

        /* convert rate to local currency */
        if (!coin.converted) {
            coin.attributes.map(attribute => attribute.rate = fx
                .convert(attribute.rate, {
                    from: "NGN",
                    to: regionContext.country.code || "NGN",
                })
                .toFixed(1)
            )
        }
        //to notify that coin buying and selling prop has been converted to the accurate region
        coin.converted = true

        /* filter the card attributes */
        function filterAttributes(a, prop) {
            var trimmedAttribute = {}
            a.filter((attribute) => (
                trimmedAttribute.hasOwnProperty(attribute[prop]) ? false : (trimmedAttribute[attribute[prop]] = true)
            ));
            return trimmedAttribute;
        }
        setFilteredCardCountry(filterAttributes(coin.attributes, "country"))
        setFilteredCardClass(filterAttributes(coin.attributes, "class"))

        setSelectedCard(coin);
    };

    const sellButton = async (data) => {

        if (!giftCardImage) {
            await setPopUpMessage("must include card image")
            await setHasError(true)
            await setShowPopUpMessage(true)
            await setIsLoading(false)
            return
        }
        const user_data = {
            user_id: user_id,
            amount: data.amount,
            action: "sell",
            type: selectedCard.name,
            // card_id: data.card_id,
            cardImage: giftCardImage,
            class: selectedCardClass,
            country: SelectedCardCountry,
            // range: SelectedCardRange,
            email: userEmail
        }
        await setIsLoading(true)
        await setHasError(false)
        console.log(user_data);

        Axios.post(`${routes.api.userSellCard}?token=${auth_token}`, user_data)
            .then(res => {
                // console.log(res);
                if (res.data.status === "success") {
                    setRefrenceId(res.data.data)
                    // setMessage("Uploaded Successfully, Account will be reviewed and verified within three days")
                    setPopUpMessage("Order placed successfully")
                    setShowPopUpMessage(true)
                    setIsLoading(false)
                    setIsModalActive(true)
                }

            })
            .catch(res => {
                setPopUpMessage("An error occurred. Try again or contact customer care")
                setHasError(true)
                setShowPopUpMessage(true)
                setIsLoading(!true)

                // setMessage("An error occurred while uploading image. Try again or contact admin")
            })
    };

    let handleImageChange = (e) => {
        e.preventDefault()
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        if ((e.target.files[0].size / 1024 / 1024) > 1) {
            // console.log("");
            setPopUpMessage("file too large")
            setHasError(true)
            setShowPopUpMessage(true)
            return
        } else {
            createImage(files[0], e.target.name);

        }
    }
    let createImage = (file, name) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            setGiftCardImage(e.target.result)
        };
        reader.readAsDataURL(file);
    }

    let toggleShowMoreCards = async () => {
        await setShowMoreCards(!showMoreCards)
        showMoreCards && await setCards(rates?.allRates.slice(0, 4))
        showMoreCards || await setCards(rates?.allRates)
    }
    return (
        <>

            {showpopUpMessage ? (
                <PopUpMessage error={hasError}>
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
                        <img src={amazonCard} alt="" />

                        <p className="modal__container--text">
                            {/* please pay exactly  ${giftCardAmount} into this {isSelling ? "bitcoin address" : "account"} */}
                            Transaction 
                        </p>

                        <p className="modal__container-address">
                            {/* {bitcoinAddress}
                            <button onClick={() => copy()}> copy</button> */}
                            Successful
                        </p>

                        <p className="modal__container--text">
                            Contact customer care with the unique
                            refrence_id below via the  live chat icon on the lower right hand corner of for the screen 
                            for confirmation and payment.<br />
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
                                {cards?.map((coin, index) => (
                                    <div
                                        key={index}
                                        className={`coin-options__types--container--item ${selectedCard.name === coin.name ? " active" : ""
                                            }`}
                                        onClick={() => updateSelectedCard(coin)}
                                    >
                                        <img src={icons[index] || icons[4]} alt="bitcoin" />
                                        <p className="coin-options__types--container--item--text">
                                            {coin.name}
                                        </p>
                                    </div>
                                ))}
                                <div
                                    className={`coin-options__types--container--item`}
                                    onClick={() => toggleShowMoreCards()}>
                                    <p className="coin-options__types--container--item--text-more">
                                        {showMoreCards ? `<` : ">"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="coin-options__buy-sell">
                            <span
                                className={`coin-options__buy-sell--item ${isSelling ? " tab" : null
                                    }`}
                                onClick={() => setIsSelling(true)}>
                                sell
                            </span>
                        </p>

                        <br />

                        <h3 className="coin-options__header">
                            Please fill the details below to proceed.
                        </h3>

                        <FormValidator buttonClass="coin-options__button"
                            classname=" "
                            data={CardState} rules={CardRules}
                            buttonText={isLoading ? "Loading..." : "Submit"}
                            submit={(data) => sellButton(data, "sell", selectedCard?.type, selectedCard?.name)}>
                            <div className="coin-options__card--container">

                                {/* <div className="coin-options--inputContainer">
                                    <span className="coin-options__amounts" symbol={''}>
                                        <input
                                            type="text"
                                            name="card_id"
                                            value={CardState.card_id}
                                            onChange={(e) => setCard_id(e.target.value)}
                                            className="coin-options__value input-container"
                                            placeholder="Enter card id"
                                        />
                                    </span>
                                    <ValidationMessage field="card_id" />
                                </div> */}

                                <div className="coin-options--inputContainer">
                                    <span className="coin-options__amounts" symbol={''}>
                                        <select name="country" value={SelectedCardCountry}
                                            onChange={(e) => setSelectedCardCountry(e.target.value)}
                                            className="coin-options__value input-container">
                                            <>
                                                <option value={''}> Select Card Country </option>
                                                {Object.keys(filteredCardCountry).map((item, index) => (
                                                    <option key={index} value={item} className="capitalize">
                                                        {item}
                                                    </option>
                                                ))}
                                            </>

                                        </select>
                                    </span>
                                    <ValidationMessage field="country" />
                                </div>

                                <div className="coin-options--inputContainer">
                                    <span className="coin-options__amounts" symbol={''}>
                                        <select name="class" value={selectedCardClass}
                                            onChange={(e) => setSelectedCardClass(e.target.value)}
                                            className="coin-options__value input-container">
                                            <>
                                                <option value={''}> Select Card Class </option>
                                                {Object.keys(filteredCardClass).map((item, index) => (
                                                    <option key={index} value={item} className="capitalize">
                                                        {item}
                                                    </option>
                                                ))}
                                            </>
                                        </select>
                                    </span>
                                    <ValidationMessage field="class" />
                                </div>

                                {/* <div className="coin-options--inputContainer">
                                    <span className="coin-options__amounts" symbol={''}>
                                        <select name="range" value={SelectedCardRange}
                                            onChange={(e) => setSelectedCardRange(e.target.value)}
                                            className="coin-options__value input-container">
                                            <>
                                                <option value={''}> Select Card Range </option>
                                                <option value="1-100" className="capitalize">
                                                    1 - 100
                                            </option>
                                                <option value="1-100" className="capitalize">
                                                    101 - 200
                                            </option>
                                                <option value="1-100" className="capitalize">
                                                    201 and above
                                            </option>
                                            </>
                                        </select>
                                    </span>
                                    <ValidationMessage field="range" />
                                </div> */}

                                <h3 className="coin-options__header">
                                    Upload Card image.
                                </h3>
                                <input type="file"
                                    alt="verify logo"
                                    onChange={e => handleImageChange(e)}
                                    name="giftCardImage" style={{ padding: "1rem" }} placeholder="Enter Value" className="form__input-item" />
                                <img src={giftCardImage} height="40rem" width="40rem" alt="preview" />

                                <div className="rate-container-form__selectContainer">
                                    <div className="coin-options--inputContainer">
                                        <span className="coin-options__amounts" symbol={''}>
                                            <input
                                                type="email"
                                                name="userEmail"
                                                value={CardState.userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                className="coin-options__value input-container"
                                                placeholder="Enter e-mail"
                                            />
                                        </span>
                                        <ValidationMessage field="userEmail" />
                                    </div>

                                    <div className="coin-options--inputContainer">
                                        <span className="coin-options__amounts" symbol={''}>
                                            <input
                                                type="number"
                                                name="amount"
                                                value={CardState.amount}
                                                onChange={(e) => setGiftCardAmount(e.target.value)}
                                                className="coin-options__value input-container"
                                                placeholder="Enter card value($)"
                                            />
                                        </span>
                                        <ValidationMessage field="amount" />
                                    </div>

                                </div>

                                <p className="coin-options__prices">
                                    <span className="">
                                        You get: {regionContext?.country?.symbol || "₦"} {giftCardAmount * selectedCard?.attributes?.find(
                                        item => item.country === SelectedCardCountry && item.class === selectedCardClass)?.rate || "(enter amount)"}
                                    </span>
                                    <span className="rate-container-form__selectContainer--span">
                                        rate: {regionContext?.country?.symbol || "₦"}
                                        {selectedCard?.attributes?.find(item => item.country === SelectedCardCountry && item.class === selectedCardClass)?.rate || 0}
                                    </span>
                                </p>

                            </div>
                        </FormValidator>
                        {/* <button
                            onClick={isSelling ? sellButton : null}
                            disabled={!isSelling && !selectedCard?.quantity}
                            className={`coin-options__button ${
                                !isSelling && !selectedCard?.quantity ? "disabled" : ""
                                }`}
                        >
                            {isSelling ? "Sell" : "Buy"}
                            {isLoading ? <Spinner className="loadingSpinner" /> : null}
                        </button> */}
                    </div>

                </div>
            </Container>
        </>
    );
}
const mapStateToProps = ({ rates }) => ({
    rates: rates,
    //rates?.allRates?.filter(item => item.type === "card")
});

const mapDispatchToProps = {
    fetchAllRates: fetchAllRatesActionCreator,
};
export default connect(mapStateToProps, mapDispatchToProps)(SellGiftCardComponent);
