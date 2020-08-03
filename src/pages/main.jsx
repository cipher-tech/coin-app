import React, { Component } from 'react'
import { Head, Rates, Feature, Discount, Step,/*  Reach ,*/ Reviews, /* Foot */ /* Carusel */ } from '../components'
import { Ourreachs } from '../components/ourReach'

export class Main extends Component {
    render() {
        return (
            <>
            {/* <Nav/> */}
              
                <Head/>
                <Rates/>
                <Feature/>
                <Discount/>
                <Step/>
                {/* <Plans /> */}
                <Ourreachs/>
                {/* <Reach/> */}
                <Reviews/>
                {/* <SiteStats/> */}

                {/* <Foot/> */}
                
            </>
        )
    }
}

export default Main
