
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Footer from './components/Footer';
import './components2/styles/carrito.css';
import React from 'react';
import Bot from './components3/Bot';
import Carousel from './components/Carousel';


const App = () => {
 
  return (
    
  <div className='bg-[#2e0057]'>
    <PreNavbar/>
    <Navbar ></Navbar> 
    {/* <ImageSlider slides={SliderData}/> */}
    <Carousel></Carousel>
    <Bot></Bot>
          
        
      
    <Footer/>

     
   
    </div>
 
    )    
 
};
export default App;