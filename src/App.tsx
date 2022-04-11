import React, { useEffect } from 'react';
import LandpageScreen from './Components/pages/landpage-view-screen';
import QuestionnaireScreen from './Components/pages/questionnaire-view-screen';
import Layout from './Components/templates/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
       <Layout>
          <Routes>
            <Route path='/' element={<LandpageScreen/>}/>
            <Route path='/questionnaire' element={<QuestionnaireScreen/>}/>
          </Routes>      
        </Layout> 
      </BrowserRouter>
       
      
     )  
  
}

export default App
