import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { ContextData } from '../../context/contextData'
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
    background: #000000e3;
    overflow: scroll;
    z-index: 2100;
    /* padding-top: 6rem; */
    
    .closeButton{
        position: absolute;
        top: 3rem;
        right: 3rem;
        cursor: pointer;
    }
    .content{
        /* background: ${props => props.theme.colorLight}; */
        /* max-width: 70rem; */
        /* width: 70rem; */
        display: grid;
        /* width: 100%; */

    }
`
function ModalComponent(props) {
    const loginSignUpContext = useContext(ContextData)
    const [isActive, setIsActive] = useState(props.isActive)
    // const loginSignUpContext = useContext(ContextData)
    useEffect(() => {
        setIsActive(props.isActive)
    }, [props.isActive])

    return (
        <Container isActive={isActive}>
        <span className="closeButton" onClick={() => {loginSignUpContext.auth.toggleLoginSignUp("close")}} role="img" aria-label="">
            ❌
        </span>
            <div className="content">
                {props.children}
            </div>
        </Container>
    )
}

export default ModalComponent
