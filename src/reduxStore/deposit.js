import { handleActions } from "redux-actions";


const FETCH_ALL_DEPOSITS = "admin/FETCH_ALL_DEPOSITS";

const initialState = {
    deposits: [],
}

export const fetchAllDepositActionCreator = (payload) => ({
    type: FETCH_ALL_DEPOSITS,
    payload
})

export default handleActions({
    [FETCH_ALL_DEPOSITS]: (state, action) => ({
        ...state,
        deposits: action.payload
    }),
}, initialState)