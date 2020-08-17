import React, { useReducer, useEffect } from 'react'
import { useState } from 'react'

import envelope from "../../images/svgIcons/envelope.svg"
import { CardOptions } from '..';
import { FormValidator } from '../../formValidator'
import { StyledInput } from '../styledComponents';
import { ValidationMessage } from '../../validationMessage';

const EditGiftCard = ({ EditGiftCard, closeModal,cardSelectedForEdit}) => {
    const initialState = {
        giftcardName: "",
        quantity: 0,
        attributes: [
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
        popOption: "inputStateTypes/POPOPTION",
        initializeState: "nputStateTypes/INITIALIZESTSTE"
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
                   attributes: action.payload.value
                };
            case inputStateTypes.popOption:
                return {
                    ...state,
                   attributes: action.payload.value
                };
            case inputStateTypes.initializeState:
                return action.payload;
            
            default:
                throw new Error();
        }
    }
    const [inputState, dispatch] = useReducer(reducer, initialState)
    const [cardOptions, setCardOptions] = useState([])
    // const [editCardOptions, setEditCardOptions] = useState([])

    // console.log();
    useEffect(() => {
        setCardOptions(cardSelectedForEdit.attributes)
        dispatch({type: inputStateTypes.initializeState, payload: cardSelectedForEdit})
        // console.log(cardSelectedForEdit.attributes,);
        
    }, [cardSelectedForEdit,inputStateTypes.initializeState])

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
        const options = [...inputState.attributes]
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
        setCardOptions([...cardOptions, {class: "", country: "", from: "",to: "", rate:''}])
        updateGiftcardOptions(inputState.attributes.length, {class: "", country: "", from: "",to: "", rate:''} )
        // console.log(cardOptions.length);
        
    }
    const removeCardOption = () => {
        setCardOptions(cardOptions.slice(0, cardOptions.length - 1))

        const options = inputState.attributes.slice(0, inputState.attributes.length - 1)


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
                data={inputState} rules={{ name: { required: true, minlength: 3, } }}
                submit={EditGiftCard}>
                    <h3>Edit Giftcard</h3>
                <button className="rate-container-closeBtn" onClick={() => closeModal(false)|| null} >✖</button>
                <div className="rate-container-form">
                    <StyledInput name="name"
                        handleChange={updateGiftcardNameValue}
                        value={inputState.name}
                        label="name"
                        placeHolder={cardSelectedForEdit?.name}  type="text" icon={envelope} />
                    <ValidationMessage field="name" />
                    <StyledInput name="quantity"
                        handleChange={updateGiftcardNameValue}
                        label="quantity"
                        value={inputState.quantity}
                        placeHolder={cardSelectedForEdit?.quantity} type="number" icon={envelope} />
                    <ValidationMessage field="quantity" />

                </div>

                {cardOptions.map((item, index) => (
                    <CardOptions editing data={item} updateGiftcardOptions={updateGiftcardOptions} key={index} id={index} />
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

export default EditGiftCard
