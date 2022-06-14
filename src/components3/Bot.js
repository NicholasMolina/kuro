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
     <div>
     <div className='flex justify-between text-white'>   
             <img src={jugador1} className='smallbot'></img>
             <div className='w-80'>
                 <div className=' grid justify-center pt-4'>          
                   <text className='  font-sans' >¿NO SABES QUÉ GUANTES ELEGIR?</text> 
                 </div>
                 <div>
                   <text className=' text-center'>Existen miles de guantes de portero en el mercado, pero
                      ¿cuál es el más adecuado para tí? 
                      Con este recomendador te ayudaremos a elegir los más acertados para tí.
                   </text>
                 </div>  
               {/*  <div className='pt-4'>
                   <Link to = {'/Serie'}>
                <button ></button>
                  </Link>
                </div>             
                
                 {(isPreguntasOpen) ? PreguntasOpen() : ""}  */}

               <Link to="/Recomendador">RECOMENDADOR DE GUANTES</Link>       

             </div>
            <img src={jugador2} className='smallbot'></img>
       
   
  
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