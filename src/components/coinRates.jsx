import React from 'react'
import styled from 'styled-components'
import bitcoin from "../images/BTC.svg"
import amazon from "../images/AMAZON.svg"
import ETH from "../images/ETH.svg"
import steam from "../images/STEAM.svg"
import { connect } from 'react-redux'
import SingleCoinRates from '../pages/admin/rates/singleCoinRates'

const Container = styled.div`
    display: grid;
    grid-column: 2/10;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
    gap: 2rem 0rem;
    height: max-content;
    width: 100%;
    margin-top: 1rem;
    /* height: 20rem; */
    /* padding: 1rem 1rem; */

    .rate__container{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        justify-content: center;
        gap: 1rem 0rem;
        height: max-content;
        width: 100%;
        margin-top: 1rem;
        .header{
            grid-column: 1/-1;
            color: ${props => props.theme.colorPrimary};
            text-transform: uppercase;
            text-align: center;
            padding: 2rem 0;
            font-size: ${props => props.theme.font.large}; 
            font-weight: 900;
            position: relative; 
            width: 100%;
            &::before{
                content: "";
                display: inline-block;
                width: 7rem;
                vertical-align: middle;
                height: 1px;
                background: #04132945;
                margin-right: 1rem;
            }
            &::after{
                content: "";
                display: inline-block;
                width: 7rem;
                vertical-align: middle;
                height: 1px;
                background: #04132945;
                margin-left: 1rem;
            }
        }
    }
    .rate-card{
        display: grid;
        grid-template-columns: 5rem 1fr;
        align-self: center;
        justify-self: center;
        place-items: center;
        padding: 1rem 1rem;
        background: linear-gradient(45deg, ${props => props.theme.colorPrimary} 60%, rgb(96 106 120 / 98%));
        /* width: 25rem; */
        border-radius: .5rem;
        color: ${props => props.theme.colorDark};
        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
            -0.2rem -0.4rem 20px rgba(255,255,255, .3);

        img{
            justify-self: center;
            height: 5rem;
            width: 5rem;
        }
        &__text{
            padding: 0 1rem;
            justify-self: flex-start;
            text-transform: uppercase;
            font-size: ${props => props.theme.font.medium};
            color:  ${props => props.theme.colorWhite};
            &--subtext{
                margin-top: 0rem;
                display: flex;
                color:  ${props => props.theme.colorDark};
                font-weight: 600;
            }
            &--rate{
                margin: .5rem 0;
                font-size: ${props => props.theme.font.xlarge};
                font-weight: 900;
                color: ${props => props.theme.colorTertiary};
                &-symbol{
                    font-weight: 100;
                    color: ${props => props.theme.colorWhite}
                }
            }
        }
    }
    .rate-table{
        grid-column: 1/-1;
        width: 100%;
        display: grid;
    }
    
`
const CoinRates = ({ rates }) => {
    let { allRates = [] } = rates
    let amazonCard = allRates.find((item) => item.name === "amazon")
    let steamCard = allRates.find((item) => item.name === "steam card")

    // console.log(amazonCard, steamCard);


    return (
        <Container>
            {/* <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="300"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true" src={chat} width="100%" alt="chat"/>

            <img 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="300"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"  src={chat} width="100%" alt="chat"/> */}
            <div className="rate__container">
            <h5 className="header">
                Todays rates
            </h5>
                {
                    allRates.slice(0, 2).map((rate, index) => {
                        return (
                            <div key={index} className="rate-card"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay={125 * index}
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true">
                                <img src={index === 0? bitcoin : ETH  } alt="bitcoin" />
                                <p className="rate-card__text">

                                    {rate.name ? rate.name : "Bitcoin"}
                                    <br />
                                    {/* <span className="rate-card__text--subtext">We buy at:</span> */}

                                    <span className="rate-card__text--rate">N
                                        {rate.selling ? rate.selling : "0"}
                                        <span className="rate-card__text--rate-symbol"> /$ </span>
                                    </span>
                                </p>
                                {/* <CoinWidget ele="#mydiv" id="mydiv" link={`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrencies Prices</a>&nbsp;by Coinlib</div></div>`} /> */}
                            </div>
                        )
                    })
                }
                <div className="rate-card"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">

                    <img src={amazon} alt="bitcoin" />
                    <p className="rate-card__text">
                        {amazonCard?.name ? amazonCard?.name : "amazon"}
                        <br />
                        {/* <span className="rate-card__text--subtext">We buy at:</span> */}

                        <span className="rate-card__text--rate">N
                        {amazonCard?.attributes ? amazonCard?.attributes[0].rate : "0"}
                            <span className="rate-card__text--rate-symbol"> /$ </span>
                        </span>
                    </p>
                </div>
                <div className="rate-card"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="250"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <img src={steam} alt="bitcoin" />
                    <p className="rate-card__text">
                        {steamCard?.name ? steamCard?.name : "amazon"}

                        {/* <span className="rate-card__text--subtext">We buy at:</span> */}
                        <br />
                        <span className="rate-card__text--rate">N
                        {steamCard?.attributes ? steamCard?.attributes[0].rate : "0"}
                            <span className="rate-card__text--rate-symbol"> /$ </span>
                        </span>
                    </p>
                </div>
            </div>

            <div className="rate-table">
                {/* <Rates limit={4} gridPos="1/-1" /> */}
                <SingleCoinRates hidden />
            </div>
            {/* <div className="rate-card">
                <img src={chat} alt="bitcoin" /> */}
            {/* +<CoinWidget ele="#mydiv" id="mydiv" link={`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrencies Prices</a>&nbsp;by Coinlib</div></div>`} /> */}
            {/* </div> */}

            {/* <div>
            <img src={chat} alt=" amazon" /> */}
            {/* <CoinWidget ele="#mydiv2" id="mydiv2" link={`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=145&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrencies Prices</a>&nbsp;by Coinlib</div></div>`} /> */}

            {/* </div>
            <div>
                <img src={chat} alt=" amazon" /> */}

            {/* <CoinWidget ele="#mydiv3" id="mydiv3" link={`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=619&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrencies Prices</a>&nbsp;by Coinlib</div></div>`} /> */}

            {/* </div> */}

            {/* <iframe id="tradingview_dd6f1" 
                 src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD" 
                 style={{width: "100%", height: "100%", margin: "0 !important", padding: "0 !important"}} 
                 allowtransparency="true" scrolling="no" allowfullscreen="" frameborder="0"
                 title="coinrate"></iframe>

                <iframe id="tradingview_dd6f1" 
                 src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD" 
                 style={{width: "100%", height: "100%", margin: "0 !important", padding: "0 !important"}} 
                 allowtransparency="true" scrolling="no" allowfullscreen="" frameborder="0"
                 title="coinrate"></iframe> */}


        </Container>
    )
}

const mapStateToProps = ({ rates }) => ({
    rates: rates
})
export default connect(mapStateToProps)(CoinRates)
