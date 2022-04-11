import LandpageScreen from './Components/pages/landpage-view-screen';
import QuestionnaireScreen from './Components/pages/questionnaire-view-screen';
import Layout from './Components/templates/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/redux/store'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
     <Provider store={store}>
       <BrowserRouter>
       <Layout>
          <Routes>
            <Route path='/' element={<LandpageScreen/>}/>
            <Route path='/questionnaire' element={<QuestionnaireScreen/>}/>
          </Routes>      
        </Layout> 
        <ToastContainer />
      </BrowserRouter>

      </Provider>
       
      
     )  
  
}

export default App
