import React, {Component} from "react";
import {ValidationContext} from "./validationContex";
import styled, {css} from "styled-components";

const Container = styled.div`
    ${({theme}) =>
        css`
            font-size: ${theme.font.xsmall};
            color: red;
        `
    }
   
    /* background: orangered; */
`
export class ValidationMessage extends Component {
    static contextType = ValidationContext;
    render() {
        return this.context.getMessagesForField(this.props.field).map(err => 
        <Container className = "small bg-danger text-white mt-1 p-1"
            key = {err}> 
            {err}  
        </Container>
        )
    }
        
}