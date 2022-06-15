import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import PreNavbar from '../components/PreNavbar';
import Serie1 from './Serie1';
import Serie2 from './Serie2';
import Serie3 from './Serie3';
import jugador1 from "./assets/futbol1.png"
import jugador2 from "./assets/futbol2.png"
import Footer from '../components/Footer';


export default function Recomendador (props){

    //  const [style, setStyle] = useState("invisible");

    // const changeStyle = () => {
    //      if(page === 0){
    //          setStyle("invisible") 
    //      } else{
    //          setStyle("visible")
    //      }
    // };  


  const Preguntas = ["¿QUÉ BUSCAS EN UN GUANTE?","¿PARA QUÉ LO VAS A UTILIZAR?","¿NECESITAS ALGUNA CARACTERÍSTICA ESPECIAL?"];

  const[page, setPage] = useState(0);

  const pagina3 = () => {
    setPage(2);
  }

  const pagina2 = () => {
    setPage(1);
  }
  
  const PageDisplay = () => {
    if(page === 0 ){
        return <Serie1 page = {page} pagina2 = {pagina2} />;
    } else if (page === 1) {
        return <Serie2  page = {page} pagina3 = {pagina3} />;     
    } else {
        return <Serie3/>;
    }
  };

  return (    
  <div className='form'>
    <PreNavbar/>
    <Navbar/>
    <div className='progressbar'></div>
    
        <div className='form-container flex justify-between'>
        <img src={jugador1} className='recomendador hidden lg:flex'></img>
            <div className='flex flex-col justify-center pt-4 preguntasConteiner'>
                <div className='header'></div>
                    <div className=' flex-row'>
                        <h1 className='preguntas'>{Preguntas[page]}</h1>
                    </div>
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='footer'></div>
                    <button 
                    disabled = {page == 0} 
                    onClick={() => {
                        setPage((currPage) => currPage - 1)
                    }}>Prev</button>
                    {/* <button            
                     disabled = {page == Preguntas.length - 1} 
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}>Next</button> */}
            </div>
        <img src={jugador2} className='recomendador hidden lg:flex'></img>    
        </div>
    <Footer/>
  </div>
  );
};

