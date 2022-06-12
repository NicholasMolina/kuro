import React from 'react'
import Serie1 from './Serie'
import jugador1 from "./assets/futbol1.png"
import jugador2 from "./assets/futbol2.png"

const bot = () => {
  return (
    <div>
    <div className='flex justify-between'>   
            <img src={jugador1} className='imagen '></img>

            <Serie1></Serie1>

            <img src={jugador2} className='imagen'></img>
    </div>    
   </div>
  )
}

export default bot