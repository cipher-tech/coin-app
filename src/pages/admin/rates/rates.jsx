import React, { useEffect } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import Axios from 'axios'
import quickDetails from "../../../images/rate.png"
import routes from '../../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'
import PaginatedTable from '../../../components/table/tablePagination'

const Container = styled.div`
    grid-column: ${props => props.gridPos || "2/-1"};
    display: grid;
    min-height: 100%;
    min-width: 100%;
    place-items: center;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    .rate{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        width: 100%;
        padding: 3rem;
        align-items: flex-start;
        place-items: center;
        /* height: 78vh; */
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           padding: 3rem 0;
        }

        img{
            /* height: 100%; */
            width: 80%;        }

    }
`
function MasterAdminRates({ gridPos, fetchAllRates, rates }) {
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
  const columns = [
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
  return (
    <Container gridPos={gridPos}>
      <div className="rate">
        <PaginatedTable tableColumns={columns} data={rates.allRates ? rates.allRates : []} />
        <div>
          <img src={quickDetails} width="100%" height="100%" alt=""/>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(MasterAdminRates)
