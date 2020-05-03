import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-column: 1/-1;
    background: rebeccapurple;
    width: 100%;
`
const Review = () => {
    return (
        <Container>
            Coinrates
        </Container>
    )
}

export default Review
