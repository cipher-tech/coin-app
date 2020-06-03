import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import Table from '../../../components/table/tablePagination'
import { fetchAllUsersActionCreator } from '../../../reduxStore/user'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { StyledInput } from '../../../components/styledComponents'
import envelope from "../../../images/svgIcons/envelope.svg"
import routes from '../../../navigation/routes'

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
      @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
        padding: 3rem 0;
      }
	  .expandedDiv{
		  color: red; 
		  width: 100%;
		  display: grid;
		  justify-items: space-around;
		  grid-template-columns: repeat(3, 1fr);
		  gap: 0 1.5rem;
		  &__button{
			align-self: center;
			border-radius: 1rem;
			padding: 1.5rem 1.5rem;
		  }
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
    
`
function AdminUsers({ allUsers, fetchAllUsers }) {
	// const [token, setToken] = useState([])
	const [fetchedUsers, setFetchedUsers] = useState(false)
	const [editRole, setEditRole] = useState('')
	const [editWallet_bal, setEditWallet_bal] = useState('')

	// let authToken

	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		// console.log(auth_token);

		Axios.get(`http://localhost:8000/api/users/all?token=${auth_token}`)
			.then(response => {
				// console.log(response.data);

				fetchAllUsers(response.data.data)
				return response.data;
			})
			.then(res => {
				setFetchedUsers(true)
				// console.log(allUsers)
			})
			.catch(error => {
				alert(`An Error Occured! ${error}`);
			});

	}, [fetchAllUsers])
	const columns = [
		{
			// Make an expander cell
			Header: () => null, // No header
			id: 'expander', // It needs an ID

			Cell: ({ row }) => (
				// Use Cell to render an expander for each row.
				// We can use the getToggleRowExpandedProps prop-getter
				// to build the expander.
				<div {...row.getToggleRowExpandedProps()}>
					{row.isExpanded ? 'cancle❌' : 'Edit'}

					{/* <div onClick={ ()=>row.toggleRowExpanded( row.id,false)}>
					close
				</div> */}
				</div>
			),
		},
		{
			Header: 'First Name',
			accessor: 'first_name',
		},
		{
			Header: 'Email',
			accessor: 'email',
		},
		{
			Header: 'Role',
			accessor: 'role',
			collapse: true,
		},
		{
			Header: 'phone No',
			accessor: 'phone_no',
			collapse: true,
		},
		{
			Header: 'Wallet Balc',
			accessor: 'wallet_balc',
			collapse: true,
		},
		{
			Header: 'Status',
			accessor: 'status',
		},
		{
			Header: 'created At',
			accessor: 'created_at',
			collapse: true,
		},

	]
	const handleEditRates = (user) => {
		const userInfo = {
			userId: user.id,
			role: editRole || user.role,
			wallet_bal: editWallet_bal || user.wallet_balc
		}

		console.log(userInfo);
		updateEditRateHooks()

		Axios.post(routes.api.updateUsers, userInfo)
			.then(res => {
				console.log(res.data);
				fetchAllUsers(res.data.data)
			})
	}

	const updateFormValue = (name, value) => {

	}

	const updateEditRateHooks = () => {
		setEditRole('')
		setEditWallet_bal('')
	}
	const expandedComponent = (props) => (
		<div className="expandedDiv" onBlur={() => { console.log(props); props.toggleRowExpanded(props.id, !true) }}>
			<StyledInput name="Role" label="Role" updatedValue={setEditRole}
				handleChange={updateFormValue} value={editRole}
				placeHolder="Change Role" type="currentRate" icon={envelope} />

			<StyledInput name="buying" label="Wallet balance" updatedValue={setEditWallet_bal}
				handleChange={updateFormValue} value={props.original.wallet_balc}
				placeHolder="Edit wallet bal" type="buying" icon={envelope} />

			<button onClick={() => handleEditRates(props.original)} className="expandedDiv__button">
				Update
			</button>
		</div>
	)
	// console.log(fetchedUsers);
	// console.log(token);
	return (
		<Container>
			<div className="rate">
				<h1 className="rate__title">All Users</h1>
				{fetchedUsers ? <Table expandedComponent={expandedComponent} data={allUsers.allUsers} tableColumns={columns} /> : null}
				{/* <Table tableColumns={columns} /> */}
			</div>
		</Container>
	)
}

const mapStateToProps = ({ users }) => ({
	allUsers: users
})

const mapDispatchToProps = {
	fetchAllUsers: fetchAllUsersActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers)
