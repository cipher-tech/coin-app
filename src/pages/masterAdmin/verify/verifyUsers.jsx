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
function AdminVerifyUsers({allUsers, fetchAllUsers}) {
	// const [token, setToken] = useState([])
	const [fetchedUsers, setFetchedUsers] = useState(false)

	// let authToken
	
	useEffect(() => {
		const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
		console.log(auth_token);
		
		Axios.get(`http://localhost:8000/api/users/unverified?token=${auth_token}`)
			.then(response => {
				console.log(response.data);

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

	}, [fetchAllUsers] )
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
				{row.isExpanded ? '👇' : '👉'}
			  </span>
			),
		  },
		{
			Header: 'Unverified Users',
			columns: [
				{
					Header: 'ID',
					accessor: 'id',
				},
				{
					Header: 'images',
					accessor: 'images',
				},
				{
					Header: 'status',
					accessor: 'status',
				},
			],
		}
	]
	console.log(fetchedUsers);
	// console.log(token);
	return (
		<Container>
			<div className="rate">
				<h1 className="rate__title">Verify Users</h1>
				{fetchedUsers ? <Table data={allUsers.allUsers} tableColumns={columns} /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminVerifyUsers)
