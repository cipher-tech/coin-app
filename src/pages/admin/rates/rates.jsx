import React from 'react'
import styled from 'styled-components'
import rateImage from "../../../images/rate.png"

const Container = styled.div`
    grid-column: 2/-1;
    display: grid;
    min-height: 100vh;
    min-width: 100%;
    place-items: center;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    .rate{
        grid: 1/-1;
        padding: 3rem;
        height: 78vh;

        img{
            height: 100%;
            width: 100%;        }

    }
`
function AdminRates() {
    return (
        <Container>
            <div className="rate">
                <img src={rateImage} alt="rate"/>
            </div>
        </Container>
    )
}

export default AdminRates
