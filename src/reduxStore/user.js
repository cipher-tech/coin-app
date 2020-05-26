import { handleActions } from "redux-actions";

const FETCH_USER_INFO = "user/FETCH_USER_INFO"
const FETCH_ALL_USERS = "user/FETCH_ALL_USERS"

const initialState = {
    users: {},
    allUsers: []
}

export const fetchUserInfoActionCreator = (payload) => ({
    type: FETCH_USER_INFO,
    payload
})

export const fetchAllUsersActionCreator = (payload) => ({
    type: FETCH_ALL_USERS,
    payload,
})

export default handleActions({
    [FETCH_USER_INFO]: (state,action) =>({
        ...state,
        userInfo: action.payload
    }),

    [FETCH_ALL_USERS]: (state,action) => ({
        ...state,
        allUsers: action.payload
    })
}, initialState.users)