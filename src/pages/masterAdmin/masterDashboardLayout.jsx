import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from "react-spring"
import { ReactComponent as Home } from "../../images/svgIcons/home.svg"
// import { ReactComponent as Bill } from "../../images/svgIcons/bill.svg"
// import { ReactComponent as Bills } from "../../images/svgIcons/bills.svg"
// import { ReactComponent as Box } from "../../images/svgIcons/box.svg"
import { ReactComponent as ChartBars } from "../../images/svgIcons/chartBars.svg"
import { ReactComponent as Coins } from "../../images/svgIcons/coins.svg"
import { ReactComponent as DollarSymbol } from "../../images/svgIcons/dollarSymbol.svg"
import { ReactComponent as Cog } from "../../images/svgIcons/cog.svg"
import { ReactComponent as PowerSwitch } from "../../images/svgIcons/power-switch.svg"
import { ReactComponent as Smile } from "../../images/svgIcons/smile.svg"
import avatar1 from "../../images/avatar1.jpg"
import { Link, withRouter } from 'react-router-dom'
import routes from '../../navigation/routes'
import useIsMasterAdmin from '../../components/hooks/useIsMasterAdmin'
import logOut from '../../components/hooks/logOut'
import { Storage } from '../../components'

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
        padding: 3vh 0rem 3rem;
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

.dashboard__container{
    grid-column: 2/ -1;
    background: ${props => props.theme.colorLight};
    min-height: 100vh;
    min-width: 100%;
    padding: 0;
    display: grid;
    grid-template-rows: 5rem 1fr;
    z-index: 0;
    border-radius: 2rem 0 0 2rem;
    min-height: 100%;
    .title_nav{
        background: ${props => props.theme.colorWhite};
        grid-column: 1/-1;
        color: ${props => props.theme.colorDark};
        padding: .5rem 5rem;
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.font.large};
        justify-content: space-between;
        z-index:40;
        box-shadow: .1rem .2rem 30px rgba(0,0,0, .3);
        &--name{
            text-transform: capitalize;
        }
        &--icons{
            display: flex;
            padding: 0;
            .indicator{
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                    background: ${props => props.status ? props.theme.colorSuccess : props.theme.colorError};
                    top: -.4rem;
                    right: .4rem;
                }
            }
            &-item{
                position: relative;
                margin: 0 1.2rem;
                cursor: pointer;
            }
            &-item path{
                fill: ${props => props.theme.colorDark};
            }
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
    
}
`

function MasterDashboardLayout(props) {
    useIsMasterAdmin(props.history);
    const name =  Storage.get("userInfo")?.user?.first_name || null
    const status =  Storage.get("userInfo")?.user?.status || null
    const email =  Storage.get("userInfo") ?  Storage.get("userInfo")?.user?.email : null

    const [sideNavIsOpen, setSideNavIsOpen] = useState(!true)
    const [userStatus] = useState(status === "verified")
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
    const closeSideNav = () => {
        setSideNavIsOpen(false)
    }
    return (
        <Container navWidth={sideNavWidth} status={userStatus} sidenavIsOpen={sideNavIsOpen}>
            <animated.div style={{ width: spring.width }} className="sideNav">

                <ul className="sideNav__container">
                    <li className="sideNav__container-item-photo">
                        <img src={avatar1} alt="avatar person" />
                        <p className="sideNav__container-item-photo--text">
                            {name} <br />
                            {email}
                        </p>
                    </li>
                    <a onClick={closeSideNav} href={routes.masterAdmin.index} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Home className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Home
                        </span>
                    </a>

                    <a onClick={closeSideNav} href={routes.masterAdmin.index} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <ChartBars className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Dashboard
                        </span>
                    </a>

                    <a onClick={closeSideNav} href={routes.masterAdmin.users} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <ChartBars className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            View Users
                        </span>
                    </a>

                    <Link onClick={closeSideNav} to={routes.masterAdmin.transcation} className="sideNav__container-item">

                        <span className="sideNav__container-item--icon">
                            <Coins className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Transaction
                        </span>
                    </Link>
                    <Link onClick={closeSideNav} to={routes.masterAdmin.orders} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Coins className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Buy/Sell
                        </span>
                    </Link>

                    {/* <Link onClick={closeSideNav} to={routes.masterAdmin.sellBitcoin} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Bill className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Sell Bitcoin
                        </span>
                    </Link>

                    <Link onClick={closeSideNav} to={routes.masterAdmin.sellGiftcard} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <Bills className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Sell Gift Cart
                        </span>
                    </Link> */}

                    <Link onClick={closeSideNav} to={routes.masterAdmin.rates} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <DollarSymbol className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Rate
                        </span>
                    </Link>
                    <Link onClick={closeSideNav} to={routes.masterAdmin.verify} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <DollarSymbol className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Verify
                        </span>
                    </Link>

                    <Link to={routes.masterAdmin.deposit} onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <DollarSymbol className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Deposit Request
                        </span>
                    </Link>

                    <Link to={routes.masterAdmin.widthdrawl} onClick={closeSideNav} className="sideNav__container-item">
                        <span className="sideNav__container-item--icon">
                            <DollarSymbol className="sideNav__container-item--icon-svg" />
                        </span>
                        <span className="sideNav__container-item--text">
                            Widthdrawl Request
                        </span>
                    </Link>

                </ul>
                <div className="toggleIcon">
                    <input className="toggle" checked={sideNavIsOpen} onChange={() => null} type="checkbox" name="check" id="toggleSideNav" />
                    <div htmlFor="toggleSideNav" className="sideNav__toggle-button" onClick={toggleSideNav}>
                        <div className="bar"></div>
                    </div>
                </div>
                {/* {spring.width.interpolate(x => console.log(Math.floor(x * 100 / sideNavWidth)))} */}
            </animated.div>
            <div className="dashboard__container">
                <div className="title_nav">
                    <span className="title_nav--name">
                        {props.match.params.path ? props.match.params.path.replace("_", " ") : "admin"}

                    </span>
                    <p className="title_nav--icons">
                        <Link to={routes.admin.updateInfo} className="">
                            <Cog className="title_nav--icons-item" />
                        </Link>
                        <span title={status === "verified" ? "Account verified" : "Account Unverified"} className="indicator">
                            <Smile className="title_nav--icons-item" />
                        </span>

                        <span title="logout" className="">
                            <PowerSwitch onClick={() => logOut(props.history)} className="title_nav--icons-item" />
                        </span>
                    </p>
                </div>
                {props.children}
            </div>
        </Container>
    )
}

export default withRouter(MasterDashboardLayout)
