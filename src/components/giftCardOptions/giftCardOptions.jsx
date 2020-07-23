import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import lock from "../../images/svgIcons/lock.svg"
import { StyledInput } from '../styledComponents'
import { ValidationMessage } from '../../validationMessage'

const Container = styled.fieldset`
    border: dashed 1px;
    padding: 1rem;
    width: max-content;
    .select{
        background: transparent;
        padding: .5rem 1rem;
        color: ${props => props.theme.colorDark};
        border-radius: .5rem;
        margin: 1rem .5rem;
        /* margin-bottom: 1rem; */
        option{
            color: ${props => props.theme.colorPrimary}
        }
        &:focus{
            outline: none;
        }
    }
    .smallInput{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(10rem,1fr));
        gap: 1rem;

        &--finish-btn{
            align-self: flex-end;
            padding: .5rem 1rem;
            display: flex;
            place-items: center;
            z-index: 200;
            border: none;
            text-align: center;
            justify-content: center;
            text-transform: capitalize;
            color: ${props => props.theme.colorWhite};
            font-size: ${props => props.theme.font.large};
            background: ${props => props.theme.colorPrimary};
            margin: 1rem;
            border-radius: .9rem;
            cursor: pointer;
            &:focus{
                outline: none;
            }
        }
    }
`
const GiftCardOptions = (props) => {
    const [selectOption, setSelectOption] = useState('')
    const [selectClass, setSelectClass] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [rate, setRate] = useState('')
    // const [name, setName] = useState('')
    const updateOptions = async (name,value) => {
        const data = {
            country: selectOption,
            class: selectClass,
            from: from,
            to: to,
            rate: rate
        }

        // console.log(data);
        props.updateGiftcardOptions(props.id, data)
    } 
    useEffect(() => {
        updateOptions()
        // eslint-disable-next-line
      }, [selectOption,selectClass, from, to, rate,]);

    const countryOptions = ["Germany", "UK", "USA", "Canada", "Japan",
        "Australia", "Finland", "Ireland", "Italy", "New Zealand", "Poland", "Spain", "Sweden", "Switzerland", "Euro"]

    const classOptions = ["Cash Receipt", "Debit Receipt", "No Receipt", "E-code", "Physical"]
    // const rules = {
    //     name: { required: true, minlength: 3, },

    // }
   
    return (
        <Container>
        {/* {console.log(props)} */}
            <legend>Card Options</legend>
            <p>
                <select className="select" name="country" value={selectOption} onChange={async(e) => {
                    
                    setSelectOption(e.target.value)
                    updateOptions(e.target.name, e.target.value )
                    }}>
                    <>
                        <option value="Select Country ">Select Country </option>
                        {countryOptions.map((item, index) => (
                            <option key={index} value={item.toLowerCase()} className="rate-container-form__select--option">
                                {item}
                            </option>
                        ))}
                    </>
                </select>

                <select className="select" name="class" value={selectClass} onChange={(e) => {
                    const value = e.target.value
                    const name = e.target.name
                    setSelectClass(value)
                    updateOptions(name, value )
                    }}>
                    <>
                        <option value="Select Class ">Select Class </option>
                        {classOptions.map((item, index) => (
                            <option key={index} value={item.toLowerCase()} className="rate-container-form__select--option">
                                {item}
                            </option>
                        ))}
                    </>
                </select>
            </p>
            <div className="smallInput">
                <span>
                    <StyledInput name="rangeFrom" updatedValue={setFrom}
                        // handleChange={updateOptions}
                         value={from}
                        placeHolder="Range(from)" type="number" icon={lock} />
                    <ValidationMessage field="type" />
                </span>
                <span>
                    <StyledInput name="rangeTo" updatedValue={setTo}
                        // handleChange={updateOptions}
                        value={to}
                        placeHolder="Range(to)" type="type" icon={lock} />
                    <ValidationMessage field="type" />
                </span>

                <span>
                    <StyledInput name="rate" updatedValue={setRate}
                        // handleChange={updateOptions}
                        value={rate}
                        placeHolder="Rate" type="number" icon={lock} />
                    <ValidationMessage field="type" />
                </span>
                
                {/* <button className="smallInput--finish-btn">
                    Done
                </button> */}
            </div>
        </Container>
    )
}

export default GiftCardOptions
