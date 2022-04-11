import BusinessTypes from './action-types'
export const businessPlanPostRequest=(data:any)=>({
    type:BusinessTypes.BUSINESS_PLAN_POST_REQUEST,
    payload:data
})
export const businessPlanPostRequestSuccess=()=>({
    type:BusinessTypes.BUSINESS_PLAN_POST_REQUEST_SUCCESS
})
export const businessPlanPostRequestError=(error:any)=>({
    type:BusinessTypes.BUSINESS_PLAN_POST_REQUEST_ERROR,
    payload:error
})