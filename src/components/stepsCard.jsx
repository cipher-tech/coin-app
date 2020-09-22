import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextData } from '../context/contextData'

const Container = styled.div`
    
    width: 100%;
    padding: 0rem 2.5rem;
    display: grid;
        &::before{
            content: '${props => props.handler}'  ;
            position: absolute;
            left: -3.3rem;
            display: grid;
            place-content: center;
            height: 6rem;
            width: 6rem;
            text-align: center;
            /* padding: 2rem 2.5rem; */
            background: ${props => props.invert ? props.theme.colorPrimary : props.theme.colorTertiary};
            border-radius: 50%;
            color: ${props => props.theme.colorWhite}
        }
        &:last-child::before{
            /* background: ${props => props.theme.colorSecondary}; */
            bottom: 0;
        }
        h4{
            display: grid;
            font-size: ${props => props.theme.font.xlarge};
            font-weight: 400;
            padding: 1rem 2rem;
        }

        p{
            font-size: ${props => props.theme.font.medium};
            padding: 1rem 2rem;
        }
        button{
            margin: 1rem 2rem;
            justify-self: start;
            padding: 1rem 4rem;
            border-radius: 1rem;
            cursor: pointer;
            background: ${props => props.theme.colorTertiary};
            outline: none;
            display: flex;
            border: none;
            font-size: ${props => props.theme.font.large};
            text-transform: capitalize;
            color: ${props => props.theme.colorWhite};
            &:focus{
                outline: none;
            }
        }
        
`
const StepsCard = (props) => {
    // console.log(props.number);
    const loginSignUpContext = useContext(ContextData)  
    return (
        <Container handler={props.number} invert={props.invert}>
            <h4 className="steps-container-item--header">
                {props.step ? props.step : "Sign Up... or not"}
            </h4>
            <p className="steps-container-item--text">
                {props.text}
            </p>
            { 
                props.number === "3" && <button onClick={ () => loginSignUpContext.auth.toggleLoginSignUp("signUp")}> Get Started</button>
            }
        </Container>
    )
}

export default StepsCard
