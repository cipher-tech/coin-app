import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* grid-column: 1 /-1; */
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.colorPrimary};

        h3{
            position: relative;
            display: flex;
            flex-wrap: wrap;
            /* grid-column: 1/-1; */
            flex-basis: 100%;
            place-content: center;
            font-weight: 500;
            font-size: 3rem;  
            padding: 2rem;

            span{
                color: ${props => props.theme.colorSecondary}
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                padding: .5rem;
                text-align: center;
                margin-bottom: 1rem;
            }
            &::before{
                content: " ";
                position: absolute;
                bottom: 1rem;
                width: 20%;
                height: .3rem;
                background: ${props => props.theme.colorPrimary};
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                   bottom: -1rem;
                }
            }
            &::after{
                content: " ";
                position: absolute;
                bottom: 0px;
                width: 10%;
                height: .3rem;
                background: ${props => props.theme.colorPrimary};
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                   bottom: -2rem ;
                }
            }
        }
        p{
            /* display: flex; */
            place-content: center;
            padding: 2rem 1rem;
            flex-basis: 60%;
            font-size: ${props => props.theme.font.medium};
            text-align: center;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
                flex-basis: 100%;
            }
            .span{
            color: ${props => props.theme.colorSecondary};
            
            .and{
            color: ${props => props.theme.colorPrimary}
            }
        }
        }
`

export default function Headertext(props) {
    return (
        <Container>
            <h3
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                {props.title}
                <span>
                    &nbsp; {props.coloredText}
                </span>
            </h3>
            <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                {props.text}
                <span className="span">
                    &nbsp; {props.bitcoin}
                </span>
                <span className="and">
                    {props.and}
                </span>
                <span className="span">{props.giftCard} &nbsp; </span>
                {props.end}
            </p>
        </Container>
    )
}
