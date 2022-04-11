import React, { useEffect } from 'react'
import {useFormikContext} from 'formik'
interface FormInputProps{
    name:string;
    type:string;
    disabled?:boolean
}
const FormInput:React.FC<FormInputProps>=({name,type,disabled=false})=>{
    const {values, handleBlur,handleChange}=useFormikContext<any>();
    return(
       <>  
         <input  value={values[name]} type={type} name={name} onBlur={handleBlur} onChange={handleChange} disabled={disabled} />    
        </> 
    )

}
export default  FormInput