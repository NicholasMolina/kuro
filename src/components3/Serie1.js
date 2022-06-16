import React from 'react'
import "./styles/Recomendador.css"


export default function Serie1 (props)  {

  const {pagina2,sumar,change} = props;


  
  return (
    <div className=' flex flex-col  '>
      <div className='m-1 flex flex-row justify-around '>
        <button className='preguntas w-1/2'
         onClick={() => {
          pagina2();sumar(1);change()
        }}  
        >
          <h1>Soy un clásico</h1>
            <div className='m-2 '>
              <h2 className='preguntas '>Me gustan los guantes con corte flat y armado medio. ¡Los que se han usado toda la vida!</h2>
            </div>
        </button>
      </div>
      <div className='m-1 flex flex-row justify-around'>
        <button className='preguntas w-1/2'
          onClick={() => {  
            pagina2();sumar(2);change()
          }}  
        >
          <h1>Voy a la última</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Quiero la última tecnología en mis manos. Palmas que mezclan cortes, textiles especiales y cierres novedosos.</h2>
            </div>
        </button>
      </div>
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
    </div>
  )
}

