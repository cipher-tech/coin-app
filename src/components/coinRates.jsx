import React from 'react'
import styled from 'styled-components'
import chat from "../images/coinRate.svg"

const Container = styled.div`
    display: grid;
    grid-column: 2/10;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-content: center;
    gap: 1rem 0;
    width: 100%;
    /* height: 20rem; */
    /* padding: 1rem 1rem; */

    img{
        /* height: 20rem; */
        width: 100%;
        object-fit: cover;
        /* padding: 1rem */
        /* margin-top: 3rem; */
    }

    /* background: whitesmoke; */
`
const CoinRates = () => {
    return (
        <Container>
            <img src={chat} width="100%" alt="chat"/>
            <img src={chat} width="100%" alt="chat"/>
            <img src={chat} width="100%" alt="chat"/>
            
        </Container>
    )
}

export default CoinRates
