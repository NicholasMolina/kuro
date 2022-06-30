import React from 'react'
import { Link } from 'react-router-dom';

export default function Serie33 (props){

  const {sumar,suma} = props;

  return (
    <div className='flex flex-col '>
      <Link to = {`/Recomendados/zapatos/${suma}`}>    
      <div className='m-1 flex flex-row justify-around'>
      
        <button className='preguntas w-1/2'
          onClick={() => {
            sumar(1)
          }}
        >
          <h1>MOSTRAR MIS RESULTADOS</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Estos productos se adaptarán a tu necesidad</h2>
            </div>
        </button>
        
      </div>
      </Link>
    </div>
  )
}

