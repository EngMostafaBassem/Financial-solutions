import React from 'react'
import { Formik } from 'formik';

interface FormProps{
    initialValues:any,
    validationSchema:any,
    onSubmit:(values:any)=>void
}
const Form:React.FC<FormProps>=({initialValues,validationSchema,onSubmit,children})=>{
    return(
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
        >
          {
            (({handleSubmit})=>(
                 <form onSubmit={handleSubmit}>
                    {children}
            </form>
            ))
        }     
        </Formik>
    )

}
export default  Form