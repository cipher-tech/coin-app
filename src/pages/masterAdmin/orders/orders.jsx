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
import { fetchAllHistoryActionCreator } from '../../../reduxStore'


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
	  .orders{
		padding: 1rem 1.5rem;
		&-text{
			display: flex;
			padding: 1rem 1.5rem;
			font-size: ${props => props.theme.font.large};
			font-weight: 500;
			justify-content: space-around;
			color: ${props => props.theme.colorSecondary};
			&__info{
				font-size: ${props => props.theme.font.large};
				font-weight: 300;
				color: ${props => props.theme.colorDark};
			}
			&__tranction{
				padding: 2rem 2.5rem;
				display: flex;
				font-size: ${props => props.theme.font.xxlarge};
				font-weight: 500;
				justify-content: space-around;
				color: ${props => props.theme.colorSecondary};
				&--item{
					font-size: ${props => props.theme.font.medium};
					font-weight: 500;
					align-self: center ;
					color: ${props => props.theme.colorDark};

				}
			}
		}

	  }

    }
    img{
      /* height: 100%; */
      width: 80%;        
    }

    
`
function AdminOrders({ allHistory, fetchAllhistory }) {
	// const [token, setToken] = useState([])
	const [fetchedHistory, setFetchedHistory] = useState(false)
	const [popUpMessage, setPopUpMessage] = useState(null)
	const [showpopUpMessage, setShowPopUpMessage] = useState(false)
	const [hasError, setHasError] = useState(false)


	// let authToken

	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo"))?.user?.auth_token
		// console.log(auth_token);

		Axios.get(`${routes.api.adminGetOrders}?token=${auth_token}`)
			.then(response => {
				// console.log(response.data.data);

				fetchAllhistory(response.data.data)
				return response.data;
			})
			.then(res => {
				setFetchedHistory(true)
				// console.log(allHistory)
			})
			.catch(error => {
				// alert(`An Error Occured! ${error}`);
				console.log(error);
			});

	}, [fetchAllhistory])
	const columns = [
		{
			// Make an expander cell
			Header: () => null, // No header
			id: 'expander', // It needs an ID
			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<span {...row.getToggleRowExpandedProps()}>
					{row.isExpanded ? 'Close' : 'More '}
				</span>
			),
		},
		{
			Header: 'Withdrawal Request',
			columns: [
				{
					Header: 'Amount',
					accessor: 'amount',
				},
				{
					Header: 'Email',
					accessor: (rowInfo) => {
						return (
							<span>
								{rowInfo?.user?.email || "none"}
							</span>
						)
					},
				},
				{
					Header: 'Type',
					accessor: 'type',
				},
				{
					Header: 'Status',
					accessor: 'status',
				},
				{
					Header: 'Transaction Id',
					accessor: 'reference_id',
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
					<StyledButton onClick={(e) => confirmTransaction(row.original.id)}>
						Confirm
			  </StyledButton>

					<StyledButton onClick={(e) => deleteOrder(row.original.id)}>
						Delete
				</StyledButton>
				</div>

			),
		},
	]

	const deleteOrder = (id) => {
		// console.log(user_id);
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token

		Axios.post(`${routes.api.adminDestroyOrder}?token=${auth_token}`, { id: id, action: "delete" })
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
				fetchAllhistory(res)
			})
			.catch(res => {
				setPopUpMessage(res.data.data)
				setShowPopUpMessage(true)
			})
	}
	const expandedComponent = ({ original }) => (
		<div
			style={{
				fontSize: '10px',
				width: "100%",
				display: "grid",
				"gridTemplateColumns": "1fr ",
				overflow: "hidden"

			}}
			className="orders"
		>
			{/* {console.log(original)} */}
			<p className="orders-text">
				{original?.user?.first_name}
				<span className="orders-text__info">
					{original?.user?.phone_no}
				</span>
				<span className="orders-text__info">
					{original?.user?.email}
				</span>
			</p>

			<p className="orders-text__tranction">
				{original?.amount}
				<span className="orders-text__tranction--item">
					{original?.type}
				</span>
				<span className="orders-text__tranction--item">
					{original?.status}
				</span>
				<span className="orders-text__tranction--item">
					{original?.reference_id}
				</span>
				<span className="orders-text__tranction--item">
					{new Date(original?.created_at).toDateString()}
				</span>
			</p>


		</div>
	)
	const confirmTransaction = (id) => {
		// console.log();
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		const data = {
			id: id,
		}
		console.log(data);
		Axios.post(`${routes.api.adminConfirmTransaction}?token=${auth_token}`, data)
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
				fetchAllhistory(res)
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
				<h1 className="rate__title">All Orders</h1>
				{fetchedHistory ? <Table data={allHistory.history || []} expandedComponent={expandedComponent} handleVerifyClick={confirmTransaction} tableColumns={columns} /> : null}
				{/* <Table tableColumns={columns} /> */}
			</div>
		</Container>
	)
}

const mapStateToProps = ({ history }) => ({
	allHistory: history
})

const mapDispatchToProps = {
	fetchAllhistory: fetchAllHistoryActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders)
