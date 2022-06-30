
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Footer from './components/Footer';
import './components2/styles/carrito.css';
import React from 'react';
import Bot from './components3/Bot';
import Carousel from './components/Carousel';
import Nuevos from './components4/Nuevos';
import Video from './components4/Video';


const App = () => {
 
  return (
    
  <div className='bg-[#2e0057] w-full'>
    <PreNavbar/>
    <Navbar ></Navbar> 
    {/* <ImageSlider slides={SliderData}/> */}
    <Carousel></Carousel>
    <Bot></Bot>
    <Nuevos></Nuevos>
    <Video></Video>
          
        
      
    <Footer/>

     
   
    </div>
 
    )    
 
};
export default App;