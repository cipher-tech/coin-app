import React from 'react'
import styled from 'styled-components'
// import { useState } from 'react'

const Container = styled.div`
    position: fixed;
    display: ${props => props.isActive ? "grid" : "none"};
    /* place-items: center; */
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #00000070;
    overflow: hidden;
    z-index: 180;
    
    .content{
        /* background: ${props => props.theme.colorLight}; */
        max-width: 70rem;
        width: 70rem;
        display: grid;
        width: 100%;

    }
`

function ModalComponent(props) {
    

    return (
        <Container isActive={props.isActive}>
            <div className="content">
                {props.children}
            </div>
        </Container>
    )
}

export default ModalComponent
