import React from 'react'
import styled from 'styled-components'
import { Heading, SellBitcoinCard } from '..'
import bitcoin from "../../images/us-bitcoin.svg"
import giftcard from "../../images/amazon-card.png"

const Container = styled.div`
    display: grid;
    grid-column: 2/10;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    justify-content: center;
    gap: 1rem 3rem;

    height: max-content;
    width: 100%;
    margin: 3rem;
    color: ${props => props.theme.colorLight};

    .heading{
        grid-column: 1/-1;
    }

    .stats{
        /* grid-column: 1/-1; */
        align-self: flex-start;
        justify-self: center;
        width: 100%;
        display: grid;
        margin: 2rem 0 0 0 ;
        /* grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr)); */
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
            -0.2rem -0.4rem 20px rgba(255,255,255, .3);
        justify-items: center;
        border-radius: 1rem;
        overflow: hidden;
        &:nth-child(1) {
            justify-self: flex-end;
        }

        &-title{
            display: flex;
            flex-basis: 1;
            width: 100%;
            padding: 1.5rem 2rem;
            justify-content: center;
            background: ${props => props.theme.colorSecondary};
        }
        &-content{
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 1rem 1.5rem; 
            transition: all .3s .1s linear;
            &:hover{
                background: ${props => props.theme.colorSecondary};
            }

            &__item{
                height: 2rem;

                &--icon{
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    
    /* #left{
        justify-self: flex-end;
    } */
`
const SiteStats = () => {
    return (
        <Container>
            <div className="heading">
                <Heading title="Latest Stats" />
            </div>
            <div className="stats">
                <p className="stats-title">
                    Latest Deposits
                </p>

                <p className="stats-content">
                    <span className="stats-content__item">username</span>
                    <span className="stats-content__item">$2000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={bitcoin} alt=""/>
                    </span>
                </p>
                <p className="stats-content">
                    <span className="stats-content__item">john</span>
                    <span className="stats-content__item">$4000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={giftcard} alt=""/>
                    </span>
                </p>
                <p className="stats-content">
                    <span className="stats-content__item">john</span>
                    <span className="stats-content__item">$4000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={giftcard} alt=""/>
                    </span>
                </p>
                <p className="stats-content">
                    <span className="stats-content__item">john</span>
                    <span className="stats-content__item">$4000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={bitcoin} alt=""/>
                    </span>
                </p>
            </div>

            <div id="left" className="stats">
                <p className="stats-title">
                    Latest Withdrawls
                </p>
                <p className="stats-content">
                    <span className="stats-content__item">Ruth</span>
                    <span className="stats-content__item">$2000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={giftcard} alt=""/>
                    </span>
                </p>
                <p className="stats-content">
                    <span className="stats-content__item">John</span>
                    <span className="stats-content__item">$2000</span>
                    <span className="stats-content__item">
                        <img className="stats-content__item--icon" src={bitcoin} alt=""/>
                    </span>
                </p>
            </div>
            <SellBitcoinCard />
        
        </Container>
    )
}

export default SiteStats
