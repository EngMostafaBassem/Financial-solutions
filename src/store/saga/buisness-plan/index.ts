import {all} from 'redux-saga/effects'
import { watchPostBusinessPlan } from './post'
export default function* watchBusinessPlan() {
    yield all([watchPostBusinessPlan()])
   
  }