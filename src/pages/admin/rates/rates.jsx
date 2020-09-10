import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
// import CoinWidget from "../../../components/widget/wigjet"
// import lock from "../../../images/svgIcons/lock.svg"
import qrcode from "../../../images/qrcode.png"
import Axios from 'axios'
// import bitcoinIcon from "../../../images/btcIcon.jpg"
// import ethIcon from "../../../images/etheteumIcon.jpg"
// import poeIcon from "../../../images/poeIcon.jpg"
// import lunoIcon from "../../../images/lunoIcon.jpg"
// import xCoinIcon from "../../../images/xCoinIcon.jpg"
import routes from '../../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'
// import PaginatedTable from '../../../components/table/tablePagination'
import { /* StyledButton */ Modal, PopUpMessage, Storage } from '../../../components'
// import { StyledInput } from '../../../components/styledComponents'
// import { FormValidator } from '../../../formValidator'
// import { ValidationMessage } from '../../../validationMessage'
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
	const [isSelling, /* setIsSelling */] = useState(true)
	// const [amount, setAmount] = useState("")
	// const [account_no, setAccount_no] = useState('')
	// const [card_id, setCard_id] = useState('')
	const [isModalActive, setIsModalActive] = useState(false)
	// const [giftCardImage, setGiftCardImage] = useState(null)

	// eslint-disable-next-line
	const [refrenceId, setRefrenceId] = useState(!false)
	const [showpopUpMessage, setShowPopUpMessage] = useState(false)

	// eslint-disable-next-line
	const [popUpMessage, setPopUpMessage] = useState(null)

	// eslint-disable-next-line
	const [error, setError] = useState(false)
	const [coinKeys, setCoinKeys] = useState([])
	// const [isLoading, setIsLoading] = useState(false)	
	// const [giftCardInfo, setGiftCardInfo] = useState([])

	// const auth_token = Storage.get("userInfo")?.user?.auth_token
	// const user_id = Storage.get("userInfo")?.user?.id
	useEffect(() => {
		const auth_token = !Storage.get("userInfo") ? "" : Storage.get("userInfo").user.auth_token || ""
		// console.log('data :>> ', data);
		Axios.get(`${routes.api.getRates}?token=${auth_token}`)
			.then(res => {
				// console.log(res.data.data);
				fetchAllRates(res.data.data)

				return res.data.data
			})
			.then(res => {
				let coinKeys = res.filter(item => item.type === "coin").map(item => ((item.name)))
				setCoinKeys([...new Set(coinKeys)])
				// setGiftCardInfo(res.filter(item => item.type === "card"))
				// console.log(cardOnlyRates);
			})

		// eslint-disable-next-line
	}, [fetchAllRates])

	// const coinIcons = {
	// 	bitcoin: bitcoinIcon,

	// 	etherum: ethIcon,

	// 	// bitcoin: bitcoinIcon,

	// 	'gift Card': poeIcon,

	// 	nike: xCoinIcon,

	// 	xpss: lunoIcon,

	// 	cycoin: poeIcon,

	// }
	// const columns = [
	// 	{
	// 		Header: ' ',
	// 		// accessor: 'name',
	// 		accessor: (rowInfo) => (
	// 			<img id="icon" src={coinIcons[rowInfo?.name] || bitcoinIcon} alt="cycoin" />
	// 		),
	// 		collapse: true,
	// 	},
	// 	{
	// 		Header: 'Coin Rates',
	// 		columns: [
	// 			// {
	// 			//   Header: 'Current_rate',
	// 			//   accessor: 'current_rate',
	// 			//   collapse: true,
	// 			// },
	// 			{
	// 				Header: 'Name',
	// 				accessor: 'name',
	// 				collapse: true,
	// 			},
	// 			{
	// 				Header: 'Type',
	// 				accessor: 'type',
	// 			},
	// 			{
	// 				Header: 'Buying',
	// 				accessor: 'buying',
	// 				collapse: true,
	// 			},
	// 			{
	// 				Header: 'Selling',
	// 				accessor: 'selling',
	// 				collapse: true,
	// 			},
	// 			{
	// 				// Make an expander cell
	// 				Header: () => null, // No header
	// 				id: 'expander', // It needs an ID

	// 				Cell: ({ row }) => (
	// 					// Use Cell to render an expander for each row.
	// 					// We can use the getToggleRowExpandedProps prop-getter
	// 					// to build the expander.
	// 					<div onClick={() => console.log("opennnn")} {...row.getToggleRowExpandedProps()}>
	// 						{row.isExpanded ?
	// 							<div className="options_btn">
	// 								<StyledButton small>
	// 									Cancel
	// 								</StyledButton>
	// 							</div>
	// 							:
	// 							<div className="options_btn">
	// 								<StyledButton small onClick={(e) => sellHandler("selling")}>
	// 									sell
	// 								</StyledButton>
	// 							</div>
	// 						}

	// 						{/* <StyledButton small onClick={(e) => buyHandler()}>
	// 								Buy
	// 		  					</StyledButton> */}

	// 					</div>
	// 				),
	// 			},
	// 			{
	// 				// Make an expander cell
	// 				Header: () => null, // No header
	// 				id: 'buy', // It needs an ID

	// 				Cell: ({ row }) => (
	// 					// Use Cell to render an expander for each row.
	// 					// We can use the getToggleRowExpandedProps prop-getter
	// 					// to build the expander.
	// 					<div onClick={() => console.log("opennnn")} {...row.getToggleRowExpandedProps()}>
	// 						{console.log()}
	// 						{
	// 							row.original.type === "card" ? null
	// 								:
	// 								row.isExpanded ?
	// 									<div className="options_btn">
	// 										<StyledButton small>
	// 											Cancel
	// 										</StyledButton>
	// 									</div>
	// 									:
	// 									<div className="options_btn">
	// 										<StyledButton small onClick={(e) => buyHandler("buying")}>
	// 											Buy
	// 										</StyledButton>
	// 									</div>

	// 						}

	// 					</div>
	// 				),
	// 			},

	// 		],
	// 	},

	// ]
	// const buyHandler = () => {
	// 	setIsSelling(false)
	// }
	// const sellHandler = () => {
	// 	setIsSelling(true)
	// }
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
									<span className="rate-card-attributes__item">Rate(₦)</span>
									<span className="rate-card-attributes__item">Qty</span>
								</p>
								{
									item?.attributes?.map((attribute, i) => (
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
					{/* {console.log(coinOnlyRates?.length)} */}
					{
						!coinOnlyRates?.length ? console.log('here') :
							coinKeys.map((coinName, index) => (
								<fieldset className="rate-card-group" key={index}>
									<legend>{coinName}</legend>
									<p className="rate-card-attributes header">
										<span className="rate-card-attributes__item">Name</span>
										<span className="rate-card-attributes__item">Class</span>
										<span className="rate-card-attributes__item">Worth</span>
										<span className="rate-card-attributes__item">Rate(₦)</span>
									</p>
									{coinOnlyRates.map((item, index) => (

										coinName === item.name ?

											<p key={index} className="rate-card-attributes">
												<span className="rate-card-attributes__item">
													{item.name}
												</span>
												<span className="rate-card-attributes__item">
													{item.class}
												</span>
												<span className="rate-card-attributes__item">
													{item.from} - {item.to}
												</span>
												<span className="rate-card-attributes__item">
													{item.buying}
												</span>
											</p>
											: null
									))}
								</fieldset>
							))
					}
				</div>
				{/* <PaginatedTable tableColumns={columns} expandedComponent={expandedComponent} data={rates.allRates ? rates.allRates : []} /> */}
			</div>
		</Container>
	)
}
const mapStateToProps = ({ rates, users }) => ({
	rates: rates,
	user: users,
	coinOnlyRates: rates?.allRates?.filter(item => item.type === "coin"),
	cardOnlyRates: rates?.allRates?.filter(item => item.type === "card"),
	// coinkeys: [...new Set(Object.keys(rates?.allRates?.filter(item => item.type === "coin") || []))] 
})

const mapDispatchToProps = {
	fetchAllRates: fetchAllRatesActionCreator
}
export default connect(mapStateToProps, mapDispatchToProps)(MasterAdminRates)
