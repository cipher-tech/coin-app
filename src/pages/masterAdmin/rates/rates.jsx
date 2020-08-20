import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import App from '../../../components/table/tablePagination'
import { Modal, PopUpMessage, AddEditGiftcard, EditGiftcard, Storage } from '../../../components'
import { FormValidator } from '../../../formValidator'
import { StyledInput } from '../../../components/styledComponents'
import { ValidationMessage } from '../../../validationMessage'
import lock from "../../../images/svgIcons/lock.svg"
import envelope from "../../../images/svgIcons/envelope.svg"
import Axios from 'axios'
import routes from '../../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'

const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    min-height: 100%;
    min-width: 100%;
    /* place-items: center; */
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;

	.editButton{
		padding: .5rem 1rem;
		display: flex;
		place-items: center;
		z-index: 200;
		border: none;
		text-transform: capitalize;
		color: ${props => props.theme.colorWhite};
		font-size: ${props => props.theme.font.small};
		background: ${props => props.theme.colorPrimary};
		margin: 1rem;
		border-radius: 2rem;
		cursor: pointer;
		&:focus{
			outline: none;
		}
	}
	.infoButton{
		padding: .5rem 1rem;
		display: flex;
		place-items: center;
		z-index: 200;
		border: none;
		text-transform: capitalize;
		color: ${props => props.theme.colorWhite};
		font-size: ${props => props.theme.font.small};
		background: ${props => props.theme.colorPrimary};
		margin: 1rem;
		border-radius: 2rem;
		cursor: pointer;
		&:focus{
			outline: none;
		}
	}
    .rate{
      grid-column: 1/-1;
      grid-template-rows: max-content max-content max-content;
      display: grid;
      width: 100%;
      padding: 3rem;
      position: relative;
      /* z-index: 10; */
      /* place-items: center; */
      /* justify-items: center; */
      /* align-items: space-around; */
      @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
        padding: 3rem 0;
      }
	  .expandedDiv{
			color: ${props => props.theme.colorDark};
			width: 100%;
			display: grid;
			justify-items: space-around;
			background: transparent;
			grid-template-columns: repeat(5, 1fr);
			gap: 0 1.5rem;
			&__button{
				align-self: center;
				border-radius: 1rem;
				padding: 1.5rem 1.5rem;
			}
			.header{
				color: ${props => props.theme.colorPrimary};
				font-size: ${props => props.theme.font.large};
			}
			&-attributes{
				grid-column: 1/-1;
				display: flex;
				width: 100%;
				min-width: 55rem;
				justify-content: space-around;
				padding: 1rem 1.5rem;
				margin: 1rem;
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
		.toggle-type{
			display: flex;
			align-content: flex-end;
			align-self: flex-end;
			justify-content: center;

			.active{
				background: ${props => props.theme.colorPrimary};
				color: ${props => props.theme.colorWhite};
			}
			&__item{
				font-size: ${props => props.theme.font.large};
				background: ${props => props.theme.colorWhite};
				border: none;
				padding: 1rem 2rem;
				display: inline-block;
				color: ${props => props.theme.colorPrimary};
				cursor: pointer;
			}
		}
	  &-summit{
			display: grid;
			align-self: center;
			justify-self: flex-end;
			text-align: center;
			justify-content: center;
			padding: 1rem 6rem;
			font-size: ${props => props.theme.font.xlarge};
			border-radius: 20rem;
			border: 1px solid ${props => props.theme.colorLight};
			box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
			-0.2rem -0.4rem 20px rgba(255,255,255, .3);
			background: ${props => props.theme.colorPrimary};
			color: ${props => props.theme.colorLight};
			/* border: none; */
			margin: 1rem 5.5rem;

			&:active{
				box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
					.2rem .4rem 10px rgba(0,0,0, .3);
				color: ${props => props.theme.colorPrimary};
			}
			&:focus{
				outline: none;
			}
		}

      .toggle{
        position: fixed;
        display: grid;
        place-items: center;
        z-index: 200;
        top: 80%;
        left: 95%;
        height: 3.5rem;
        width: 3.5rem;
        font-size: 2rem;
        background: ${props => props.theme.colorSecondary};
        border-radius: 50%;
        /* padding: 1rem; */
    }
      
	&-container{
		background: white;
		/* width: 30rem; */
		padding: 3rem;
		/* height: 40rem; */
		align-self: flex-start;
		color: ${props => props.theme.colorPrimary};
		position: relative;
		&-closeBtn{
			position: absolute;
			color: ${props => props.theme.colorError};
			top: 1rem;
			right: 2rem;
			background: transparent;
			border: none;
			cursor: pointer;
			font-size: ${props => props.theme.font.large};
			&:focus{
				outline: none;
			}
		}
		&-form{
			/* justify-self: flex-start; */
			width: 95%;
			transition: all .5s ease .2s;
			&__actions{
				display: flex;
			}
			&--addCard{
				padding: .5rem 1rem;
				display: flex;
				place-items: center;
				z-index: 200;
				border: none;
				text-transform: capitalize;
				color: ${props => props.theme.colorWhite};
				font-size: ${props => props.theme.font.small};
				background: ${props => props.theme.colorPrimary};
				margin: 1rem;
				border-radius: 2rem;
				cursor: pointer;
				&:focus{
					outline: none;
				}
			}
		}
	}
      &__title{   
        justify-self: flex-start;
        display:flex;
        align-self: flex-start;
        height: max-content;
        font-weight: 500;
        color: ${props => props.theme.colorPrimary};
        font-family: ProximaNovaSoftW03-Regular;
        position: relative;

        &::after{
          content: '';
          position: absolute;
          width: 120%;
          height: .4rem;
          bottom: 0;
          left: 0;
          background: ${props => props.theme.colorPrimary};
        }
      }
    }
`
function AdminRates({ fetchAllRates, rates, coinOnlyRates, cardOnlyRates }) {
	const [cardSelectedForEdit, setCardSelectedForEdit] = useState([])
	const [isEditing, setIsEditing] = useState(false)
	// const [giftCardName, setGiftCardName] = useState('')
	const [isActive, setIsActive] = useState(!true)

	const [isBitcoin, setIsBitcoin] = useState(!true)
	const [name, setName] = useState('')
	// const [type, setType] = useState('')
	// const [currentRate, setCurrentRate] = useState('')
	const [buying, setBuying] = useState('')
	const [classInput, setClassInput] = useState('')
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')
	const [selling, setSelling] = useState('')
	const [quantity, setQuantity] = useState('')

	const [editQuantity, setEditQuantity] = useState('')
	const [editBuying, setEditBuying] = useState('')
	const [editSelling, setEditSelling] = useState('')
	const [editClass, setEditClass] = useState('')
	const [editFrom, setEditFrom] = useState('')
	const [editTo, setEditTo] = useState('')

	const [isLoading, setIsLoading] = useState(false);
	const [showpopUpMessage, setShowPopUpMessage] = useState(false)
	const [popUpMessage, setPopUpMessage] = useState(null)
	const [error, setError] = useState(false)

	const rules = {
		name: { required: true, minlength: 3, },
		// type: { required: true, minlength: 3, },
		// currentRate: { required: true, minlength: 3, },
		buying: { required: true, },
		// classInput: { required: true, minlength: 2, },
		// from: { required: true, minlength: 2, },
		// to: { required: true, minlength: 2, },
		selling: { required: true },
		quantity: { required: true },
	}
	const state = {
		name: name,
		// type: type,
		// currentRate: currentRate,
		buying: buying,
		classInput: classInput,
		from: from,
		to: to,
		selling: selling,
		quantity: quantity,
	}

	useEffect(() => {
		const auth_token = Storage.get("userInfo")?.user?.auth_token

		// console.log('data :>> ', data);
		Axios.get(`${routes.api.getRates}?token=${auth_token}`)
			.then(res => {
				// console.log(res.data.data);
				fetchAllRates(res.data.data)
				return
			})

		return () => {

		}
	}, [fetchAllRates])

	const submit = async (data) => {
		setError(!true)
		setShowPopUpMessage(!true)
		setIsLoading(true)
		const auth_token = Storage.get("userInfo").user.auth_token

		console.log('data :>> ', data);
		Axios.post(`${routes.api.addRates}?token=${auth_token}`, { ...data, type: "coin" })
			.then(res => {
				if (res.data.status === "success") {
					console.log(res.data);
					setPopUpMessage("Added Successfully")
					setShowPopUpMessage(true)
					setIsLoading(false)

					fetchAllRates(res.data.data)
					setIsActive(false)
				}
			})
			.catch(res => {
				setPopUpMessage("An error occured while uploading.")
				setError(true)
				setShowPopUpMessage(true)
				setIsLoading(!true)
			})
	}

	const createGiftCard = (data) => {
		// console.log();
		setError(!true)
		setShowPopUpMessage(!true)
		setIsLoading(true)
		const auth_token = Storage.get("userInfo").user.auth_token

		console.log('data :>> ', { ...data, type: "card" });
		Axios.post(`${routes.api.adminCreateGiftcard}?token=${auth_token}`, { ...data, type: "card" })
			.then(res => {
				if (res.data.status === "success") {
					console.log(res.data);
					setPopUpMessage("Added Successfully")
					setShowPopUpMessage(true)
					setIsLoading(false)

					fetchAllRates(res.data.data)
					setIsActive(false)
				}
			})
			.catch(res => {
				setPopUpMessage("An error occured while adding rate.")
				setError(true)
				setShowPopUpMessage(true)
				setIsLoading(!true)
			})
			.finally((res) => setIsActive(false))


	}
	const EditGiftCard = (data) => {
		// console.log();
		setError(!true)
		setShowPopUpMessage(!true)
		setIsLoading(true)
		const auth_token = Storage.get("userInfo").user.auth_token

		console.log('data :>> ', { ...data, type: "card" });
		Axios.post(`${routes.api.adminEditGiftcard}?token=${auth_token}`, { ...data, type: "card" })
			.then(res => {
				if (res.data.status === "success") {
					console.log(res.data);
					setPopUpMessage("Added Successfully")
					setShowPopUpMessage(true)
					setIsLoading(false)

					fetchAllRates(res.data.data)
					setIsActive(false)
				}
			})
			.catch(res => {
				setPopUpMessage("An error occured while adding rate.")
				setError(true)
				setShowPopUpMessage(true)
				setIsLoading(!true)
			})
			.finally((res) => setIsEditing(false))

	}
	const handleEditRates = (rate) => {
		const rateInfo = {
			rateId: rate.id,
			// currentRate: editCurrentRate || rate.current_rate,
			quantity: editQuantity || rate.quantity,
			buying: editBuying || rate.buying,
			selling: editSelling || rate.selling,
			from: editFrom || rate.from,
			class: editClass || rate.class,
			to: editTo || rate.to
		}

		// console.log(rateInfo);
		const auth_token = Storage.get("userInfo").user.auth_token

		Axios.post(`${routes.api.updateRates}?token=${auth_token}`, rateInfo)
			.then(res => {
				// console.log(res.data);
				if (res.data.status === "success") {
					console.log(res.data);
					setPopUpMessage("Updated Successfully")
					setShowPopUpMessage(true)
					setIsLoading(false)

					fetchAllRates(res.data.data)
					setIsActive(false)
				}
			})
			.catch(res => {
				setPopUpMessage("An error occured while uploading.")
				setError(true)
				setShowPopUpMessage(true)
				setIsLoading(!true)
			})
			.finally(res => {
				updateEditRateHooks()
			})
	}

	const columns = [
		{
			// Make an expander cell
			Header: () => null, // No header	
			id: 'expander', // It needs an ID

			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<div className="editButton" {...row.getToggleRowExpandedProps()}>
					{row.isExpanded ? 'Stop Editing' : 'Edit'}

					{/* <div onClick={ ()=>row.toggleRowExpanded( row.id,false)}>
					close
				</div> */}
				</div>
			),
		},
		{
			Header: 'Coin Rates',
			columns: [
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
					Header: 'Quantity',
					accessor: 'quantity',
					collapse: true,
				},
			],
		},
	]
	const cardColumns = [
		{
			// Make an expander cell
			Header: () => null, // No header	
			id: 'edit', // It needs an ID

			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<div className="infoButton" {...row.getToggleRowExpandedProps()}>
					{row.isExpanded ? 'Less' : 'More'}

				</div>
			),
		},
		{
			Header: 'Card Rates',
			columns: [
				{
					Header: 'Name',
					accessor: 'name',
					collapse: true,
				},

				{
					Header: 'Quantity',
					accessor: 'quantity',
					collapse: true,
				},
			],
		},
		{
			// Make an expander cell
			Header: () => null, // No header	
			id: 'expander', // It needs an ID

			accessor: (props) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<button className="editButton" onClick={() => { setCardSelectedForEdit(props); setIsEditing(true) }} >
					Edit
				</button>
			),
		},
	]

	const updateEditRateHooks = () => {
		// setEditName('')
		// setEditCurrentRate('')
		// setEditType('')
		setEditBuying('')
		setEditQuantity('')
		setEditSelling('')
	}
	const expandedComponent = (props) => (
		<div className="expandedDiv">
			{/* <StyledInput name="currentRate" label="Current Rate" updatedValue={setEditCurrentRate}
				 value={editCurrentRate} onBlur={() => { console.log(props); props.toggleRowExpanded(props.id, !true) }}
				placeHolder={props.original.current_rate} type="currentRate" icon={envelope} /> */}

			<StyledInput name="buying" label="Buying" updatedValue={setEditBuying}
				value={props.original.buying}
				placeHolder={props.original.buying} type="text" icon={envelope} />

			<StyledInput name="selling" label="Selling" updatedValue={setEditSelling}
				value={props.original.selling}
				placeHolder={props.original.selling} type="text" icon={envelope} />

			<StyledInput name="quantity" label="Quantity" updatedValue={setEditQuantity}
				value={editQuantity}
				placeHolder={props.original.quantity} type="text" icon={envelope} />

			<StyledInput name="editClass" label="class" updatedValue={setEditClass}
				value={editClass}
				placeHolder={props.original.class} type="text" icon={envelope} />

			<StyledInput name="editFrom" label="From" updatedValue={setEditFrom}
				value={editFrom}
				placeHolder={props.original.from} type="text" icon={envelope} />

			<StyledInput name="editTo" label="To" updatedValue={setEditTo}
				value={editTo}
				placeHolder={props.original.to} type="text" icon={envelope} />

			<button onClick={() => handleEditRates(props.original)} className="expandedDiv__button">
				{isLoading ? "Loading..." : "Update"}
			</button>
		</div>
	)
	const expandedCardInfo = (props) => (
		<div className="expandedDiv">
			<p className="expandedDiv-attributes header">
				<span className="expandedDiv-attributes__item">Country</span>
				<span className="expandedDiv-attributes__item">Class</span>
				<span className="expandedDiv-attributes__item">Range</span>
				<span className="expandedDiv-attributes__item">Rate</span>
			</p>
			{
				props.original?.attributes?.map((item, index) => (
					<p className="expandedDiv-attributes" key={index}>
						<span className="expandedDiv-attributes__item">
							{item.country}
						</span>
						<span className="expandedDiv-attributes__item">
							{item.class}
						</span>
						<span className="expandedDiv-attributes__item">
							{item.from} - {item.to}
						</span>
						<span className="expandedDiv-attributes__item">
							{item.rate}
						</span>
					</p>
				))
			}
		</div>
	)

	return (
		<Container>
			{showpopUpMessage ? <PopUpMessage error={error}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null}

			<div className="rate">
				<div className="toggle" onClick={() => setIsActive(!isActive)} >
					{!isActive ? "➕" : "✖"}
				</div>
				<Modal isActive={isActive}>
					<p className="toggle-type">
						<span className={`toggle-type__item ${isBitcoin ? "active" : null}`} onClick={() => setIsBitcoin(true)}>Add Bitcoin</span>
						<span className={`toggle-type__item ${!isBitcoin ? "active" : null}`} onClick={() => setIsBitcoin(false)}>Add Gift Card</span>
					</p>
					{isBitcoin ?
						<FormValidator buttonClass="rate-summit"
							classname=" rate-container "
							data={state} rules={rules}
							submit={submit}>
							<div className="rate-container-form">
								<StyledInput name="name" updatedValue={setName} value={state.name}
									placeHolder="Name" type="name" icon={envelope} />
								<ValidationMessage field="name" />

								{/* <StyledInput name="type" updatedValue={setType}
									value={state.type}
									placeHolder="Type" type="type" icon={lock} />
								<ValidationMessage field="type" /> */}

								{/* <StyledInput name="currentRate" updatedValue={setCurrentRate}
									value={state.currentRate}
									placeHolder="Current Rate" type="currentRate" icon={lock} />
								<ValidationMessage field="currentRate" /> */}

								<StyledInput name="classInput" updatedValue={setClassInput}
									value={state.classInput}
									placeHolder="Class" type="text" icon={lock} />
								<ValidationMessage field="classInput" />

								<StyledInput name="from" updatedValue={setFrom}
									value={state.from}
									placeHolder="From" type="number" icon={lock} />
								<ValidationMessage field="from" />

								<StyledInput name="to" updatedValue={setTo}
									value={state.to}
									placeHolder="To" type="number" icon={lock} />
								<ValidationMessage field="to" />

								<StyledInput name="buying" updatedValue={setBuying}
									value={state.buying}
									placeHolder="Buying" type="text" icon={lock} />
								<ValidationMessage field="buying" />

								<StyledInput name="selling" updatedValue={setSelling}
									value={state.selling}
									placeHolder="Selling" type="selling" icon={lock} />
								<ValidationMessage field="selling" />

								<StyledInput name="quantity" updatedValue={setQuantity}
									value={state.quantity}
									placeHolder="Quantity" type="number" icon={lock} />
								<ValidationMessage field="quantity" />
							</div>
							<p className="rate-isSugnedIn">
								Add new bitcoin.
						</p>
						</FormValidator>
						:
						<>
							<AddEditGiftcard closeModal={setIsActive} createGiftCard={createGiftCard} />
						</>
					}
				</Modal>

				{isEditing ?
					<Modal isActive={isEditing}>
						<EditGiftcard cardSelectedForEdit={cardSelectedForEdit} isEditing closeModal={setIsEditing} EditGiftCard={EditGiftCard} />
					</Modal>
					:
					null
				}
				{/* <h1 className="rate__title">Rates</h1> */}
				<App tableColumns={columns} expandedComponent={expandedComponent} data={rates.allRates ?
					coinOnlyRates
					:
					[]
				} />
				<App tableColumns={cardColumns} expandedComponent={expandedCardInfo} data={rates.allRates ?
					cardOnlyRates
					:
					[]
				} />
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


export default connect(mapStateToProps, mapDispatchToProps)(AdminRates)
