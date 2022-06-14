
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';
import './components2/styles/carrito.css';
import React from 'react';
import Recomendador from './components3/Recomendador';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Bot from './components3/Bot';



const App = () => {
 
  return (
    
  <div className='bg-[#2e0057]'>
    <PreNavbar/>
    <Navbar ></Navbar> 
    <Carousel/>
    <ImageSlider slides={SliderData}/>
    <Bot></Bot>
          
        
      
    <Footer/>
  
  

    
     
   
    </div>
 
    )    
 
};
export default App;