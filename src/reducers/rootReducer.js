import { combineReducers } from 'redux'
import allBillsReducer from "./allBillsReducer";

export default combineReducers({
  allBills: allBillsReducer,
})
