import { combineReducers } from "redux";
import users from './user'
import rates from "./rates"

export default combineReducers({
    users: users,
    rates: rates
})

export {fetchUserInfoActionCreator} from './user'
export {fetchAllRatesActionCreator} from "./rates"