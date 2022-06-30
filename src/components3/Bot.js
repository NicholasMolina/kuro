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
     <div className=''>
     <div className='flex justify-between text-white m-5'>   
             <img src={jugador1} className='smallbot hidden lg:flex'></img>
             <div className='w-1/2  flex-col justify-center'>
                 <div className=' flex flex-row justify-center'>          
                   <text className=' flex-row ' >¿NO SABES QUÉ GUANTES ELEGIR?</text> 
                 </div>
                 <div className='m-2 flex flex-row justify-around'>
                   <text className=' w-1/2'>Existen miles de guantes de portero en el mercado, pero
                      ¿cuál es el más adecuado para tí? 
                      Con este recomendador te ayudaremos a elegir los más acertados para tí.
                   </text>
                 </div>  
               {/*  <div className='pt-4'>
                   <Link to = {'/Serie'}>
                <button ></button>
                  </Link>
                </div>             
                
                 {(isPreguntasOpen) ? PreguntasOpen() : ""}  */}<div className='flex flex-row justify-center'>
                <div className='flex flex-row justify-around bg-[#f6d3ff] text-[#2e0057] w-1/2 zoom'>
                  <button >
                    <a href='/Recomendador'>RECOMENDADOR DE GUANTES</a>       
                  </button>
               </div>



               </div>

               <div className='flex flex-row justify-around bg-[#f6d3ff] text-[#2e0057] w-1/2 zoom'>
                  <button >
                    <a href='/RecomendadorZapatos'>RECOMENDADOR DE ZAPATOS</a>       
                  </button>
               </div>

             </div>
            <img src={jugador2} className='smallbot hidden lg:flex'></img>
       
   
  
    {/* <Router>
    <nav>
  
    <Link to="/preguntas/step1">RECOMENDADOR DE GUANTES</Link>
    </nav>     
  </Router>  */}
     </div>
     </div> 
  )
}

export default Bot