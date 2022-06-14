import React from 'react'
import "./styles/Recomendador.css"


export default function Serie1 (props)  {

  const {pagina2} = props;


  return (
    <div className='flex flex-col '>
      <div className='m-1'>
        <button className='preguntas'
         onClick={() => {
          pagina2()
        }}  
        >
          <h1>Soy un clásico</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Me gustan los guantes con corte flat y armado medio. ¡Los que se han usado toda la vida!</h2>
            </div>
        </button>
      </div>
      <div className='m-1'>
        <button className='preguntas'
          onClick={() => {
            pagina2()
          }}  
        >
          <h1>Soy un clásico</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Me gustan los guantes con corte flat y armado medio. ¡Los que se han usado toda la vida!</h2>
            </div>
        </button>
      </div>
      <div className='m-1 '>
        <button className='preguntas'
          onClick={() => {
            pagina2()
          }}  
        >
          <h1>Soy un clásico</h1>
            <div className='m-2'>
              <h2 className='preguntas '>Me gustan los guantes con corte flat y armado medio. ¡Los que se han usado toda la vida!</h2>
            </div>
        </button>
      </div>
    </div>
  )
}

