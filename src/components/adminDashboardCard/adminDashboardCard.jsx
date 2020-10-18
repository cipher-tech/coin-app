import React from 'react'
import barChart from "../../images/barChart.svg"
import styled from 'styled-components'

const Container = styled.div`
    /* grid-column: 1/-1; */
    margin-top: 2rem;
    width: max-content;
    height: min-content;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: .3rem .4rem 7px rgba(0,0,0, .4);
    border-radius: 1.5rem;
    
    .dashboard__overView-items-stats{
        display: grid;
        justify-items: center;
        align-items: center;
        padding: 1rem 2rem;
        color: ${props => props.theme.colorPrimary};

        &--title{
            width: 10rem;
            font-weight: 300;
            padding: .3rem 0rem 0 1.8rem;
            font-size: ${props => props.theme.font.small};
            text-transform: capitalize;
        }
        &--digit{
            font-weight: 700;
            padding: .8rem 0;
            font-size: ${props => props.theme.font.xlarge};
            text-align: left;
        }
        &--rate{
            font-weight: 500;
            margin-left: -2.5rem;
            font-size: ${props => props.theme.font.xsmall};
            text-align: left;
            align-self: flex-start;
            color: ${props => props.theme.colorSuccess};
        }
    }

    .dashboard__overView-items-icon{
        width: 100%;
        /* height: 100%; */
        display: block;
        object-fit: cover;
        img{
            width: 90%;
            height: 100%;
            /* object-fit: cover; */
        }
    }
`

function AdminDashboardCard({title, stats, icon, noSymbol,schek}) {
    const region = localStorage.getItem("region") ? JSON.parse(localStorage.getItem("region")): null
    console.log(schek);
    return (
        <Container className="dashboard__overView-items">
            <div className="dashboard__overView-items-stats">
                <p className="dashboard__overView-items-stats--title">
                    {title? title : "Total tran"}
                </p>
                <p className="dashboard__overView-items-stats--digit">
                   { !noSymbol? 
                        region?.symbol? region.symbol: null
                        : null } {stats ? stats : 0}
                </p>
                {/* <p className="dashboard__overView-items-stats--rate">^20.8%</p> */}
            </div>
            <div className="dashboard__overView-items-icon">
                <img src={icon ? icon : barChart} alt="bar Chart" />
            </div>
        </Container>
    )
}

export default AdminDashboardCard
  