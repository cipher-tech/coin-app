import React, {Component} from 'react'
import {
    ContextData
} from './contextData'
import {
    withRouter
} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.regions = {
            nigeria: {
                id: "nigeria",
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
                        name:  "UBA",
                        type: "bank",
                    }
                    
                ],
            }
        }

        this.state = {
            contextData: {
                country: null,
                changeRegion: this.selectRegions,
                IsRegionSelected: false
            }
        }
    }
    componentDidMount() {
        console.log("layout",this.regions[JSON.parse(localStorage.region).id]);
        
        this.setState((state, props) => {
            return {
                contextData: {
                    ...this.state.contextData,
                    country: JSON.parse(localStorage.region) ? this.regions[JSON.parse(localStorage.region).id] : "989898",
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
                    country: localStorage.region ? this.regions[name] : null,
                    IsRegionSelected: true
                }

            }
        })

        this.props.history.push('/admin')
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