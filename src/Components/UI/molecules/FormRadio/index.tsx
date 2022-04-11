import React, { useEffect, useRef } from 'react'
import {useFormikContext} from 'formik'
interface FormRadioProps{
    label?:string;
    name:string;
}
const FormChoice:React.FC<FormRadioProps>=({label,name})=>{
    const {handleBlur,setFieldValue,values}=useFormikContext<any>(); 
    const handleChange=({target:{checked}}:any)=>{
        if(checked)setFieldValue(name,label)   
    } 
    return(
       <>
       
         <input type='radio' name={name} onBlur={handleBlur}  onChange={handleChange} checked={label===values[name]?true:false} /> {label}     
        </> 
    )

}
export default  FormChoice