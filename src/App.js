import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Inicio from './components/Singup';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';



function App() {
  return (

    
    <div className="App">


    <PreNavbar/>
    <Navbar/> 
    <Carousel/>
    <ImageSlider slides={SliderData}/>
    <Footer/>
    
    

    

    
   
    </div>
  );
}

export default App;
