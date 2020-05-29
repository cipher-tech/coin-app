import { handleActions } from "redux-actions";


const FETCH_ALL_RATES = "admin/FETCH_ALL_RATES";

const initialState = {
    rates: [],
}

export const fetchAllRatesActionCreator = (payload) => ({
    type: FETCH_ALL_RATES,
    payload
})

export default handleActions({
    [FETCH_ALL_RATES]: (state, action) => ({
        ...state,
        allRates: action.payload
    }),
}, initialState.rates)