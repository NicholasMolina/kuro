import React from 'react'
import { Link } from 'react-router-dom';

export default function Serie3 (props){

  const {suma,a1,a2,q1,q2} = props;

 console.log(a1);
 console.log(a2);
 console.log(q1);
 console.log(q2);

  return (
    <div className='flex flex-col '>
      
      <Link to = {`/Recomendados/guantes/${suma}`}>    
      <div className='m-1 flex flex-row justify-around'>
      
        <button className='preguntas w-1/2'
          onClick={() => {
            
          }}
        >
          <h1>MOSTRAR MIS RESULTADOS</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Estos productos se adaptarán a tu necesidad</h2>
            </div>
        </button>
        
      </div>
      </Link>

{/*

      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
         onClick={() => {
          sumar(2)
        }}
        >
          <h1>Tengo lesiones en las manos frecuentemente</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Guantes con protecciones en los dedos para minimizar el riesgo de lesión.</h2>
              </div>
        </button>
      </div>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
         onClick={() => {
          sumar(3)
        }}
        >
          <h1>Soy portera</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Guantes anatómicamente diseñados para adaptarse a la anatomía de la mano femenina.</h2>
              </div>
        </button>
      </div>

      */}
    </div>
  )
}

