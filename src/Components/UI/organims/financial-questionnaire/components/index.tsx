import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Form from '../../../molecules/Form'
import {intitalValues} from '../components/init'
import {validationSchema} from '../components/schema'
import Summary from './summary';
const steps = ['First Section', 'Second Section'];
const QuestionnaireForm=()=>{
    const [activeStep, setActiveStep] = React.useState(0);

    const handleSubmit=(values:any)=>{
       // here will dispatch the action
       
       console.log('values to be sumitted',values)
    }
    const handleNext = () => {    
      setActiveStep((prevActiveStep) => prevActiveStep + 1);  
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const FormHandler=(
     <div style={{width:'100%',paddingTop:'1.5rem'}}>
         <Form initialValues={intitalValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
           {activeStep===0&&<Section1  onNext={handleNext}/>}
           {activeStep===1&&<Section2  onBack={handleBack} onNext={handleNext}/>}
           {activeStep===2&&<Summary   onBack={handleBack} />}
         
         </Form> 
      </div> 
     )  
    return(
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft:'auto',
          marginRight:'auto',
          '& > :not(style)': {
            m: 1,
            width:900
          },
        }}
      >
        <Paper elevation={3} style={{padding:15}}>
        <Typography variant="h4" component="h4" style={{marginBottom:35,color:'#555'}}>Questionnaire</Typography>
        <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}   
      </Stepper>
         {FormHandler}
        </Paper>
       
      </Box>
    )

}
export default QuestionnaireForm