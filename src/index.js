import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route, useHref} from 'react-router-dom'
import Singin from './components/Singin';
import Singup from './components/Singup';
import ProductZapatos from './components2/ProductZapatos';
import ProductAccesorio from './components2/ProductAccesorios';
import ProductGuantes from './components2/ProductGuantes';
import Home from './components/Home';
import Details from './components2/Details';
import Recomendador from './components3/Recomendador';
import Serie3 from './components3/Serie3';
import Pruebas from './components2/pruebas'
import Recomendados from './components3/Recomendados';
import Carousel from './components/Carousel';



ReactDOM.render(
  // // // <React.StrictMode>
  // // //   <App />
  // // // </React.StrictMode>,

<Router>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<App/>}/>
     <Route path="/SingUp" element={<Singup/>}/>
     <Route path="/SingIn" element={<Singin/>}/>
     <Route path="/Guantes" element={<ProductGuantes/>}/>
     <Route path="/Zapatos" element={<ProductZapatos/>}/> 
     <Route path="/Accesorios" element={<ProductAccesorio/>}/>
     <Route path="/Product/:id" element={<Details/>}>  </Route>
     <Route path = "/Recomendados/:rank" element={<Recomendados/>}/>      
     <Route path="/Recomendador" element={<Recomendador/>}>  </Route>
     <Route path="/Serie3" element={<Serie3/>}/>  
     <Route path="/pruebas" element={<Pruebas/>}/>  
     <Route path="/Serie3" element={<Serie3/>}/>
     <Route path="/Carousel" element={<Carousel/>}/>
       

   </Routes>
 </Router>, 


  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();