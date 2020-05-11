import React, { Component } from 'react'
import postscribe from 'postscribe';
export default class CoinCalculator extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = !true;
        script.src = "https://www.cryptonator.com/ui/js/widget/calc_widget.js";
        this.div.appendChild(script);
        // this.el = postscribe('#mydiv','<script src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script>')
        this.el = postscribe('#mydiv',`
        <script type="text/javascript">
        crypt_calc_background_color = "#304D71";crypt_calc_transperency = false;crypt_calc_border_width = 5;crypt_calc_font_family = "Sans-Serif";
        </script><script type="text/javascript" src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script>`)
       
        // <script src="https://cdn.jsdelivr.net/gh/coinponent/coinponent@1.2.6/dist/coinponent.js"></script>
        // <coin-ponent dark-mode border-radius="10"></coin-ponent
    }
    render() {
        return (
            <div id="mydiv" className="App" ref={el => (this.div = el)}>
                {this.el}
                {/* Script is inserted here */}
            </div>
        )
    }
}
/* 
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank"><span class="blue-text">Cryptocurrency Markets</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
  {
  "width": "100%",
  "height": "100%",
  "defaultColumn": "overview",
  "screener_type": "crypto_mkt",
  "displayCurrency": "BTC",
  "colorTheme": "dark",
  "locale": "en",
  "isTransparent": false
}
  </script>
</div>
<!-- TradingView Widget END --> */