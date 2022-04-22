import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route, useHref} from 'react-router-dom'
import Singin from './components/Singin';
import Singup from './components/Singup'

ReactDOM.render(
  // // // <React.StrictMode>
  // // //   <App />
  // // // </React.StrictMode>,

<Router>
    <Routes>
   <Route path='/' element={<App/>}/>
     <Route path="/SingUp" element={<Singup/>}/>
     <Route path="/SingIn" element={<Singin/>}/>  

   </Routes>
 </Router>, 


  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

