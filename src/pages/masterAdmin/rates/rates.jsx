import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import App from '../../../components/table/tablePagination'
import { Modal } from '../../../components'
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
		  color: red; 
		  width: 100%;
		  display: grid;
		  justify-items: space-around;
		  grid-template-columns: repeat(5, 1fr);
		  gap: 0 1.5rem;
		  &__button{
			align-self: center;
			border-radius: 1rem;
			padding: 1.5rem 1.5rem;
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
		  align-self: center;
		  color: ${props => props.theme.colorPrimary};
		  &-form{
                /* justify-self: flex-start; */
                width: 95%;
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
function AdminRates({ fetchAllRates, rates }) {
	const [isActive, setIsActive] = useState(!true)
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [currentRate, setCurrentRate] = useState('')
	const [buying, setBuying] = useState('')
	const [selling, setSelling] = useState('')
	// const [editName, setEditName] = useState('')
	// const [editType, setEditType] = useState('')
	const [editCurrentRate, setEditCurrentRate] = useState('')
	const [editBuying, setEditBuying] = useState('')
	const [editSelling, setEditSelling] = useState('')

	const rules = {
		name: { required: true, minlength: 4, },
		type: { required: true, minlength: 4, },
		currentRate: { required: true, minlength: 4, },
		buying: { required: true, minlength: 2, },
		selling: { required: true, minlength: 3, },
	}
	const state = {
		name: name,
		type: type,
		currentRate: currentRate,
		buying: buying,
		selling: selling
	}

	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token

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
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token

		console.log('data :>> ', data);
		Axios.post(`${routes.api.addRates}?token=${auth_token}`, data)
			.then(res => {
				console.log(res.data);
				fetchAllRates(res.data.data)
				setIsActive(false)
			})
			.catch(res => console.log(res))
	}

	const updateFormValue = (name, value) => {

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
				<div onClick={() => console.log("opennnn")} {...row.getToggleRowExpandedProps()}>
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
					Header: 'Current_rate',
					accessor: 'current_rate',
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
			],
		},
	]
	const handleEditRates = (rate) => {
		const rateInfo = {
			rateId: rate.id,
			currentRate: editCurrentRate || rate.currentRate,
			buying: editBuying || rate.buying,
			selling: editSelling || rate.selling
		}

		console.log(rateInfo);
		updateEditRateHooks()
        const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token

		Axios.post(`${routes.api.updateRates}?token=${auth_token}`, rateInfo)
			.then(res => {
				console.log(res.data);
				fetchAllRates(res.data.data)
			})
	}

	const updateEditRateHooks = () => {
		// setEditName('')
		setEditCurrentRate('')
		// setEditType('')
		setEditBuying('')
		setEditSelling('')
	}
	const expandedComponent = (props) => (
		<div className="expandedDiv" onBlur={() => {console.log(props); props.toggleRowExpanded(props.id, !true)}}>
			{console.log(props)}
			{/* {updateEditRateHooks(props)} */}
			{/* <StyledInput name="name" label="name" updatedValue={setEditName} handleChange={updateFormValue}
				value={props.original.name}
				placeHolder="Name" type="name" icon={lock} /> */}

			<StyledInput name="currentRate" label="Current Rate" updatedValue={setEditCurrentRate}
				handleChange={updateFormValue} value={editCurrentRate}
				placeHolder="CurrentRate" type="currentRate" icon={envelope} />

			<StyledInput name="buying" label="Buying" updatedValue={setEditBuying}
				handleChange={updateFormValue} value={props.original.buying}
				placeHolder="Buying" type="buying" icon={envelope} />

			<StyledInput name="selling" label="Selling" updatedValue={setEditSelling}
				handleChange={updateFormValue} value={props.original.selling}
				placeHolder="Selling" type="selling" icon={envelope} />
			<button onClick={() => handleEditRates(props.original)} className="expandedDiv__button">
				Update
			</button>
		</div>
	)

	return (
		<Container>
			<div className="rate">
				<div className="toggle" onClick={() => setIsActive(!isActive)} >
					{!isActive ? "➕" : "✖"}
				</div>
				<Modal isActive={isActive}>
					<FormValidator buttonClass="rate-summit"
						classname=" rate-container "
						data={state} rules={rules}
						submit={submit}>
						<div className="rate-container-form">
							<StyledInput name="name" updatedValue={setName} handleChange={updateFormValue} value={state.name}
								placeHolder="Name" type="name" icon={envelope} />
							<ValidationMessage field="name" />

							<StyledInput name="type" updatedValue={setType} handleChange={updateFormValue}
								value={state.type}
								placeHolder="Type" type="type" icon={lock} />
							<ValidationMessage field="type" />

							<StyledInput name="currentRate" updatedValue={setCurrentRate} handleChange={updateFormValue}
								value={state.currentRate}
								placeHolder="Current Rate" type="currentRate" icon={lock} />
							<ValidationMessage field="currentRate" />

							<StyledInput name="buying" updatedValue={setBuying} handleChange={updateFormValue}
								value={state.buying}
								placeHolder="Buying" type="buying" icon={lock} />
							<ValidationMessage field="buying" />

							<StyledInput name="selling" updatedValue={setSelling} handleChange={updateFormValue}
								value={state.selling}
								placeHolder="Selling" type="selling" icon={lock} />
							<ValidationMessage field="selling" />
						</div>
						<p className="rate-isSugnedIn">
							Add new bitcoin or gift card.
						</p>
					</FormValidator>
				</Modal>
				<h1 className="rate__title">Rates</h1>
				<App tableColumns={columns} expandedComponent={expandedComponent} data={rates.allRates ? rates.allRates : []} />
			</div>
		</Container>
	)
}

const mapStateToProps = ({ rates }) => ({
	rates: rates
})

const mapDispatchToProps = {
	fetchAllRates: fetchAllRatesActionCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminRates)
