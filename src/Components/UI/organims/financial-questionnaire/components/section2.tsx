import { useFormikContext } from 'formik'
import React from 'react'
import FormInput from '../../../molecules/FormInput'
import FormRadio from '../../../molecules/FormRadio'
interface Section2Props{
    onBack:()=>void
    onNext:()=>void
}
const Section2:React.FC<Section2Props>=({onBack,onNext})=>{
    const {values}=useFormikContext<any>()
    return(
        <div>
        <ol>
            <li>Did you have an investment?</li>
            <ol type='a'>
                <li><FormRadio name='isInvestmentFound'    label='yes'/></li>
                <li><FormRadio name='isInvestmentFound'    label='no'/></li>     
            </ol>
            <hr></hr>
            <li>How much was the investment?</li>
            <FormInput name='investmentCost'  type='number' disabled={values['isInvestmentFound']==='no'?true:false} />
            <div className='d-flex justify-content-between mt-5'>
                <button className='btn btn-primary'  onClick={onBack}>Back</button>
                <button className='btn btn-primary'  onClick={onNext}>Next</button>
            </div>
        </ol>
     </div>
    )

}
export default Section2