import React from 'react'
import jugador1 from "./assets/futbol1.png"
import jugador2 from "./assets/futbol2.png"
import Recomendador from './Recomendador'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

function Bot (){

  // const[isPreguntasOpen, setisPreguntasOpen ] = useState(false);
  // const showPreguntas = () => {(isPreguntasOpen) ? setisPreguntasOpen(false) : setisPreguntasOpen(true)}
  
  // // function PreguntasOpen(){
  //   return(
      
  //   )
  //  }


  return (
    <div className='sm:tw-text-center items-center justify-center w-full flex'>
      <div className='w-full flex justify-center text-white m-5'>   
        <img src={jugador1} className='smallbot hidden lg:flex'></img>
          <div className='w-1/2  flex-col justify-center'>
            <div className=' flex flex-row justify-center'>          
              <text className=' flex-row w-full sm:text-center ' >¿NO SABES QUÉ GUANTES ELEGIR?</text> 
            </div>

            <div className='m-2 flex flex-row justify-around'>
              <text className=' w-full text-center'>Existen miles de guantes de portero en el mercado, pero
                      ¿cuál es el más adecuado para tí? 
                      Con este recomendador te ayudaremos a elegir los más acertados para tí.
              </text>
            </div>

            <div className='flex flex-row justify-center'>
              <div className='flex flex-row justify-around bg-[#f6d3ff] text-[#2e0057]  zoom border-solid border-2 border-[#2e0057] sm:w-full'>
                <button className='w-full'>
                  <a href='/Recomendador'>RECOMENDADOR DE GUANTES</a>       
                </button>
              </div>
               <div className='flex flex-row flex-wrap  justify-around bg-[#f6d3ff] text-[#2e0057] zoom border-solid border-2 border-[#2e0057] sm:w-full'>
                <button className='w-full'>
                  <a href='/RecomendadorZapatos'>RECOMENDADOR DE ZAPATOS</a>       
                </button>
              </div>
            </div>

           

          </div>
        <img src={jugador2} className='smallbot hidden lg:flex'></img>
       
      </div>
    </div> 
  )
}

export default Bot