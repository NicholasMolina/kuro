import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import PreNavbar from '../components/PreNavbar';
import Serie11 from './Serie11';
import Serie22 from './Serie22';
import Serie33 from './Serie33';
import jugador1 from "./assets/futbol1.png"
import jugador2 from "./assets/futbol2.png"
import Footer from '../components/Footer';

import "./styles/Recomendador.css"


export default function RecomendadorZapatos (props){

      const [style, setStyle] = useState("invisible");

    //  const changeStyle = () => {
    //       if(page === 1){
    //           setStyle("visible") 
    //       } else {
    //          setStyle("invisible")
          
    //  };  
    // }

  const PreguntasZ = ["¿EN QUE TIPO DE CANCHAS JUEGAS?","¿QUE TIPO DE MATERIAL?","¿ESTÁS LISTO PARA SABER LO QUE NECESITAS?"];

  const[pagez, setPagez] = useState(0);

  const[suma,setSuma] = useState(0);
 
  const[ultimo1,setUltimo1] = useState(); 
  
  const[q1,setQ1] = useState();
  const[a1,setA1] = useState();
  const[q2,setQ2] = useState();
  const[a2,setA2] = useState();

//   const[ultimo2,setUltimo2] = useState();  

  const change = () => {
         if( pagez === 1){
            setStyle("invisible")
         }else{
            setStyle("visible")   
         } 
  }  

  const pagina33 = () => {
    setPagez(2);
  }

  const pagina22 = () => {
    setPagez(1);
  }
  
  const PageDisplay = () => {
    if(pagez === 0 ){
        return <Serie11  pagina22 = {pagina22} guardar = {guardar}  change={change}/>;
    } else if (pagez === 1) {
        return <Serie22   pagina33 = {pagina33} guardar2 = {guardar2} change={change} />;     
    } else {
        return <Serie33 suma={suma} q1 = {q1} a1 = {a1} q2 = {q2} a2 ={a2}/>;
    }
  };


// //  console.log(suma)

// //   const sumar = (y) => {
// //     setSuma((x) => x + y);
// //     if(pagez === 2){
// //         setUltimo1(y);
//     } 
//     // else{
//     //     setUltimo2(y);
//     // }

//   }

const guardar = (x,y) =>{
  setQ1(x);
  setA1(y);
}

const guardar2 = (x,y) =>{
  setQ2(x);
  setA2(y);
}

  const sumaAnterior = () =>{
    if( pagez === 1){
        setSuma(0)
    }else if(pagez === 2){
        setSuma((x) => x - ultimo1);
    }
    //  else {
    //      setSuma((x) => x - ultimo2);
    //  }    
  }

  return (    
  <div className='bg-[#2e0057]'>
    <PreNavbar/>
    <Navbar/>
    
    
        <div className='form-container flex justify-between bg-[#f6d3ff] m-2'>
        <img src={jugador1} className='recomendador hidden lg:flex'></img>
            <div className='flex flex-col justify-center pt-4 preguntasConteiner'>
                <div className='header'></div>
                    <div className=' flex-row'>
                        <h1 className='preguntas'>{PreguntasZ[pagez]}</h1>
                    </div>
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='footer'></div>
                    <button className={style}
                    // disabled = {page == 0} 
                    onClick={() => {
                        setPagez((currPage) => currPage - 1);sumaAnterior();change()
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

