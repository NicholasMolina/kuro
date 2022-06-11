import React from 'react'

// -------------------
import jugador1 from './assets/futbol1.png'
import jugador2 from './assets/futbol2.png'
import "./styles/Bot.css"

const Bot = () => {

//   const[isPreguntasOpen, setisPreguntasOpen ] = useState(false);
// const showPreguntasOpen = () => {(isPreguntasOpenn) ? setisPreguntasOpen(false) : setisPreguntasOpen(true)}


  return (
    <div>
      <div className='flex justify-between'>   
              <img src={jugador1} className='imagen '></img>
              <div className='text-white  preguntas w-80'>
                          <text className=''> pregunta??</text>
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
              <img src={jugador2} className='imagen'></img>
      </div>    
     </div>
  )
}

export default Bot