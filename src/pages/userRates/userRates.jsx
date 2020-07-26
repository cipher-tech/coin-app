import React from 'react'
import styled from 'styled-components'

// import SingleCoinRates from "../admin/rates/singleCoinRates" //'../ rates/singleCoinRates'
import Rates from '../admin/rates/rates'

const Container = styled.div`
    grid-column: 2/10;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* gap: 10rem; */
    min-height: 100vh;
    width: 100%;

    /* align-items: center; */
    place-self: center;
`
const UserRates = () => {
    return (
        <Container>
            {/* <SingleCoinRates /> */}
            <Rates />
        </Container>
    )
}

export default UserRates
