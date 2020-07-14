import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import Table from '../../../components/table/tablePagination'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'
import routes from '../../../navigation/routes'
import { StyledButton, PopUpMessage } from '../../../components'
import { fetchAllDepositActionCreator } from '../../../reduxStore'


const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    min-height: 100%;
    min-width: 100%;
    align-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    .rate{
		grid-column: 1/-1;
		display: grid;
		width: 100%;
		padding: 3rem;
		/* place-items: center; */
		justify-items: center;
		align-items: space-around;
		justify-self: flex-start;
		position: relative;
		@media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
			padding: 3rem 0;
		}
		
      &__title{   
        justify-self: flex-start;
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
    img{
      /* height: 100%; */
      width: 80%;        
    }

    
`
function AdminDepositRequest({ allDeposits, fetchAllDeposits }) {
	// const [token, setToken] = useState([])
	const [fetchedDeposits, setFetchedDeposits] = useState(false)
	const [popUpMessage, setPopUpMessage] = useState(null)
	const [showpopUpMessage, setShowPopUpMessage] = useState(false)
	const [hasError, setHasError] = useState(false)


	// let authToken

	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		console.log(auth_token);

		Axios.get(`${routes.api.adminDeposits}?token=${auth_token}`)
			.then(response => {
				console.log(response.data.data);

				fetchAllDeposits(response.data.data)
				return response.data;
			})
			.then(res => {
				setFetchedDeposits(true)
				// console.log(allDeposits)
			})
			.catch(error => {
				// alert(`An Error Occured! ${error}`);
				console.log(error);
			});

	}, [fetchAllDeposits])
	const columns = [
		// {
		// 	// Make an expander cell
		// 	Header: () => null, // No header
		// 	id: 'expander', // It needs an ID
		// 	Cell: ({ row }) => (
		// 	  // Use Cell to render an expander for each row.
		// 	  // We can use the getToggleRowExpandedProps prop-getter
		// 	  // to build the expander.
		// 	  <span {...row.getToggleRowExpandedProps()}>
		// 		{row.isExpanded ? '👇' : '👉'}
		// 	  </span>
		// 	),
		//   },
		{
			Header: 'Unverified Users',
			columns: [
				{
					Header: 'Amount',
					accessor: 'amount',
				},
				{
					Header: 'Email',
					accessor: 'email',
				},
				{
					Header: 'Coin Address',
					accessor: (rowInfo) => {
						return (
							<span>
								{rowInfo?.user?.coin_address || "none"}
							</span>
						)
					},
					render: (rowInfo) => {
						return (
							<span>
								{rowInfo.value.map(coinAddress => (<span>{console.log(coinAddress.user)}</span>))}
							</span>
						)
					}
				},
				{
					Header: 'Status',
					accessor: 'status',
				},

				{
					Header: 'Transaction Id',
					accessor: 'slug',
				},
			],
		},
		{
			// Make an expander cell
			Header: () => null, // No header
			id: 'action', // It needs an ID
			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.

				<div className="options_btn">
					<StyledButton onClick={(e) => acceptDeposit(row.original.amount,
						row.original.id,
						row.original.slug,
						row.original.user_id,
						row.original.status)}>
						Accept
			  		</StyledButton>

					<StyledButton onClick={(e) => deleteRequest(row.original.id)}>
						Delete
					</StyledButton>
				</div>

			),
		},
	]

	const deleteRequest = (id) => {
		// console.log(user_id);
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token

		Axios.post(`${routes.api.adminDeleteDeposit}?token=${auth_token}`, { id: id, action: "delete" })
			.then(res => {
				setShowPopUpMessage(false)
				if (res.data.status === "success") {
					setPopUpMessage(res.data.data[0])
				}
				return res.data.data[1];
				// console.log(res.data);
			})
			.then(res => {
				setShowPopUpMessage(true)
				fetchAllDeposits(res)
			})
			.catch(res => {
				setPopUpMessage(res.data.data)
				setShowPopUpMessage(true)
			})
	}

	const expandedComponent = (row) => (
		<div
			style={{
				fontSize: '10px',
				height: "20rem",
				width: "100%",
				display: "grid",
				"gridTemplateColumns": "1fr 1fr 1fr",
				overflow: "hidden"

			}}
		>
			{/* <code>{JSON.stringify({ values: row.values.images }, null, 2)}</code> */}
			{Object.values(JSON.parse(row.values.images)).map((photo, i) => (
				<img key={i} src={`http://localhost:8000/images/${photo}`} alt="acceptDeposit info" />
			))}
		</div>
	)
	const acceptDeposit = (amount, id, slug, user_id, status) => {
		// console.log();
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		const data = {
			amount: amount,
			id: id,
			slug: slug,
			user_id: user_id,
			status: status
		}
		console.log(data);
		Axios.post(`${routes.api.adminAcceptDeposit}?token=${auth_token}`, data)
			.then(res => {
				setShowPopUpMessage(false)
				if (res.data.status === "success") {
					setHasError(false)
					setPopUpMessage(res.data.data[0])
				} else {
					setPopUpMessage(res.data.data)
					setHasError(true)
				}
				return res.data.data[1];
				// console.log(res.data);
			})
			.then(res => {
				setShowPopUpMessage(true)
				fetchAllDeposits(res)
			})
		// .catch(res => {
		// 	setPopUpMessage(res.data.data)
		// 	setShowPopUpMessage(true)
		// })
	}
	return (
		<Container color="">
			<div className="rate">
				{showpopUpMessage ? <PopUpMessage error={hasError}> {popUpMessage} <span onClick={() => setShowPopUpMessage(false)}>✖</span> </PopUpMessage> : null}
				<h1 className="rate__title">Deposit Requests</h1>
				{fetchedDeposits ? <Table data={allDeposits.deposits || []} expandedComponent={expandedComponent} handleVerifyClick={acceptDeposit} tableColumns={columns} /> : null}
				{/* <Table tableColumns={columns} /> */}
			</div>
		</Container>
	)
}

const mapStateToProps = ({ deposits }) => ({
	allDeposits: deposits
})

const mapDispatchToProps = {
	fetchAllDeposits: fetchAllDepositActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDepositRequest)
