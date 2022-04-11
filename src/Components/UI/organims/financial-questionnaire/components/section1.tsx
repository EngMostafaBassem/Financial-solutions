import React from 'react'
import FormRadio from '../../../molecules/FormRadio'
import FormInput from '../../../molecules/FormRadio'
import {useFormikContext} from 'formik'
interface Section1Props{
    onNext:()=>void
}
const Section1:React.FC<Section1Props>=({onNext})=>{
    const {values}=useFormikContext<any>()
    const handleCheckFields=()=>{
        return values['businessType']&&(values['businessType'])
    }
    return(
        <div>
           <ol>
               <li>Is your business model B2C or B2B or both?</li>
               <ol type='a'>
                   <li><FormRadio name='businessType'   label='B2C'/></li>
                   <li><FormRadio name='businessType'   label='B2B'/></li>
                   <li><FormRadio name='businessType'   label='both'/></li>
               </ol>
               <hr></hr>
               {
                   values['businessType']!=='B2C'&&(
                       <>
                        <li>Do you target all age brackets?</li>
                          <ol type='a'>
                           <li><FormInput name='isAgeBracketTargeted'  label='yes'/></li>
                           <li><FormInput name='isAgeBracketTargeted'  label='no'/></li>
                          </ol>
                           <hr></hr>
                       </>
                       
                   )
               }

               {
                   values['businessType']!='B2B'&&(
                       <>
                          <li>Do you target all industries?</li>
                           <ol type='a'>
                              <li><FormInput name='isAllIndustriesTargeted'  label='yes'/></li>
                              <li><FormInput name='isAllIndustriesTargeted'  label='no'/></li>
                          </ol>  
                       </>
                   )
               }
             
             
               <button className='mt-5 btn btn-primary'onClick={onNext} >Next</button>     

           </ol>
        </div>
    )

}
export default Section1