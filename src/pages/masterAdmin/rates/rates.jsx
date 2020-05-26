import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
import App from '../../../components/table/tablePagination'

const Container = styled.div`
    grid-column: 2/-1;
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
      width: 100%;
      padding: 3rem;
      /* place-items: center; */
      justify-items: center;
      align-items: space-around;
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
function AdminRates() {
  const columns =  [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            collapse: true,
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            collapse: true,
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            collapse: true,
          },
        ],
      },
    ]
  return (
    <Container>
      <div className="rate">
      <h1 className="rate__title">Rates</h1>
      <App tableColumns={columns} />
        {/* <Table tableColumns={columns} /> */}
      </div>
    </Container>
  )
}

export default AdminRates
