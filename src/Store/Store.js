import { createStore, combineReducers } from "redux"
import modelReducer from "./Reducers/modelReducer"
import expensesReducer from "./Reducers/expensesReducer"
const rootReducer = combineReducers({
    modelReducer,
    expensesReducer
})
const store = createStore(rootReducer);
export default store;