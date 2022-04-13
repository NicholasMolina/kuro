import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Inicio from './components/Singin';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';


function App() {
  return (

    
    <div className="App">


    <PreNavbar/>
    <Navbar/> 
    <Carousel/>

    <ImageSlider slides={SliderData}/>
    
    

    

    <h1 class=" w-full text-lime-600  underline cursor-pointer">
    Hello world!
  </h1>  
   
    </div>
  );
}

export default App;
