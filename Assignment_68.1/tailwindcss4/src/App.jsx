
import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ForgetPage from './ForgetPage.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SigupPage' element={<Signup />} />
        <Route path='/Forgot' element={<ForgetPage />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
};

export default App;
