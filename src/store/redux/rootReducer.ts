import { combineReducers } from "redux";
import { BusinessPlanReducer } from "./buisness-plan/reducer";
export default combineReducers({
    buinessPlan:BusinessPlanReducer
})