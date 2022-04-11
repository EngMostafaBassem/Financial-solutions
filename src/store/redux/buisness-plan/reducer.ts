import BusinessTypes from './action-types'
import {BusinessPlan} from '../../../type-dictionary/business-plan'

interface BusinessPlanReducerProps{
    businessPlan:BusinessPlan|{},
    isLoading:boolean,
    hasError:boolean
}
const INITAL_STATE:BusinessPlanReducerProps={
     businessPlan:{},
     isLoading:false,
     hasError:false
}

export const BusinessPlanReducer=(state=INITAL_STATE,action:any)=>{
    switch(action.type){
        case BusinessTypes.BUSINESS_PLAN_POST_REQUEST:
            return {...state,isLoading:true}
        case BusinessTypes.BUSINESS_PLAN_POST_REQUEST_SUCCESS:
            return {...state,isLoading:false}
        case BusinessTypes.BUSINESS_PLAN_POST_REQUEST_ERROR:
            return {...state,isLoading:false,hasError:true}
        case BusinessTypes.CLEAR_STORE:
            return {...INITAL_STATE} 
         default:
             return state   
    }
}