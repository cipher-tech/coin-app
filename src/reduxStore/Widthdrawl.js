import { handleActions } from "redux-actions";


const FETCH_ALL_WIDTHDRAWL = "admin/FETCH_ALL_WIDTHDRAWL";

const initialState = {
    widthdrawls: [],
}

export const fetchAllWidthdrawlActionCreator = (payload) => ({
    type: FETCH_ALL_WIDTHDRAWL,
    payload
})

export default handleActions({
    [FETCH_ALL_WIDTHDRAWL]: (state, action) => ({
        ...state,
        widthdrawls: action.payload
    }),
}, initialState)