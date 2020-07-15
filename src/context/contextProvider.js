import React, { Component } from 'react'
import { ContextData } from './contextData'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.regions = {
            nigeria: {
                id: "nigeria",
                code: "NGN",
                currency: "naira",
                symbol: '₦',
                paymentMethods: [
                    {
                        name: "MTN MOBILE MONEY",
                        type: "digital"
                    },
                    {
                        name: "ACCESS BANK",
                        type: "bank",
                    },
                    {
                        name: "FIDELITY ACCOUNT",
                        type: "bank",
                    }
                ],
            },
            ghana: {
                id: "ghana",
                code: "GHS",
                currency: "cedi",
                symbol: '¢',
                paymentMethods: [
                    {
                        name: "MTN MOBILE MONEY",
                        type: "digital"
                    },
                    {
                        name: "ACCESS BANK",
                        type: "bank",
                    },
                    {
                        name: "FIDELITY ACCOUNT",
                        type: "bank",
                    }
                ],
            },
            cameroon: {
                id: "cameroon",
                code: "XAF",
                currency: "franc",
                symbol: '₣',
                paymentMethods: [
                    {
                        name: "MTN FLOAT",
                        type: "digital"
                    },
                    {
                        name: "AFRILAND BANK",
                        type: "bank",
                    },
                    {
                        name: "UBA",
                        type: "bank",
                    }

                ],
            }
        }

        this.state = {
            contextData: {
                country: this.regions[JSON.parse(localStorage?.region || false)?.id] || this.regions.nigeria,
                changeRegion: this.selectRegions,
                IsRegionSelected: false
            }
        }
    }
    componentDidMount() {
        // console.log("layout",this.regions[JSON.parse(localStorage.region).id]);

        this.setState((state, props) => {
            return {
                contextData: {
                    ...this.state.contextData,
                    country: JSON.parse(localStorage?.region || false) ? this.regions[JSON.parse(localStorage?.region || false).id] : "",
                    IsRegionSelected: true
                }

            }
        })
    }

    selectRegions = (name) => {
        localStorage.region = this.regions[name] ? JSON.stringify(this.regions[name]) : null
        this.setState((state, props) => {
            return {
                contextData: {
                    ...this.state.contextData,
                    country: localStorage?.region ? this.regions[name] : null,
                    IsRegionSelected: true
                }

            }
        })
        window.location.reload(false);
        // this.props.history.push(this.props.history.location.pathname)
    }

    render() {
        return (
            <>
                <ContextData.Provider value={this.state.contextData}>
                    {this.props.children}
                </ContextData.Provider>
            </>
        )
    }
}


export default withRouter(ContextProvider)