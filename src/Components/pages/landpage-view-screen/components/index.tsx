import React from 'react'
import {ReactComponent as BuisnessImage} from '../../../../assets/images/business.svg';
import Heading from '../../../UI/atoms/Heading';
import {useNavigate} from 'react-router-dom'
const Landpage=()=>{
    const navigate=useNavigate()
    return(
        <div className='container'>
            <div className='row'>
               <div className='col-md-6 col-12'>
                  <div className='h-100 d-flex flex-column justify-content-around align-items-start'>
                   <Heading/>
                   <button className='btn btn-outline-primary' onClick={()=>navigate('questionnaire')}>Generate Business Plan</button>
                  </div>
               </div>
               <div className='col-md-6 col-12'>
                  <BuisnessImage width={600} height={600}/>
               </div>
            </div>
        </div>
    )

}
export default  Landpage