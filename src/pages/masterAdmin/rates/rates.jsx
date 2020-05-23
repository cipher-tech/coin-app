import React from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
import Table from './table'

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
function AdminRates() {
    const  columns = {
        Header: 'Rates',
        columns: [
          {
            Header: 'Asset',
            accessor: 'Asset',
          },
          {
            Header: 'Type',
            accessor: 'Type',
          },
          {
            Header: 'Range',
            accessor: 'Range',
          },
          {
            Header: 'Buying',
            accessor: 'Buying',
          },
          {
            Header: 'Selling',
            accessor: 'Selling',
          },
        ]
      }
    return (
        <Container>
            <div className="rate">
                <Table tableColumns={columns}/>
            </div>
        </Container>
    )
}

export default AdminRates
