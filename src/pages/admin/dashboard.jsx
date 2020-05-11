import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from "react-spring"
import barChart from "../../images/barChart.svg"
import StatisticsSvg from "../../images/StatisticsSvg.svg"
import ReferrerSvg from "../../images/Referrer.png"
import quickDetails from "../../images/quickDetails.png"
import avatar1 from "../../images/avatar1.jpg"

const Container = styled.div`
grid-column: 1/-1;
min-height: 100vh;
display: grid;
grid-template-columns: repeat(2, max-content 1fr); 
place-items: center;
overflow: hidden;
/* transition: all 11s ease-in .5s; */
background: ${props => props.theme.colorPrimary};

.sideNav{
    /* overflow: hidden; */
    display: grid;
    /* width: 100%; */
    height: 100%;
    /* z-index: 80; */
    /* grid-template-columns: 1fr; */
    /* place-items: center; */
    justify-items: flex-start;
    align-items: flex-start;
    /* overflow: hidden; */
    position: relative;
    background: ${props => props.theme.colorPrimary};
    &__container{
        display: grid;
        width: 100%;
        /* z-index: 50; */
        padding: 15vh 1rem 3rem;
        background: ${props => props.theme.colorPrimary};
        /* position: fixed; */
        &-item-photo{
            
            text-align: center;
            /* margin: 1rem 4rem 6rem; */
            list-style-type: none;
            /* overflow: hidden; */
            /* background: ${props => props.theme.colorLight}; */
            

            img{
                height: 8rem;
                width: 8rem;
                border-radius: 50%;
            }
            &--text{
                display: flex;
                justify-content: center;
                padding: 1rem 1rem 3rem;
                color: ${props => props.theme.colorLight}
            }
        }
        &-item{
            list-style-type: none;
            padding: 1rem 2rem;
            width: 110%;
            border-radius: 2rem 0 0 2rem;
            cursor: pointer;
            transition: .3s ease-in-out .1s;
            &:hover{
                background: ${props => props.theme.colorLight};
                color: ${props => props.theme.colorPrimary}
            }
            &:not(:first-child){
                margin-top:1rem;
            }
        }
    }
    .toggleIcon{
        input{
                display: none;
            }
        input:checked ~ .sideNav__toggle-button .bar{
            background: ${props => props.theme.colorPrimary};
            border: red;
        }
        input:checked ~ .sideNav__toggle-button::before{
            transform: rotate(45deg) translate(1rem, .4rem);
           
        }
        input:checked ~ .sideNav__toggle-button::after{
           transform: rotate(135deg) translate(-1rem, .5rem);
        }
    }
    &__toggle-button{
            position: absolute;
            z-index: 100;
            top: 2rem;
            right: -2rem;
            height: 4.1rem;
            width: 5rem;
            border: none;
            color: ${props => props.theme.colorLight};
            background: ${props => props.theme.colorPrimary};
          
           
            .bar{
                position: absolute;
                z-index: 100;
                top: 1.8rem;
                right: .2rem;
                height: .3rem;
                width: 4rem;
                /* color: ${props => props.theme.colorLight}; */
                background: ${props => props.theme.colorLight};
                transition: .3s ease-in-out .2s;
            }

            &::after{
                content: " ";
                position: absolute;
                z-index: 100;
                top: 1.3rem;
                right: 2rem;
                height: 4rem;
                width: .3rem;
                transform: rotate(90deg);
                background: ${props => props.theme.colorLight};
                transition: .5s ease-in-out .2s;
            }
            &::before{
                content: "";
                position: absolute;
                z-index: 100;
                top: -1.4rem;
                right: 2rem;
                height: 4rem;
                width: .3rem;
                transform: rotate(90deg);
                background: ${props => props.theme.colorLight};
                transition: .5s ease-in-out .2s;
            }
            & input:checked ~ .bar{
                background: ${props => props.theme.colorPrimary};
                border: red;
            }
            .toggleIcon.sideNav__toggle-button>input:checked{
                background: ${props => props.theme.colorPrimary};
                border: red;
            }
        }

}

.dashboard{
    grid-column: 2/ -1;
    background: ${props => props.theme.colorLight};
    min-height: 100vh;
    min-width: 100%;
    padding: 2rem 3rem;
    display: grid;
    z-index: 30;
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


function Dashboard() {
    const [sideNavIsOpen, setSideNavIsOpen] = useState(true)
    const sideNavWidth = "28rem"
    const spring = useSpring({
        width: sideNavIsOpen ? sideNavWidth : "5rem"
    })
    const toggleSideNav = () => {
        setSideNavIsOpen(!sideNavIsOpen)
        // console.log(sideNavIsOpen);
        // this.state.sideNavIsOpen ? this.setState({sideNavWidth: "3rem", sideNavIsOpen: !this.state.sideNavIsOpen}) : 
        // this.setState({sideNavWidth: "20rem", sideNavIsOpen: !this.state.sideNavIsOpen})
    }
    return (
        <Container navWidth={sideNavWidth}>
            <animated.div style={{ width: spring.width }} className="sideNav">

                <ul className="sideNav__container">
                    <li className="sideNav__container-item-photo">
                        <img src={avatar1} alt="avatar preson" />
                        <p className="sideNav__container-item-photo--text">Nick@gmail.com</p>
                    </li>
                    <li className="sideNav__container-item">Home</li>
                    <li className="sideNav__container-item">Dashboard</li>
                    <li className="sideNav__container-item">Transction</li>
                    <li className="sideNav__container-item">Sell Bitcoin</li>
                    <li className="sideNav__container-item">Sell Gift Cart</li>
                    <li className="sideNav__container-item">Make Withdrawals</li>
                    <li className="sideNav__container-item">Message</li>
                    <li className="sideNav__container-item">Account Settings</li>
                </ul>
                <div className="toggleIcon">
                <input className="toggle" checked={sideNavIsOpen} onChange={() => null}  type="checkbox" name="check" id="toggleSideNav" />
                    <div htmlFor="toggleSideNav" className="sideNav__toggle-button" onClick={toggleSideNav}>
                        
                        <div className="bar"></div>
                    </div>
                </div>
                {/* {spring.width.interpolate(x => console.log(Math.floor(x * 100 / sideNavWidth)))} */}
            </animated.div>

            <div className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>
                <div className="dashboard__overView">
                    <div className="dashboard__overView-items">
                        <div className="dashboard__overView-items-stats">
                            <p className="dashboard__overView-items-stats--title">Total Views</p>
                            <p className="dashboard__overView-items-stats--digit">246K</p>
                            <p className="dashboard__overView-items-stats--rate">^20.8%</p>
                        </div>
                        <div className="dashboard__overView-items-icon">
                            <img src={barChart} alt="bar Chart" />
                        </div>
                    </div>
                    <div className="dashboard__overView-items">
                        <div className="dashboard__overView-items-stats">
                            <p className="dashboard__overView-items-stats--title">Total Views</p>
                            <p className="dashboard__overView-items-stats--digit">246K</p>
                            <p className="dashboard__overView-items-stats--rate">^20.8%</p>
                        </div>
                        <div className="dashboard__overView-items-icon">
                            <img src={barChart} alt="bar Chart" />
                        </div>
                    </div>
                    <div className="dashboard__overView-items">
                        <div className="dashboard__overView-items-stats">
                            <p className="dashboard__overView-items-stats--title">Total Views</p>
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
            </div>
        </Container>
    )
}

export default Dashboard
