import React, { Component } from 'react'
import { Head, Rates, Feature, /* Discount, */ Step,/*  Reach ,*/ Reviews, /* Foot */ /* Carusel */ } from '../components'
// import { Ourreachs } from '../components/ourReach'

export class Main extends Component {
    render() {
        // const IsComingSoon = !false
        return (
            <>
                <Head/>
                <Rates/>
                <Feature/>
                {/* <Discount/> */}
                <Step/>
                {/* <Ourreachs/> */}
                <Reviews/>
                
            </>
        )
    }
}

export default Main
