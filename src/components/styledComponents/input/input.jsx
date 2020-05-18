import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    .form__icon{
        content: attr("icon");
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
        text-transform: capitalize;
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
    const [value, setvalue] = useState("")
    // const [password, setPassword] = useState("")
    return (
        <Container icon={props.icon}>
            <p className="form" name={props.name}>
                {props.icon ? <img className="form__icon" src={props.icon} alt="icon" /> : null}
                <input type="text" 
                onChange={(event) =>{  props.handleChange(props.name, event.target.value ); setvalue(event.target.value) } } 
                name={props.name}
                placeholder={props.placeHolder ? props.placeHolder : "Enter Value"} 
                className="form__input"
                value={value}
                 />
                 
                  {/* props.handleChange(event) */}
                 {/* value={props.value} */}
            </p>
        </Container>
    )
}
