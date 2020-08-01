import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Axios from 'axios'

import qrcode from "../../images/qrcode.png"
import bitcoinIcon from "../../images/btcIcon.jpg"
import ethIcon from "../../images/etheteumIcon.jpg"
import poeIcon from "../../images/poeIcon.jpg"
import lunoIcon from "../../images/lunoIcon.jpg"
import xCoinIcon from "../../images/xCoinIcon.jpg"
import routes from '../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../reduxStore'
import PaginatedTable from '../table/tablePagination'
import { StyledButton, Modal, PopUpMessage } from '../index'
import { StyledInput } from '../styledComponents'
import { FormValidator } from '../../formValidator'
import { ValidationMessage } from '../../validationMessage'

const Container = styled.div`
    grid-column: 1/-1;  /* ${props => props.gridPos || "2/-1"}; */
    display: grid;
    min-height: 100%;
    min-width: 100%;
    place-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    align-self: center;

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
    .rate{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
        width: 100%;
        /* padding: 3rem; */
        align-items: flex-start;
        place-items: center;
        /* height: 78vh; */
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           padding: 3rem 0;
        }
		&-attrHeader{
				text-align: center;
				grid-column: 1/-1;
				padding: 1.5rem;
				display: flex;
				justify-content: center;
				/* width: 100%; */
				color: ${props => props.theme.colorPrimary};
				/* font-size: ${props => props.theme.font.arge}; */
		}
        &-container{
            &-form{
                .form__input-item{
                    &:focus{
                        outline: none;
                    }
                }
                &__selectContainer{
                    display: flex;
                    align-self: center;
                    justify-content: space-evenly;
                    padding: 1.5rem;
                    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                        display: flex;
                        flex-direction: column;
                    }
                    select{
                        background: transparent;
                        padding: .5rem 1rem;
                        color: ${props => props.theme.colorDark};
                        border-radius: .5rem;
                        margin: 1rem .5rem;
                        /* margin-bottom: 1rem; */
                        option{
                            color: ${props => props.theme.colorPrimary}
                        }
                        &:focus{
                            outline: none;
                        }
                    }
                }
            }
        }
        &_chat{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
			grid-template-rows: repeat(2, minmax(30rem, 1fr));
			gap: 2rem;
			align-self: flex-start;
			width: 100%;
			height: 35rem;
		}
        img, #icon{
            height: 3rem;
            width: 3rem;        }

    }
`

function BuySellComponent({ gridPos, fetchAllRates, rates, coinOnlyRates, cardOnlyRates = [] }) {
    const isVerified = !JSON.parse(localStorage.getItem("userInfo")) ? "" : JSON.parse(localStorage.getItem("userInfo")).user.status || ""
    const [isSelling, setIsSelling] = useState(true)
    const [amount, setAmount] = useState("")
    const [account_no, setAccount_no] = useState('')
    const [card_id, setCard_id] = useState('')
    const [isModalActive, setIsModalActive] = useState(false)
    const [giftCardImage, setGiftCardImage] = useState(null)
    const [refrenceId, setRefrenceId] = useState("")
    const [bitcoinAddress] = useState("d763hei899o889hvy889yvreiohvo99e9jv8r98re8viu89h")
    const [showpopUpMessage, setShowPopUpMessage] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [SelectedCardCountry, setSelectedCardCountry] = useState('')
    const [SelectedCardClass, setSelectedCardClass] = useState('')
    const [SelectedCardRange, setSelectedCardRange] = useState('')
    const [userEmail, setUserEmail] = useState('')
    // const [giftCardInfo, setGiftCardInfo] = useState([])
    const auth_token = JSON.parse(localStorage.getItem("userInfo"))?.user?.auth_token
    const user_id = JSON.parse(localStorage.getItem("userInfo"))?.user?.id
    const [, setIsCopied] = useState('')
    // const copyRef = useRef(null)

    async function copy(e) {
        navigator.clipboard.writeText(bitcoinAddress)
        setIsCopied(true)
    }
    const rules = {
        amount: { required: true, minlength: 2, },
        account_no: { minlength: 2, },
        card_id: { minlength: 2, },
    }
    const CardRules = {
        amount: { required: true, minlength: 2, },
        card_id: { minlength: 2, },
        userEmail: { required: true, email: true },
        class: { required: true },
        country: { required: true },
        range: { required: true },
    }
    const CardState = {
        amount: amount,
        account_no: account_no,
        card_id: card_id,
        userEmail: userEmail,
        range: SelectedCardRange,
        class: SelectedCardClass,
        country: SelectedCardCountry
    }
    const state = {
        amount: amount,
        account_no: account_no,
        card_id: card_id,
    }
    useEffect(() => {
        const auth_token = !JSON.parse(localStorage.getItem("userInfo")) ? "" : JSON.parse(localStorage.getItem("userInfo")).user.auth_token || ""
        // console.log('data :>> ', data);
        Axios.get(`${routes.api.getRates}?token=${auth_token}`)
            .then(res => {
                // console.log(res.data.data);
                fetchAllRates(res.data.data)
                return res.data.data
            })
        // eslint-disable-next-line
    }, [fetchAllRates])

    const coinIcons = {
        bitcoin: bitcoinIcon,

        etherum: ethIcon,

        // bitcoin: bitcoinIcon,

        'gift Card': poeIcon,

        nike: xCoinIcon,

        xpss: lunoIcon,

        cycoin: poeIcon,

    }
    const columns = [
        {
            Header: ' ',
            // accessor: 'name',
            accessor: (rowInfo) => (
                <img id="icon" src={coinIcons[rowInfo?.name] || bitcoinIcon} alt="cycoin" />
            ),
            collapse: true,
        },
        {
            Header: 'Coin Rates',
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                    collapse: true,
                },
                // {
                //     Header: 'Type',
                //     accessor: 'type',
                // },
                // {
                //     Header: 'Rate',
                //     accessor: 'buying',
                //     collapse: true,
                // },
                {
                    Header: !isVerified ? '' : 'Selling',
                    accessor: !isVerified ? 'sss' : 'selling'
                },
                {
                    // Make an expander cell
                    Header: () => null, // No header
                    id: 'expander', // It needs an ID

                    Cell: ({ row }) => (
                        // Use Cell to render an expander for each row.
                        // We can use the getToggleRowExpandedProps prop-getter
                        // to build the expander.
                        <div onClick={() => console.log("opennnn")} {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ?
                                <div className="options_btn">
                                    <StyledButton small>
                                        Cancel
									</StyledButton>
                                </div>
                                :
                                <div className="options_btn">
                                    <StyledButton small onClick={(e) => sellHandler("selling")}>
                                        sell
									</StyledButton>
                                </div>
                            }

                            {/* <StyledButton small onClick={(e) => buyHandler()}>
									Buy
			  					</StyledButton> */}

                        </div>
                    ),
                },
                {
                    // Make an expander cell
                    Header: () => null, // No header
                    id: 'buy', // It needs an ID

                    Cell: ({ row }) => (
                        // Use Cell to render an expander for each row.
                        // We can use the getToggleRowExpandedProps prop-getter
                        // to build the expander.
                        <div onClick={() => console.log("opennnn")} {...row.getToggleRowExpandedProps()}>
                            {console.log()}
                            {
                                !isVerified ? null
                                    :
                                    row.original.type === "card" ? null
                                        :
                                        row.isExpanded ?
                                            <div className="options_btn">
                                                <StyledButton small>
                                                    Cancel
											</StyledButton>
                                            </div>
                                            :
                                            <div className="options_btn">
                                                <StyledButton small onClick={(e) => buyHandler("buying")}>
                                                    Buy
											</StyledButton>
                                            </div>

                            }

                        </div>
                    ),
                },

            ],
        },

    ]
    const buySell = (data, action, type, name) => {
        setIsLoading(false);
        setError(false)
        setShowPopUpMessage(false)

        if (action === "sell" && type === "coin") {
            setIsSelling(true)
            const user_data = {
                user_id: user_id,
                amount: data.amount,
                action: "sell",
                type: name,
            }
            console.log(user_data);
            Axios.post(`${routes.api.userSellCoin}?token=${auth_token}`, user_data)
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
                    setPopUpMessage("An error occured. Try again or contact admin")
                    setError(true)
                    setShowPopUpMessage(true)
                    setIsLoading(!true)

                    // setMessage("An error occured while uploading image. Try again or contact admin")
                })
        } else if (action === "buy") {
            setIsSelling(false)
            const user_data = {
                user_id: user_id,
                amount: data.amount,
                action: "buy",
                type: name,
                address: data.account_no,
            }
            console.log(user_data);
            Axios.post(`${routes.api.userBuyCoin}?token=${auth_token}`, user_data)
                .then(res => {
                    // console.log(res);
                    if (res.data.status === "success") {
                        setRefrenceId(res.data.data)
                        setPopUpMessage("Order placed successfully")
                        setShowPopUpMessage(true)
                        setIsLoading(false)
                        setIsModalActive(true)
                    }

                })
                .catch(res => {
                    setPopUpMessage("An error occured. Try again or contact admin")
                    setError(true)
                    setShowPopUpMessage(true)
                    setIsLoading(!true)
                })
        } else {
            if (!giftCardImage) {
                setPopUpMessage("must include card image")
                setError(true)
                setShowPopUpMessage(true)
                setIsLoading(!true)
                return
            }
            const user_data = {
                user_id: user_id,
                amount: data.amount,
                action: "sell",
                type: name,
                card_id: data.card_id,
                cardImage: giftCardImage,
                class: SelectedCardClass,
                country: SelectedCardCountry,
                range: SelectedCardRange,
                email: userEmail
            }
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
                    setPopUpMessage("An error occured. Try again or contact custormer care")
                    setError(true)
                    setShowPopUpMessage(true)
                    setIsLoading(!true)

                    // setMessage("An error occured while uploading image. Try again or contact admin")
                })

        }
        // type === "buy" || setIsModalActive(true)
    }
    let handleImageChange = (e) => {
        e.preventDefault()
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        if ((e.target.files[0].size / 1024 / 1024) > 1) {
            // console.log("");
            setPopUpMessage("file too large")
            setError(true)
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
    const expandedComponent = (props) => {
        let content;

        if (isSelling) {
            content = (
                <div className="expandedDiv" onBlur={() => { /*console.log(props); props.toggleRowExpanded(props.id, !true) */return null }}>
                    <h3 className="expandedDiv-header">
                        Sell {props.original.name} {props.original.type}

                    </h3>
                    <FormValidator buttonClass="rate-summit"
                        classname=" rate-container "
                        data={CardState} rules={CardRules}
                        buttonText={isLoading ? "Loading..." : "Submit"}
                        submit={(data) => buySell(data, "sell", props.original.type, props.original.name)}>
                        <div className="rate-container-form">

                            <StyledInput name="card_id" updatedValue={setCard_id} value={CardState.card_id}
                                placeHolder="Enter card id" type="text" />
                            <ValidationMessage field="card_id" />

                            <div className="rate-container-form__selectContainer">
                                <select className="select" name="country" value={SelectedCardCountry} onChange={(e) => {
                                    setSelectedCardCountry(e.target.value)
                                    // updateOptions(e.target.name, e.target.value)
                                }}>
                                    <>
                                        <option value={''}> Select Card Country </option>
                                        {props?.original?.attributes?.map((item, index) => (
                                            <option key={index} value={item.country.toLowerCase()} className="rate-container-form__select--option">
                                                {item.country}
                                            </option>
                                        ))}
                                    </>
                                </select>
                                <ValidationMessage field="country" />

                                <select className="select" name="class" value={SelectedCardClass} onChange={(e) => {
                                    setSelectedCardClass(e.target.value)
                                    // updateOptions(e.target.name, e.target.value)
                                }}>
                                    <>
                                        <option value={''}> Select Card Class </option>
                                        {props?.original?.attributes?.map((item, index) => (
                                            <option key={index} value={item.class.toLowerCase()} className="rate-container-form__select--option">
                                                {item.class}
                                            </option>
                                        ))}
                                    </>
                                </select>
                                <ValidationMessage field="class" />

                                <select className="select" name="range" value={SelectedCardRange} onChange={(e) => {
                                    setSelectedCardRange(e.target.value)
                                    // updateOptions(e.target.name, e.target.value)
                                }}>
                                    <>
                                        <option value={''}> Select Card Range </option>
                                        {/* {props.original.attributes.map((item, index) => ( */}
                                        {/* <option key={index} value={item.from + "-" + item.to } className="rate-container-form__select--option">
                                                {item.from} - {item.to}
                                            </option> */}
                                        {/* ))} */}
                                        <option value="1-100" className="rate-container-form__select--option">
                                            1 - 100
                                            </option>
                                        <option value="1-100" className="rate-container-form__select--option">
                                            101 - 200
                                            </option>
                                        <option value="1-100" className="rate-container-form__select--option">
                                            201 and above
                                            </option>
                                    </>
                                </select>
                                <ValidationMessage field="range" />
                            </div>
                            {
                                props.original.type === "card" ?
                                    <>
                                        <p>Uplaod gift card image</p>
                                        <input type="file"
                                            alt="verify logo"
                                            onChange={e => handleImageChange(e)}
                                            name="giftCardImage" style={{ padding: "1rem" }} placeholder="Enter Value" className="form__input-item" />
                                        <img src={giftCardImage} height="40rem" width="40rem" alt="preview" />

                                        <div className="rate-container-form__selectContainer">
                                            <StyledInput name="userEmail" updatedValue={setUserEmail} value={CardState.userEmail}
                                                placeHolder="Enter e-mail" type="email" icon={""} />
                                            <ValidationMessage field="userEmail" />

                                            <StyledInput name="amount" updatedValue={setAmount} value={CardState.amount}
                                                placeHolder="Enter card value" type="number" icon={""} />
                                            <ValidationMessage field="amount" />
                                        </div>

                                        <p className="rate-container-form__selectContainer">
                                            <span>
                                                you get: ₦
                                                {amount * props?.original?.attributes?.find(
                                                item => item.country === SelectedCardCountry && item.class === SelectedCardClass)?.rate || 0}
                                            </span>
                                            <span>
                                                rate: ₦{props?.original?.attributes?.find(item => item.country === SelectedCardCountry)?.rate || 0}
                                            </span>
                                        </p>

                                    </>
                                    :
                                    null
                            }
                        </div>
                        <p className="rate-isSugnedIn">

                        </p>
                    </FormValidator>
                </div>
            )
        } else {
            content = (
                // onBlur={() => { console.log(props); props.toggleRowExpanded(props.id, !true) }}
                <div className="expandedDiv" >
                    <h3 className="expandedDiv-header">
                        Buy {props.original.name}
                    </h3>
                    <FormValidator buttonClass="rate-summit"
                        classname=" rate-container "
                        data={state} rules={rules}
                        submit={(data) => buySell(data, "buy", props.original.type, props.original.name)}>
                        <div className="rate-container-form">
                            <StyledInput name="amount" updatedValue={setAmount} value={state.amount}
                                placeHolder="Enter Amount" type="number" />
                            <ValidationMessage field="amount" />

                            <StyledInput name="account_no" updatedValue={setAccount_no}
                                value={state.account_no}
                                placeHolder="Enter coin address" type="text" />
                            <ValidationMessage field="account_no" />

                        </div>
                        <p className="rate-isSugnedIn">

                        </p>
                    </FormValidator>
                </div>
            )
        }
        return content;
    }

    const buyHandler = () => {
        setIsSelling(false)
    }
    const sellHandler = () => {
        setIsSelling(true)
    }
    return (
        <Container gridPos={gridPos}>

            {showpopUpMessage ? <PopUpMessage error={error}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null}

            <Modal isActive={isModalActive}>
                <div className="modal__container">
                    <span role="img" aria-label="img" className="close" onClick={() => setIsModalActive(false)}>
                        ❌
                    </span>
                    <img src={qrcode} alt="" />

                    <p className="modal__container--text">
                        please pay the specified amount into this {isSelling ? "address" : "account"}
                    </p>

                    <p className="modal__container-address">
                        {isSelling ? bitcoinAddress : "UBA \n 0236736793"}
                        <button onClick={() =>copy()}> copy</button>
                    </p>

                    <p className="modal__container--text">
                        After successful payment contact customer care with this unique refrence id: <br />

                        <span className="modal__container-address">
                            {refrenceId}
                        </span>
                        {/* <button onClick={() =>copy()}> copy</button> */}

                    </p>
                </div>
            </Modal>
            <div className="rate">
                <h2 className="rate-attrHeader">Gift Cards </h2>
                <PaginatedTable tableColumns={columns} expandedComponent={expandedComponent} data={rates.allRates ? cardOnlyRates : []} />
            </div>
        </Container>
    )
}
const mapStateToProps = ({ rates }) => ({
    rates: rates,
    coinOnlyRates: rates?.allRates?.filter(item => item.type === "coin"),
    cardOnlyRates: rates?.allRates?.filter(item => item.type === "card")
})

const mapDispatchToProps = {
    fetchAllRates: fetchAllRatesActionCreator
}
export default connect(mapStateToProps, mapDispatchToProps)(BuySellComponent)
