import { combineReducers } from "redux";
import users from './user'

export default combineReducers({
    users: users
})

export {fetchUserInfoActionCreator} from './user'