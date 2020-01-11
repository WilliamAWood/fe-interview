import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer, {searchTermReducer} from "./productReducer";
import selectedCategoryReducer from "./selectedCategoryReducer";

export default combineReducers({
  allBills: productReducer,
})
