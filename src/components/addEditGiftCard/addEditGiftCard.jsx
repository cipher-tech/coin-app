import React, { useReducer } from 'react'
import { useState } from 'react'

import envelope from "../../images/svgIcons/envelope.svg"
import { CardOptions } from '..';
import { FormValidator } from '../../formValidator'
import { StyledInput } from '../styledComponents';
import { ValidationMessage } from '../../validationMessage';

const AddEditGiftCard = ({createGiftCard}) => { 
    const initialState = {
		giftcardName: "",
		quantity: 0,
		options: [
			{
				country: "",
				class: "",
				from: "",
				to: "",
				rate: ""
			}
		]
	};

	const inputStateTypes = {
		updateOptions: "inputStateTypes/UPDATEOPTIONS",
		updateInput: "inputStateTypes/UPDATEINPUT",
		popOption: "inputStateTypes/POPOPTION"
	}
	function reducer(state, action) {
		switch (action.type) {
			case inputStateTypes.updateInput: {
				return ({
					...state,
					[action.payload.name]: action.payload.value
				});
			}
			case inputStateTypes.updateOptions:
				return {
					...state,
					options: action.payload.value
				};
			case inputStateTypes.popOption:
				return {
					...state,
					options: action.payload.value
				};
			default:
				throw new Error();
		}
	}
    const [inputState, dispatch] = useReducer(reducer, initialState)
	const [cardOptions, setCardOptions] = useState([<CardOptions id={0} />])

    const updateGiftcardNameValue = (name, value) => {
		const data = {
			type: inputStateTypes.updateInput,
			payload: {
				name: name,
				value: value
			}
		}
		dispatch(data)
	}
	const updateGiftcardOptions = (id, value) => {
		const options = [...inputState.options]
		options[id] = value
		const data = {
			type: inputStateTypes.updateOptions,
			payload: {
				id: id,
				value: options
			}
		}

		dispatch(data)
		// console.log("state >>>", options);

    }
    const addCardOption = () => {
		setCardOptions([...cardOptions, <CardOptions uniqueId={cardOptions.length} />])
	}
	const removeCardOption = () => {
		setCardOptions(cardOptions.slice(0, cardOptions.length - 1))

		const options = inputState.options.slice(0, inputState.options.length - 1)


		const data = {
			type: inputStateTypes.popOption,
			payload: {
				value: options
			}
		}
		dispatch(data)
	}
    return ( 
        <FormValidator buttonClass="rate-summit"
        classname=" rate-container "
        data={inputState} rules={{ giftcardName: { required: true, minlength: 3, } }}
        submit={createGiftCard}>
        <div className="rate-container-form">
            <StyledInput name="giftcardName"
                handleChange={updateGiftcardNameValue}
                value={inputState.name}
                placeHolder="Card Name" type="text" icon={envelope} />
            <ValidationMessage field="giftcardName" />
            <StyledInput name="quantity"
                handleChange={updateGiftcardNameValue}
                value={inputState.quantity}
                placeHolder="Enter Qty" type="number" icon={envelope} />
            <ValidationMessage field="quantity" />

        </div>

        {cardOptions.map((item, index) => (
            <CardOptions updateGiftcardOptions={updateGiftcardOptions} key={index} id={index} />
        ))}
        <p className="rate-container-form__actions">
            <button className="rate-container-form--addCard" onClick={() => addCardOption()} >
                Add +
            </button>
            <button className="rate-container-form--addCard" onClick={() => removeCardOption()} >
                remove -
            </button>
        </p>
        <p className="rate-isSugnedIn">
            Add new gift card.
        </p>
    </FormValidator>
    )
}

export default AddEditGiftCard
