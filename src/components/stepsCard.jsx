import React from 'react'
import styled from 'styled-components'

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
            background: ${props => props.invert ? props.theme.colorPrimary : props.theme.colorSecondary};
            border-radius: 50%;
            color: ${props => props.theme.colorWhite}
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
        
`
const StepsCard = (props) => {
    // console.log(props.number);
    return (
        <Container handler={props.number} invert={props.invert}>
            <h4 className="steps-container-item--header">
                Sign Up... or not
            </h4>
            <p className="steps-container-item--text">
                You can sell bitcoin & giftcards to us without signing up. However,
                you need to sign up to buy bitcoin, and for faster transactions.
            </p>
        </Container>
    )
}

export default StepsCard
