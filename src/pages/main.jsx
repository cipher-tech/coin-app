import React, { Component } from 'react'
import { Head, Rates, Feature, Discount, Step, Reach, Reviews, /* Foot */ /* PhotoGallery, */ /* Carusel */ } from '../components'
import { Ourreachs } from '../components/ourReach'
import Plans from '../components/plans/plasn'
// import { Galary } from '../components/photoGalary/galary'
// import SwiperCarusel from '../components/swiperCarusel'
// import Nav from '../components/nav'

export class Main extends Component {
    render() {
        return (
            <>
            {/* <Nav/> */}
              
                <Head/>
                <Rates/>
                <Feature/>
                {/* <Galary /> */}
                <Discount/>
                <Step/>
                <Plans />
                <Ourreachs/>
                <Reach/>
                {/* <PhotoGallery /> */}
                <Reviews/>
                {/* <Foot/> */}
                
            </>
        )
    }
}

export default Main
