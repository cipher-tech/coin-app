import React from 'react'
import barChart from "../../images/barChart.svg"
import StatisticsSvg from "../../images/StatisticsSvg.svg"
import ReferrerSvg from "../../images/rate.png"
import quickDetails from "../../images/quickDetails.png"
import styled from 'styled-components'

const Container = styled.div`
    .dashboard{
    grid-column: 2/ -1;
    background: ${props => props.theme.colorLight};
    min-height: 100vh;
    min-width: 100%;
    padding: 2rem 3rem;
    display: grid;
    z-index: 0;
    /* place-items: center; */
    border-radius: 2rem 0 0 2rem;
    &__title{   
        font-weight: 500;
        color: ${props => props.theme.colorPrimary};
        font-family: ProximaNovaSoftW03-Regular;
    }
    &__overView{
        grid-column: 1/-1;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 1rem;

        &-items{
            /* grid-column: 1/-1; */
            margin-top: 2rem;
            width: max-content;
            height: min-content;
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(2, 1fr);
            box-shadow: .3rem .4rem 7px rgba(0,0,0, .4);
            border-radius: 1.5rem;
            
            &-stats{
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

            &-icon{
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
        }
    }
    &__chart{
        grid-column: 1/-1;
        /* height: 100%; */
        text-align: center;
        display: block;
        object-fit: cover;
        img{
            width: 90%;
            height: 100%;
            /* object-fit: cover; */
        }
    }
    &__details{
        grid-column: 2/-1;
        /* width: 100%; */
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        gap: 3rem;
        text-align: center;
        display: grid;
        object-fit: cover;
        img{
            width: 100%;
            /* height: 100%; */
            /* object-fit: cover; */
        }
    }
    }
`
const Dashboard = () => {
    return (
        <Container className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <div className="dashboard__overView">
            <div className="dashboard__overView-items">
                <div className="dashboard__overView-items-stats">
                    <p className="dashboard__overView-items-stats--title">Total tranc. </p>
                    <p className="dashboard__overView-items-stats--digit">246K</p>
                    <p className="dashboard__overView-items-stats--rate">^20.8%</p>
                </div>
                <div className="dashboard__overView-items-icon">
                    <img src={barChart} alt="bar Chart" />
                </div>
            </div>
            <div className="dashboard__overView-items">
                <div className="dashboard__overView-items-stats">
                    <p className="dashboard__overView-items-stats--title">Payments</p>
                    <p className="dashboard__overView-items-stats--digit">246K</p>
                    <p className="dashboard__overView-items-stats--rate">^20.8%</p>
                </div>
                <div className="dashboard__overView-items-icon">
                    <img src={barChart} alt="bar Chart" />
                </div>
            </div>
            <div className="dashboard__overView-items">
                <div className="dashboard__overView-items-stats">
                    <p className="dashboard__overView-items-stats--title">Pending </p>
                    <p className="dashboard__overView-items-stats--digit">246K</p>
                    <p className="dashboard__overView-items-stats--rate">^20.8%</p>
                </div>
                <div className="dashboard__overView-items-icon">
                    <img src={barChart} alt="bar Chart" />
                </div>
            </div>
        </div>
        <div className="dashboard__chart">
            <img src={StatisticsSvg} alt=" Statistics Svg" />
        </div>
        <div className="dashboard__details">
            <img src={ReferrerSvg} alt=" Statistics Svg" />
            <img src={quickDetails} alt=" Statistics Svg" />
        </div>
    </Container>
    )
}

export default Dashboard

//HostProvider- namecheap
//username: GSSGROUP
//password: kC%Kq9_Hb&rWB7(

//Domain username- wilpat456@gmail.com
//password - q!M5A89mRJXz
// provider- Web4Africa

// server credentials- https://server126.web-hosting.com:2083
//Username - gssgvrqp
//pawwd - PenJBe8nT9Fd