import React from 'react'
import "./styles/Recomendador.css"


export default function Serie11 (props)  {

  const {pagina22,guardar,change} = props;


  
  return (
    <div className=' flex flex-col  '>
      <div className='m-1 flex flex-row justify-around '>
        <button className='preguntas w-1/2'
         onClick={() => {
          pagina22();guardar(5,12);change()
        }}  
        >
          <h1>Juego en Natural</h1>
            <div className='m-2 '>
              <h2 className='preguntas '>Necesito toperoles altos</h2>
            </div>
        </button>
      </div>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
          onClick={() => {  
            pagina22();guardar(5,11);change()
          }}  
        >
          <h1>Juego en sintetico</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Necesito toperoles bajos</h2>
            </div>
        </button>
      </div>
      {/*}
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
          onClick={() => {
            pagina2();sumar(3);change()
          }}  
        >
          <h1>Máxima sensibilidad</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Me apoyo en mi técnica de blocaje, necesito un guante técnico que me ayude a reforzarlo aún más. Corte negativo y textiles ligeros.</h2>
            </div>
        </button>
      </div>
        */}
    </div>
  )
}

