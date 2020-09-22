import React from 'react'
import styled from 'styled-components'
import comingSoonImage from "../../images/comingSoon1080.jpg"
const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colorLight};

    div{
        height: 100%;
        width: 100%;
    }
    img{
        /* height: 100%; */
        width: 100%;
        object-fit: fill;
    }
`

const ComingSoon = () => {
    return (
        <Container>
            <div>
                <img src={comingSoonImage} alt="Coming soon" />
            </div>
        </Container>
    )
}

export default ComingSoon