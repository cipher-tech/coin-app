import React, { Component } from 'react'
import { Head, Rates, Feature, Discount, Step, Reach, Reviews, Foot } from '../components'

export class Main extends Component {
    render() {
        return (
            <>
                <Head/>
                <Rates/>
                <Feature/>
                <Discount/>
                <Step/>
                <Reach/>
                <Reviews/>
                <Foot/>
                
            </>
        )
    }
}

export default Main
