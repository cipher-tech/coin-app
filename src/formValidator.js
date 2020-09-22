import React, {Component} from "react";
import {ValidateData} from "./validation";
import {ValidationContext} from "./validationContex";
import styled from "styled-components";
import Button from "./components/button/button";

const Container = styled.div`
    width: 100%;
   display: grid;
   justify-items: center;
   justify-self: center;
    .danger{
        color: ${props => props.theme.colorWhite};
        background: red !important;
    }
    /* .good{
        color: white;
        /* background: green !important; 
    } */
    .wrapper{
       width: 100%;
       display: grid;
       justify-items: center;
       justify-self: center;
    }
`
export class FormValidator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            dirty: {},
            formSubmitted: false,
            getMessagesForField: this.getMessagesForField
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            errors: ValidateData(props.data, props.rules)
        };
    }
    get formValid() {
        return Object.keys(this.state.errors).length === 0;
    }
    handleChange = (ev) => {
        let name = ev.target.name;
        this.setState(state => state.dirty[name] = true);
    }
    handleClick = (ev) => {
        this.setState({
            formSubmitted: true
        }, () => {
            if (this.formValid) {
                this.props.submit(this.props.data)
            }
        });
    }
    getButtonClasses() {
        return this.state.formSubmitted && !this.formValid ? " danger" : " good";
    }
    getMessagesForField = (field) => {
        return (this.state.formSubmitted || this.state.dirty[field]) ? this.state.errors[field] || [] : []
    }
    render() {
            return <Container className={this.props.classname}>
                    <ValidationContext.Provider value = {this.state}>
                    <div className={`btn wrapper ${this.props?.wrapperClass}`} onChange={this.handleChange}>
                        {this.props.children} 
                    </div>
                    </ValidationContext.Provider> 
                    {/* <div className={`text-center  `} >  */}
                    <Button className={` ${this.props.buttonClass} ${ this.getButtonClasses() }`} onClick={this.handleClick} 
                            disabled={this.state.formSubmitted && !this.formValid}>
                            {this.props.buttonText? this.props.buttonText : "Submit" }
                    </Button>
                        {/* <button className={` ${this.props.buttonClass} ${ this.getButtonClasses() }`} onClick={this.handleClick} 
                            disabled={this.state.formSubmitted && !this.formValid}> 
                            {this.props.buttonText? this.props.buttonText : "Submit" }
                        </button> */}
                    {/* </div>  */}
                </Container>
    }
}