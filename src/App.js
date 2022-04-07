import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Inicio from './components/Singin';
import Carrusel from './components/Carrusel';


function App() {
  return (

    
    <div className="App">


    <PreNavbar/>
    <Navbar/>
    <Carrusel/>
    
    

    

    <h1 class=" w-full text-lime-600  underline cursor-pointer">
    Hello world!
  </h1>  
   
    </div>
  );
}

export default App;
