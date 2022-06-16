import React from 'react'

export default function Serie3 (props){

  const {sumar,suma} = props;

  return (
    <div className='flex flex-col '>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
          onClick={() => {
            sumar(2)
          }}
        >
          <h1>No necesito nada de eso</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Los guantes estándar son los que mejor se adaptan a mí.</h2>
            </div>
        </button>
      </div>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'>
          <h1>Tengo lesiones en las manos frecuentemente</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Guantes con protecciones en los dedos para minimizar el riesgo de lesión.</h2>
              </div>
        </button>
      </div>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'>
          <h1>Soy portera</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Guantes anatómicamente diseñados para adaptarse a la anatomía de la mano femenina.</h2>
              </div>
        </button>
      </div>
    </div>
  )
}

