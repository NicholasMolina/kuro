import React from 'react'
import { Link } from 'react-router-dom';

export default function Serie33 (props){

  const {a1,a2,q1,q2} = props;

  console.log(q1);
  console.log(a1);
  console.log(q2);
  console.log(a2);

  return (
    <div className='flex flex-col '>
      <Link to = {`/recomendados/zapatos/${q1}/${a1}/${q2}/${a2}`}>   
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
    </div>
  )
}

