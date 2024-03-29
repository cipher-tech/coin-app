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
                IsRegionSelected: false,
                auth: {
                    toggleLoginSignUp: this.toggleLoginSignUp,
                    showLogin: false,
                    showSignUp: false,
                },
            }
        }
    }
    async componentWillMount() {
        // console.log("layout",this.regions[JSON.parse(localStorage.region).id]);
        // console.log(this.regions[JSON.parse(localStorage?.region || false)?.id] || this.regions.nigeria);
        await this.setState((state, props) => {
            return {
                contextData: {
                    ...this.state.contextData,
                    country: JSON.parse(localStorage?.region || false) ? this.regions[JSON.parse(localStorage?.region || false).id] : this.regions.nigeria,
                    IsRegionSelected: true
                }

            }
        })
        // this.selectRegions("nigeria")
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

    toggleLoginSignUp = (name) => {
        if (name === "login") {
            this.setState((state, props) => {
                return {
                contextData: {
                    ...this.state.contextData,
                    auth: {
                        ...this.state.contextData.auth,
                        showLogin: true,
                        showSignUp: false,
                    }
                }
                }}
            )
        } else if (name === "signUp") {
            this.setState((state, props) => ({
                contextData: {
                    ...this.state.contextData,
                    auth: {
                        ...this.state.contextData.auth,
                        showLogin: false,
                        showSignUp: true,
                    }
                }
                })
            )
        }else if (name === "close"){
            this.setState((state, props) => ({
                contextData: {
                    ...this.state.contextData,
                    auth: {
                        ...this.state.contextData.auth,
                        showLogin: false,
                        showSignUp: false,
                    }
                }
                })
            )
        }
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