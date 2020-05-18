import React, { Component } from 'react'
import postscribe from 'postscribe';
export default class CoinWidget extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = !true;
        script.src = "https://www.cryptonator.com/ui/js/widget/calc_widget.js";
        this.div.appendChild(script);
        // this.el = postscribe('#mydiv','<script src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script>')
        // this.el = postscribe('#mydiv',`
        // <script type="text/javascript">
        // crypt_calc_background_color = "#304D71";crypt_calc_transperency = false;crypt_calc_border_width = 5;crypt_calc_font_family = "Sans-Serif";
        // </script><script type="text/javascript" src="https://www.cryptonator.com/ui/js/widget/calc_widget.js"></script>`)
        this.el = postscribe(this.props.ele,this.props.link)
        // console.log(this.props.link);
       
    }
    render() {
        return (
            <div style={{width: "100%"}} id={this.props.id} className="App" ref={el => (this.div = el)}>
                {this.el}
                {/* Script is inserted here */}
            </div>
        )
    }
}
