
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';
import './components2/styles/carrito.css';
import data from './components2/data';
import { useState } from 'react';
import Bot from './components/Bot';



function App() {
 
  
  

  return (

    <div className='bg-[#2e0057]'>
      <PreNavbar/>
      <Navbar ></Navbar> 
      <Carousel/>
      <ImageSlider slides={SliderData}/>
      <div className=''>
      <Bot></Bot>
      </div>
     <Footer/>
         
 
      

    </div>
    
  );
}

export default App;
