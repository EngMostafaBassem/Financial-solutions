import {all} from 'redux-saga/effects'
import watchBusinessPlan from './buisness-plan'
export default function* rootSaga() {
    yield all([watchBusinessPlan()])
   
  }