import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import PreNavbar from '../components/PreNavbar';
import Serie1 from './Serie1';
import Serie2 from './Serie2';
import Serie3 from './Serie3';
import jugador1 from "./assets/futbol1.png"
import jugador2 from "./assets/futbol2.png"
import Footer from '../components/Footer';

import "./styles/Recomendador.css"


export default function Recomendador (props){

      const [style, setStyle] = useState("invisible");

    //  const changeStyle = () => {
    //       if(page === 1){
    //           setStyle("visible") 
    //       } else {
    //          setStyle("invisible")
          
    //  };  
    // }

  const Preguntas = ["¿QUÉ BUSCAS EN UN GUANTE?","¿PARA QUÉ LO VAS A UTILIZAR?","¿NECESITAS ALGUNA CARACTERÍSTICA ESPECIAL?"];

  const[page, setPage] = useState(0);

  const[suma,setSuma] = useState(0);
 
  const[ultimo1,setUltimo1] = useState();  

//   const[ultimo2,setUltimo2] = useState();  

  const change = () => {
         if( page === 1){
            setStyle("invisible")
         }else{
            setStyle("visible")   
         } 
  }  

  const pagina3 = () => {
    setPage(2);
  }

  const pagina2 = () => {
    setPage(1);
  }
  
  const PageDisplay = () => {
    if(page === 0 ){
        return <Serie1  pagina2 = {pagina2} sumar = {sumar}  change={change}/>;
    } else if (page === 1) {
        return <Serie2   pagina3 = {pagina3} sumar = {sumar} change={change} />;     
    } else {
        return <Serie3 sumar = {sumar} suma={suma}/>;
    }
  };


 console.log(suma)

  const sumar = (y) => {
    setSuma((x) => x + y);
    if(page === 2){
        setUltimo1(y);
    } 
    // else{
    //     setUltimo2(y);
    // }

  }

  const sumaAnterior = () =>{
    if( page === 1){
        setSuma(0)
    }else if(page === 2){
        setSuma((x) => x - ultimo1);
    }
    //  else {
    //      setSuma((x) => x - ultimo2);
    //  }    
  }

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
                    <button className={style}
                    // disabled = {page == 0} 
                    onClick={() => {
                        setPage((currPage) => currPage - 1);sumaAnterior();change()
                    }}>Paso Anterior</button>
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

