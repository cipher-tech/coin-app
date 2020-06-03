import { combineReducers } from "redux";
import users from './user'
import rates from "./rates"
import deposit from "./deposit";
import widthdrawl from "./Widthdrawl"

export default combineReducers({
    users: users,
    rates: rates,
    deposits: deposit,
    widthdrawls: widthdrawl
})

export {fetchUserInfoActionCreator} from './user'
export {fetchAllRatesActionCreator} from "./rates"
export {fetchAllDepositActionCreator} from "./deposit"
export {fetchAllWidthdrawlActionCreator} from "./Widthdrawl"