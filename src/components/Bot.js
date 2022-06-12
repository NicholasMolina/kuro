import React from 'react'
import { useState } from 'react'

// -------------------

import "./styles/Bot.css"

const Bot = () => {

//   const[isPreguntasOpen, setisPreguntasOpen ] = useState(false);
// const showPreguntasOpen = () => {(isPreguntasOpenn) ? setisPreguntasOpen(false) : setisPreguntasOpen(true)}


const[isPreguntasOpen, setisPreguntasOpen ] = useState(false);
const showPreguntas = () => {(isPreguntasOpen) ? setisPreguntasOpen(false) : setisPreguntasOpen(true)}

function preguntasOpen(){
  return(
    <div>
    <div className=''>   
           

            <div className='text-white  preguntas w-80'>
                        
              <div className='space-y-16'>          
                <button className=' mt-4'>
                 
                      around 
                </button>
                <button className=''>
                        the
                </button>
                <button className=''>
                      world
                </button>
              </div> 
            </div>

           
    </div>    
   </div>
  )
}


  return (
    <div>
      <div className='flex justify-between'>   
              <img src={jugador1} className='imagen '></img>

              <div className='text-white  preguntas w-80'>
                          <text className=''> pregunta??</text>
                <div className='space-y-16'>          
                  <button onClick={() =>{showPreguntas()}} className=' mt-4'>
                    {(isPreguntasOpen) ? preguntasOpen() : ""}
                        around 
                  </button>
                  <button className=''>
                          the
                  </button>
                  <button className=''>
                        world
                  </button>
                </div> 
              </div>

              <img src={jugador2} className='imagen'></img>
      </div>    
     </div>
  )
}

export default Bot