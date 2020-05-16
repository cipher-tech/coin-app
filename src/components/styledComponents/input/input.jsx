import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    .form__icon{
        content: attr("icon")/*  ${props => console.log(props.icon)} */;
        position: absolute;
        top: 2.5rem;
        left: 1rem;
        /* background: red; */
    }
  .form__input{  
        background: transparent;
        margin: 2rem 1rem;
        border: none;
        padding: 1rem 3rem;
        border-bottom: 1px solid ${props => props.theme.colorPrimary};
        width: 100%;
        line-height: 1rem;
        transition: all .1s ease .2s;
        position: relative;

/* inputs dont have after elements apperently */
        &::after{
            content: ${props => props.icon};
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: red;
        }
        &:focus{
            outline: none;
            border-bottom: 1px solid ${props => props.theme.colorSecondaryDark};
        }
        &::placeholder{
            margin-bottom: 9rem;
            display: block;
            color: ${props => props.theme.colorPrimary};
            opacity: .6;
        }
    }
`
export default function InputComponent(props) {
    return (
        <Container icon={props.icon}>
            <p className="form"> 
            {props.icon ? <img className="form__icon" src={props.icon} alt="icon"/> : null}
            <input type="text" placeholder={props.placeHolder ? props.placeHolder : "Enter Value"} className="form__input" />
            </p>
        </Container>
    )
}