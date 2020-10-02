import React, { useState } from 'react'

import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Container = styled.div`
    grid-column: 1/-1;
    align-items: center;
    display: grid;
    /* height: 20rem; */
    align-self: center;
    /* justify-self: flex-start;
    place-self: flex-start; */
    .faq{
        display: grid;
        justify-self: flex-start;
        align-self: center;
        grid-column: 1/-1;
        width: 100%;
        background: ${props => props.theme.colorWhite};
       
        &__title{
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: space-between;
            padding: 2rem 3.5rem;
            background: #cdcff618;
            color: ${props => props.theme.colorPrimary};
            font-size: ${props => props.theme.font.large};

            &-icon{
                font-size: ${props => props.theme.font.xlarge};
                font-weight: bold;
            }
        }
        &__body{
            color: ${props => props.theme.colorDark};
            /* padding: 4rem 15%; */
            line-height: 1.5;
            font-size: ${props => props.theme.font.large};
            overflow: hidden;
            overflow-y: scroll;
            /* height: 0px; */
        }
    }
`
export default function Accodion(props) {
    const [toggleBody, setToggleBody] = useState(false)

    const spring = useSpring({
        height: toggleBody ? "250rem": "0px",
        padding: toggleBody ? '30px' : "0px",
    })
    return (
        <Container>
            <div className="faq">
                <p className="faq__title" onClick={() => setToggleBody(!toggleBody)}>
                    <span className="faq__title-text">
                        {props.title}
                    </span>
                    <span className="faq__title-icon">+</span>
                </p>
                <animated.div style={{height: spring.height, padding: spring.padding}} className="faq__body">
                    {props.text}
                </animated.div>
            </div>
        </Container>
    )
}
