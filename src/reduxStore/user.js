import { handleActions } from "redux-actions";

const FETCH_USER_INFO = "user/FETCH_USER_INFO"

const initialState = {
    users: {},
}

export const fetchUserInfoActionCreator = (payload) => ({
    type: FETCH_USER_INFO,
    payload
})

export default handleActions({
    [FETCH_USER_INFO]: (state,action) =>({
        ...state,
        userInfo: action.payload
    })
}, initialState.users)