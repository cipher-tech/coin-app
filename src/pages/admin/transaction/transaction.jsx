import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/transcation.png"
import Axios from 'axios'
import routes from '../../../navigation/routes'
import PaginatedTable from '../../../components/table/tablePagination'

const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    min-height: 100vh;
    min-width: 100%;
    place-items: center;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    .rate{
        grid: 1/-1;
        display: grid;
        width: 100%;
        padding: 3rem;
        align-items: flex-start;
        place-items: center;

		&__title{
			color: ${props => props.theme.colorPrimary};
			font-size:  ${props => props.theme.font.Xlarge};
			padding: 2rem 2rem;
			justify-self: flex-start;
		}
        img{
            height: 78vh;
            width: 100%;        
        }

    }
`
function AdminTransaction() {
	const [history, setHistory] = useState([])
	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		const id = JSON.parse(localStorage.getItem("userInfo")).user.id

		Axios.post(`${routes.api.userTransactions}?token=${auth_token}`, { id })
			.then(res => {
				// console.log(res.data.data);
				if (res.data.status === "success") {
					console.log(Object.values(res.data.data).filter(item => item.trans_type))
					console.log(Object.values(res.data.data).filter(item => !item.trans_type))
					setHistory(Object.values(res.data.data))
				}
				return
			})
			.catch(err => {
				console.log(err);
			})

		return () => {

		}

	}, [])
	const columns = [
		{
			Header: 'Deposits/Withdrawl',
			columns: [
				{
					Header: 'Id',
					accessor: 'slug',
					collapse: true,
				},
				{
					Header: 'Amount',
					accessor: 'amount',
					collapse: true,
				},
				{
					Header: 'Trans Type',
					accessor: 'trans_type',
					collapse: true,
				},
				{
					Header: 'Status',
					accessor: 'status',
					collapse: true,
				},

				{
					Header: 'Email',
					accessor: 'email',
				},
				{
					Header: 'Created At',
					accessor: (rowInfo) => {
						return (
							<span>
								{new Date(rowInfo.created_at).toDateString() || "none"}
							</span>
						)
					},
					render: (rowInfo) => {
						return (
							<span>
								ddsd
								{/* {new Date(rowInfo.created_at).toDateString()} */}
							</span>
						)
					}
				},
			],
		},
	]
	const Tarnsction_columns = [
		{
			Header: 'Coin and GiftCard Transcation',
			columns: [
				{
					Header: 'Id',
					accessor: 'reference_id',
					collapse: true,
				},
				{
					Header: 'Amount',
					accessor: 'amount',
					collapse: true,
				},
				{
					Header: 'Type',
					accessor: 'type',
					collapse: true,
				},
				{
					Header: 'Action',
					accessor: 'action',
					collapse: true,
				},
				{
					Header: 'Mode_Of_Payment',
					accessor: 'mode_of_payment',
					collapse: true,
				},
				{
					Header: 'Status',
					accessor: 'status',
					collapse: true,
				},
				{
					Header: 'Created At',
					accessor: (rowInfo) => {
						return (
							<span>
								{new Date(rowInfo.created_at).toDateString() || "none"}
							</span>
						)
					},
					render: (rowInfo) => {
						return (
							<span>
								ddsd
								{/* {new Date(rowInfo.created_at).toDateString()} */}
							</span>
						)
					}
				},
			],
		},
	]
	return (
		<Container>
			<div className="rate">
				{/* <img src={rateImage} alt="rate"/> */}
				<h1 className="rate__title">Deposits / Withdrawl </h1>
				<PaginatedTable tableColumns={columns} data={history ? Object.values(history).filter(item => item.trans_type) : []} />

				<h1 className="rate__title">Coin and GiftCard Transcation</h1>
				<PaginatedTable tableColumns={Tarnsction_columns} data={history ? Object.values(history).filter(item => !item.trans_type) : []} />

			</div>
		</Container>
	)
}

export default AdminTransaction
