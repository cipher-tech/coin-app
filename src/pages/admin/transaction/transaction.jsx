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
        
            Axios.post(`${routes.api.userTransactions}?token=${auth_token}`, {id})
                .then(res => {
                    // console.log(res.data.data);
                    if (res.data.status === "success") {
                        console.log(Object.values(res.data.data).sort((a,b) => new Date().getTime(a.created_at)  
                        - new Date().getTime(b.created_at)))

                        setHistory(Object.values(res.data.data))
                    }
                    return
                })
                .catch( err => {
                    console.log(err);
                })
    
            return () => {
    
            }
       
    }, [])
    const columns = [
        {
          Header: 'Coin Rates',
          columns: [
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
            // {
            //   Header: 'Created At',
            //   accessor: 'created_at',
            //   collapse: true,
            // },
          ],
        },
      ]
    return (
        <Container>
            <div className="rate">
                {/* <img src={rateImage} alt="rate"/> */}

                <PaginatedTable tableColumns={columns} data={history ? history : []} />
            </div>
        </Container>
    )
}

export default AdminTransaction
