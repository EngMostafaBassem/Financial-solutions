import React from 'react'
import FinanicalQuestionnaire from '../../../UI/organims/financial-questionnaire'
import {Link} from 'react-router-dom'
const Questionnaire=()=>{
    return(
        <div>
           <Link to="/">Back To Main</Link>
           <FinanicalQuestionnaire/>
        </div>
    )

}
export default Questionnaire