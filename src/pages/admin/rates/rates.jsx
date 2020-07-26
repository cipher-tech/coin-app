import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
// import CoinWidget from "../../../components/widget/wigjet"
// import lock from "../../../images/svgIcons/lock.svg"
import qrcode from "../../../images/qrcode.png"
import Axios from 'axios'
import bitcoinIcon from "../../../images/btcIcon.jpg"
import ethIcon from "../../../images/etheteumIcon.jpg"
import poeIcon from "../../../images/poeIcon.jpg"
import lunoIcon from "../../../images/lunoIcon.jpg"
import xCoinIcon from "../../../images/xCoinIcon.jpg"
import routes from '../../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'
// import PaginatedTable from '../../../components/table/tablePagination'
import { StyledButton, Modal, PopUpMessage } from '../../../components'
import { StyledInput } from '../../../components/styledComponents'
import { FormValidator } from '../../../formValidator'
import { ValidationMessage } from '../../../validationMessage'
// import CoinWidget from '../../../components/widget/wigjet'

const Container = styled.div`
    grid-column: ${props => props.gridPos || "2/-1"};
    display: grid;
    min-height: 100%;
    min-width: 100%;
    place-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;

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
        &_chat{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
			grid-template-rows: repeat(2, minmax(30rem, 1fr));
			gap: 2rem;
			align-self: flex-start;
			width: 100%;
			height: 35rem;
		}
		&-card{
			grid-column: 1/-1;
			color: ${props => props.theme.colorDark};
			width: 96%;
			display: grid;
			justify-items: space-around;
			background: transparent;
			grid-template-columns: repeat(5, 1fr);
			gap: 0 .5rem;
			&__button{
				align-self: center;
				border-radius: 1rem;
				padding: 1.5rem 1.5rem;
			}
			.header{
				text-align: center;
				color: ${props => props.theme.colorPrimary};
				font-size: ${props => props.theme.font.medium};
			}
			&-group{
				grid-column: 1/-1;
				border: none 1px;
				padding: 1rem;
				width: 100%;
				margin: 1rem 0;
				border-color: ${props => props.theme.colorPrimary};
				legend{
					font-size: ${props => props.theme.font.large};
					color: ${props => props.theme.colorPrimary};
					text-transform: capitalize;
				}
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
				}
	  		}
		}	
        img, #icon{
            height: 3rem;
            width: 3rem;        }

    }
`
function MasterAdminRates({ gridPos, fetchAllRates, rates, coinOnlyRates, cardOnlyRates = [] }) {
	const [isSelling, setIsSelling] = useState(true)
	const [amount, setAmount] = useState("")
	const [account_no, setAccount_no] = useState('')
	const [card_id, setCard_id] = useState('')
	const [isModalActive, setIsModalActive] = useState(false)
	const [giftCardImage, setGiftCardImage] = useState(null)
	const [refrenceId, setRefrenceId] = useState(!false)
	const [showpopUpMessage, setShowPopUpMessage] = useState(false)
	const [popUpMessage, setPopUpMessage] = useState(null)
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	// const [giftCardInfo, setGiftCardInfo] = useState([])


	const auth_token = JSON.parse(localStorage.getItem("userInfo"))?.user?.auth_token
	const user_id = JSON.parse(localStorage.getItem("userInfo"))?.user?.id


	const rules = {
		amount: { required: true, minlength: 2, },
		account_no: { minlength: 2, },
		card_id: { minlength: 2, },

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
			.then(res => {
				// setGiftCardInfo(res.filter(item => item.type === "card"))
				// console.log(cardOnlyRates);
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
				// {
				//   Header: 'Current_rate',
				//   accessor: 'current_rate',
				//   collapse: true,
				// },
				{
					Header: 'Name',
					accessor: 'name',
					collapse: true,
				},
				{
					Header: 'Type',
					accessor: 'type',
				},
				{
					Header: 'Buying',
					accessor: 'buying',
					collapse: true,
				},
				{
					Header: 'Selling',
					accessor: 'selling',
					collapse: true,
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
				card_id: data.account_no,
				cardImage: giftCardImage
			}
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
						Sell {props.original.name}
					</h3>
					<FormValidator buttonClass="rate-summit"
						classname=" rate-container "
						data={state} rules={rules}
						buttonText={isLoading ? "Loading..." : "Submit"}
						submit={(data) => buySell(data, "sell", props.original.type, props.original.name)}>
						<div className="rate-container-form">
							<StyledInput name="amount" updatedValue={setAmount} value={state.amount}
								placeHolder="Enter Amount" type="number" icon={""} />
							<ValidationMessage field="amount" />

							{
								props.original.type === "card" ?
									<>
										<StyledInput name="card_id" updatedValue={setCard_id} value={state.card_id}
											placeHolder="Enter card id" type="text" />
										<ValidationMessage field="card_id" />
										<p>Uplaod gift card image</p>
										<input type="file"
											alt="verify logo"
											onChange={e => handleImageChange(e)}
											name="giftCardImage" placeholder="Enter Value" className="form__input-item" />
										<img src={giftCardImage} height="40rem" width="40rem" alt="preview" />
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
						{isSelling ? "d763hei899o889hvy889yvreiohvo99e9jv8r98re8viu89h" : "UBA" + <br /> + " 0236736793"}
					</p>

					<p className="modal__container--text">
						After successful payment contact customer care with this unique refrence id: <br />

						<span className="modal__container-address">
							{refrenceId}
						</span>
					</p>
				</div>
			</Modal>
			<div className="rate">
				<h2 className="rate-attrHeader">Gift Cards</h2>
				<div className="rate-card">

					{
						cardOnlyRates.map((item, index) => (
							<fieldset className="rate-card-group" key={index}>
								<legend>{item.name}</legend>
								<p className="rate-card-attributes header">
									<span className="rate-card-attributes__item">Country</span>
									<span className="rate-card-attributes__item">Class</span>
									<span className="rate-card-attributes__item">Range</span>
									<span className="rate-card-attributes__item">Rate</span>
									<span className="rate-card-attributes__item">Qty</span>
								</p>
								{
									item.attributes.map((attribute, i) => (
										<p key={i} className="rate-card-attributes">
											<span className="rate-card-attributes__item">
												{attribute.country}
											</span>
											<span className="rate-card-attributes__item">
												{attribute.class}
											</span>
											<span className="rate-card-attributes__item">
												{attribute.from} - {attribute.to}
											</span>
											<span className="rate-card-attributes__item">
												{attribute.rate}
											</span>
											<span className="rate-card-attributes__item">
												{item.quantity}
											</span>
										</p>
									))
								}

							</fieldset>


						))}
				</div>

				<h2 className="rate-attrHeader">Coins</h2>

				<div className="rate-card">

					{
						coinOnlyRates?.map((item, index) => (
							<fieldset className="rate-card-group" key={index}>
								<legend>{item.name}</legend>
								<p className="rate-card-attributes header">
									<span className="rate-card-attributes__item">Name</span>
									{/* <span className="rate-card-attributes__item">Buying</span> */}
									<span className="rate-card-attributes__item">Class</span>
									<span className="rate-card-attributes__item">Worth</span>
									<span className="rate-card-attributes__item">Rate</span>
								</p>
								<p className="rate-card-attributes">
									<span className="rate-card-attributes__item">
										{item.name}
									</span>
									<span className="rate-card-attributes__item">
										{item.class}
									</span>
									<span className="rate-card-attributes__item">
										{item.from} - {item.to} {console.log(item.from , item.to)}
									</span>
									<span className="rate-card-attributes__item">
										{item.buying}
									</span>
								</p>
								{/* {
									item.attributes.map((attribute, i) => (
										
									))
								} */}
							</fieldset>


						))}
				</div>
				{/* <PaginatedTable tableColumns={columns} expandedComponent={expandedComponent} data={rates.allRates ? rates.allRates : []} /> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(MasterAdminRates)
