import React from 'react'
import styled from 'styled-components'
// import chat from "../images/coinRate.svg"

const Container = styled.div`
    display: grid;
    grid-column: 2/10;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-content: center;
    gap: 1rem 2rem;
    width: 100%;
    margin-top: 1rem;
    /* height: 20rem; */
    /* padding: 1rem 1rem; */

    img, div{
        height: 30rem;
        width: 100%;
        object-fit: cover;
        margin: 1rem 3rem;
        /* margin-top: 3rem; */
        
        &:hover{
            transition: all .3s ease-in-out .1s !important ;
            transform: translateY(-2rem) scale(1) rotate(0deg) !important;
        }
    }

    /* background: whitesmoke; */
`
const CoinRates = () => {
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

            <div>
                <iframe id="tradingview_dd6f1"
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD"
                    style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
                    allowtransparency="true" scrolling="no" allowfullscreen="" frameborder="0"
                    title="coinrate"></iframe>
            </div>
            <div>
                <iframe id="tradingview_dd6f1"
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD"
                    style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
                    allowtransparency="true" scrolling="no" allowfullscreen="" frameborder="0"
                    title="coinrate"></iframe>
            </div>
            <div>
                <iframe id="tradingview_dd6f1"
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD"
                    style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
                    allowtransparency="true" scrolling="no" allowfullscreen="" frameborder="0"
                    title="coinrate"></iframe>
            </div>
            <div>
            </div>

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

            {/* <img 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="500"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-once="true" src={chat} width="100%" alt="chat"/> */}

        </Container>
    )
}

export default CoinRates
