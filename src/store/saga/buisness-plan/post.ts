import { call, put, takeLatest } from 'redux-saga/effects'
import BusinessPlanTypes from '../../redux/buisness-plan/action-types'
import {businessPlanPostRequestSuccess,businessPlanPostRequestError} from '../../redux/buisness-plan/actions'
import businessServcies from '../../../services/business-plan'
import { ToastContainer, toast } from 'react-toastify';
function* postBusinessPlan(action:any) {
    const {payload}=action
    try{
        yield call(businessServcies.postBusinessPlan,payload)
        yield put(businessPlanPostRequestSuccess())
        toast('Your answers are submitted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type:'success',
            theme:'light'
            });
    }
     catch(err:unknown){
         //here will handle the error
         if (err instanceof Error) {
            yield put(businessPlanPostRequestError(err.message))       
          }     
     }
  }
  
  export function* watchPostBusinessPlan() {
    yield takeLatest(BusinessPlanTypes.BUSINESS_PLAN_POST_REQUEST, postBusinessPlan)
  }