import { handleActions } from "redux-actions";


const FETCH_ALL_HISTORY = "admin/FETCH_ALL_HISTORY";

const initialState = {
    history: [],
}

export const fetchAllHistoryActionCreator = (payload) => ({
    type: FETCH_ALL_HISTORY,
    payload
})

export default handleActions({
    [FETCH_ALL_HISTORY]: (state, action) => ({
        ...state,
        history: action.payload
    }),
}, initialState)