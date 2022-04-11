import React from 'react'
import {useFormikContext} from 'formik'
 interface SummaryProps{
    onBack:()=>void
 }
const Summary:React.FC<SummaryProps>=({onBack})=>{
    const {values}=useFormikContext<any>()
    return(
        <div>
            <ol>
               <li>Is your business model B2C or B2B or both? <span className='fw-bold' >{values['businessType']||'No Answer'}</span> </li>
               <hr/>
               <li>Do you target all age brackets? <span className='fw-bold' >{values['isAgeBracketTargeted']||'No Answer'}</span> </li>
               <hr/>
               <li>Do you target all industries? <span className='fw-bold' >{values['isAllIndustriesTargeted']||'No Answer'}</span> </li>
               <hr/>
               <li>Did you have an investment? <span className='fw-bold' >{values['isInvestmentFound']||'No Answer'}</span> </li>
               <hr/>
               <li>how much was the investment? <span className='fw-bold' >{values['investmentCost']||'No Answer'}</span> </li>
            
               <div className='d-flex justify-content-between mt-5'>
                <button className='btn btn-primary'  onClick={onBack}>Back</button>
                <button className='btn btn-primary' type='submit' >Submit</button>
            </div>
              
           </ol>
        </div>
    )

}
export default Summary
