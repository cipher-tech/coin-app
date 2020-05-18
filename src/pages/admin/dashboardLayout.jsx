import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from "react-spring"
// import homeSvg from "../../images/homeSvg.svg"
// import {ReactComponent as Icon} from "../../images/homeSvg.svg"
import { ReactComponent as Home } from "../../images/svgIcons/home.svg"
import { ReactComponent as Bill } from "../../images/svgIcons/bill.svg"
import { ReactComponent as Bills } from "../../images/svgIcons/bills.svg"
import { ReactComponent as Box } from "../../images/svgIcons/box.svg"
import { ReactComponent as ChartBars } from "../../images/svgIcons/chartBars.svg"
import { ReactComponent as Coins } from "../../images/svgIcons/coins.svg"
import { ReactComponent as DollarSymbol } from "../../images/svgIcons/dollarSymbol.svg"
import { ReactComponent as Invoice } from "../../images/svgIcons/invoice.svg"
import { ReactComponent as Settings } from "../../images/svgIcons/settings.svg"
import avatar1 from "../../images/avatar1.jpg"
import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'

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
    display: grid;
    height: 100%;
    justify-items: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: ${props => props.sidenavIsOpen ? 200 : null};
    /* z-index: 1200; */
    background: ${props => props.theme.colorPrimary};
    &__container{
        display: grid;
        width: 100%;
        padding: 15vh 0rem 3rem;
        background: ${props => props.theme.colorPrimary};
       
        &-item-photo{
            text-align: center;
            list-style-type: none;
            opacity: ${props => props.sidenavIsOpen ? "1" : "0"};
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
            padding: 1rem 1rem;
            width: 100%;
            border-radius: 2rem 0 0 2rem;
            cursor: pointer;
            transition: .3s ease-in-out .1s;
            display: grid;
            fill: white;
            align-items: center;
            color: ${props => props.theme.colorLight};
            text-decoration: none;
            grid-template-columns: 8rem 1fr;
            &:hover{
                background: ${props => props.theme.colorSecondary};
                color: ${props => props.theme.colorlight}
            }
            &:not(:first-child){
                margin-top:1rem;
            }
             
            &--icon{
                display: grid;
                align-items: center;
                height: 1.9rem;
                width: 1.9rem;
                padding: 0rem .1rem;
                transition: all .3s ease-in-out .1s;
                justify-self: ${props => props.sidenavIsOpen ? "center" : "flex-start"};
                &-svg{
                    /* height: 3rem; */
                    /* transform: scale(1.1); */
                }
                &-svg path{
                    height: 100%;
                    fill: white;
                    color: white;
                }
            }
        }
    }
    .toggleIcon{
        background: ${props => props.theme.colorPrimary};
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
            z-index: 900;
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
                z-index: 600;
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
    border-radius: 2rem 0 0 2rem;
    /* &__title{   
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
                display: block;
                object-fit: cover;
                img{
                    width: 90%;
                    height: 100%;
                }
            }
        }
    }
    &__chart{
        grid-column: 1/-1;
        text-align: center;
        display: block;
        object-fit: cover;
        img{
            width: 90%;
            height: 100%;
        }
    }
    &__details{
        grid-column: 2/-1;
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        gap: 3rem;
        text-align: center;
        display: grid;
        object-fit: cover;
        img{
            width: 100%;
           
        }
    } */
}
`


function DashboardLayout(props) {
    const [sideNavIsOpen, setSideNavIsOpen] = useState(!true)
    const sideNavWidth = "28rem"
    const spring = useSpring({
        width: sideNavIsOpen ? sideNavWidth : "6rem"
    })
    const toggleSideNav = () => {
        setSideNavIsOpen(!sideNavIsOpen)
        // console.log(sideNavIsOpen);
        // this.state.sideNavIsOpen ? this.setState({sideNavWidth: "3rem", sideNavIsOpen: !this.state.sideNavIsOpen}) : 
        // this.setState({sideNavWidth: "20rem", sideNavIsOpen: !this.state.sideNavIsOpen})
    }
    const closeSideNav =() => {
        setSideNavIsOpen(false)
    }
    return (
        <Container navWidth={sideNavWidth} sidenavIsOpen={sideNavIsOpen}>
            <animated.div style={{ width: spring.width }} className="sideNav">

                <ul className="sideNav__container">
                    <li className="sideNav__container-item-photo">
                        <img src={avatar1} alt="avatar preson" />
                        <p className="sideNav__container-item-photo--text">Nick@gmail.com</p>
                    </li>
                    <li onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Home className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Home
                        </span>
                    </li>

                    <a onClick={closeSideNav} href={routes.admin.index} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <ChartBars className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Dashboard
                        </span>
                    </a>

                    <Link onClick={closeSideNav} to={routes.admin.transcation} className="sideNav__container-item">

                        <span className="sideNav__container-item--icon">
                            <Coins className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Transction
                        </span>
                    </Link>

                    <Link onClick={closeSideNav} to={routes.admin.sellBitcoin} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Bill className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Sell Bitcoin
                        </span>
                    </Link>

                    <Link onClick={closeSideNav} to={routes.admin.sellGiftcard} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Bills className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Sell Gift Cart
                        </span>
                    </Link>

                    <Link onClick={closeSideNav} to="/admin/rates" className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <DollarSymbol className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Rate
                        </span>
                    </Link>

                    <li onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Box className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Message
                        </span>
                    </li>

                    <li onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Invoice className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Tickets
                        </span>
                    </li>

                    <li onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Settings className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Account Settings
                        </span>
                    </li>
                </ul>
                <div className="toggleIcon">
                    <input className="toggle" checked={sideNavIsOpen} onChange={() => null} type="checkbox" name="check" id="toggleSideNav" />
                    <div htmlFor="toggleSideNav" className="sideNav__toggle-button" onClick={toggleSideNav}>
                        <div className="bar"></div>
                    </div>
                </div>
                {/* {spring.width.interpolate(x => console.log(Math.floor(x * 100 / sideNavWidth)))} */}
            </animated.div>
            {props.children}
        </Container>
    )
}

export default DashboardLayout
