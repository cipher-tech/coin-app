import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    background: forestgreen;
    width: 100%;
`
const Footer = () => {
    return (
        <Container>
            Coinrates
        </Container>
    )
}

export default Footer