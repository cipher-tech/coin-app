import React, { useState } from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import routes from '../../navigation/routes';
import logo from "../../images/brandLogo.jpg"
import { ReactComponent as MenuIcon } from "../../images/svgIcons/menu.svg"


const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    grid-template-rows: min-content;
    /* grid-template-columns: repeat(2, minmax(40rem, 1fr)); */
    /* height: auto; */
    background: ${props => props.theme.colorPrimary};
    /* width: ; */
    /* height: 90vh; */
    position: relative;
    .navbar-mobile{
        position: fixed;
        top: 0rem;
        right: 0rem;
        display: grid;
        align-items: center;
        place-items: center;
        padding: 2rem;
        z-index: 1200;
        display: none; 
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            display: grid; 
        }
        &__icon{
            display: grid;
            align-items: center;
            place-items: center;
            align-self: center;
            height: 4rem;
            width: 4rem;
            padding: 0rem .1rem;
            transition: all .3s ease-in-out .1s;
            z-index: 1300;
            cursor: pointer;
            justify-self: ${props => props.sidenavIsOpen ? "center" : "flex-start"};

            path{
                height: 100%;
                fill: white;
                color: white;
            }
        }
        &__overlay{
            content: "";
            position: fixed;
            top: 3rem;
            right: 3rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: linear-gradient(to bottom , ${props => props.theme.colorPrimary} 40% ,  ${props => props.theme.colorSecondary} ) ;
            /* transform: scale(0); */
        }
    }
    .navbar-mobile__list{
        position: fixed;
        top: 50%;
        /* left: -50%; */
        /* width: 25rem; */
        transform: translate(-50%, -50%);
        list-style: none;
        z-index: 1203;
        display: flex;
        flex-direction: column;
        &--item{
            text-transform: capitalize;
            padding: 1rem 5rem;
            margin: 1rem 0;
            cursor: pointer;
            text-align: center;
            background-image: linear-gradient(125deg,  transparent 50%,  ${props => props.theme.colorSecondary} 50% ) ;
            font-size: ${props => props.theme.font.xlarge};
            transition: all .4s ease-in-out .1s;
            background-size: 230%;
            color: ${props => props.theme.colorWhite};
            text-decoration: none;

            &:hover{
                background-position: 100%;
                transform: translateX(1rem);
            }
        }            

    }


    .navbar{  
        background: ${props => props.theme.colorPrimary};
        grid-column: 1/-1;
        display: grid;
        /* height: 6rem; */
        background: transparent;
        grid-template-columns: 1fr 1fr max-content;
        z-index: 1000;

        &-logo {
            justify-items: flex-start;
            height: 5rem;
            width: 5rem;
            margin: 1rem 2rem;
            border-radius: 50%;
            overflow: hidden;

            &--img{
                height: 100%;
                width: 100%;
                object-fit: fill;
            }
        }

        &-list{
            display: flex;
            justify-content: space-around;
            justify-self: flex-end;
            align-content: center;
            align-self: center;
            width: 70%;
            padding-right: 4rem; 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                display: none; 
            }

            &-item , a{
                display: flex;
                position: relative;
                justify-content: center;
                text-align: center;
                padding: 1rem 1rem;
                list-style-type: none;
                height: 100%;
                width: 100%;
                color: ${props => props.theme.colorWhite};
                text-decoration: none;
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                    font-size: ${props => props.theme.font.large}
                }
                &::before{
                    display: flex;
                    content: " ";
                    justify-content: center;
                    position: absolute;
                    bottom: .2rem;
                    width: 0%;
                    height: .2rem;
                    transition: all .3s ease-in;
                    background: ${props => props.theme.colorSecondary};
                }

                &:hover::before{
                    width: 65%;
                }
            }
        }
       
    }
`


const NavbarComponent = (props) => {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true)
    const toggleMobileNav = () => {
        setMobileNavIsOpen(!mobileNavIsOpen)
    }
    // const closeMobileNav = () => {
    //     setMobileNavIsOpen(false)
    // }
    const spring = useSpring({
        transform: mobileNavIsOpen ? "scale(170)" : "scale(0)"
    })
    const springMove = useSpring({
        left: mobileNavIsOpen ? "50%;" : "-50%"
    })
    return (!props.show ?
        <Container>

            <div className="navbar-mobile">
                <MenuIcon className="navbar-mobile__icon" onClick={toggleMobileNav} />
                <animated.div style={{ transform: spring.transform }} className="navbar-mobile__overlay"></animated.div>
            </div>
            <animated.ul style={{ left: springMove.left }} onClick={toggleMobileNav} className="navbar-mobile__list">
                <Link to={routes.public.home} className="navbar-mobile__list--item">home</Link>
                <Link to={routes.public.buy_sell} className="navbar-mobile__list--item">buy/sell</Link>
                <Link to={routes.public.rates} className="navbar-mobile__list--item">Rates</Link>
                <Link to={routes.public.faq} className="navbar-mobile__list--item">faq</Link>
                <Link to={routes.public.login} className="navbar-mobile__list--item">Login</Link>
                <Link to={routes.public.about} className="navbar-mobile__list--item">AboutUs</Link>
            </animated.ul>
            <div className="navbar"
                data-aos="fade-right"
                data-aos-offset="00"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                <div className="navbar-logo">
                    <img src={logo} alt="" className="navbar-logo--img" />
                </div>
                <ul className="navbar-list">
                    <Link to={routes.public.home} className="navbar-list-item">Home</Link>
                    <Link to={routes.public.buy_sell} className="navbar-list-item">Buy/Sell</Link>
                    <Link to={routes.public.rates} className="navbar-list-item">Rates</Link>
                    <Link to={routes.public.faq} className="navbar-list-item">FAQs</Link>
                    <Link to={routes.public.login} className="navbar-list-item">Login</Link>
                    <Link to={routes.public.about} className="navbar-list-item">AboutUs</Link>
                </ul>

            </div>
        </Container> : null
    )
}

export default NavbarComponent
