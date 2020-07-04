import React, {
    Component
} from 'react'
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
                paymentMethods: ["MTN MOBILE MONEY","ACCESS BANK","FIDELITY ACCOUNT"],
            },
            ghana: {
                id: "ghana",
                currency: "cedi",
                symbol: '¢',
                paymentMethods: ["MTN MOBILE MONEY","ACCESS BANK","FIDELITY ACCOUNT"],
            },
            cameroon: {
                id: "cameroon",
                currency: "franc",
                symbol: '₣',
                paymentMethods: ["MTN FLOAT", "AFRILAND BANK","UBA"],
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
        this.setState((state, props) => {
            return {
                contextData: {
                    ...this.state.contextData,
                    country: localStorage.region ? this.regions[localStorage.region] : null,
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
        return ( <
            >
            <
            ContextData.Provider value = {
                this.state.contextData
            } > {
                this.props.children
            } <
            /ContextData.Provider> < /
            >
        )
    }
}


export default withRouter(ContextProvider)