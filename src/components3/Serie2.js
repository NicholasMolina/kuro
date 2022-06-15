import React from 'react'
import Serie1 from './Serie1';
import Serie3 from './Serie3';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Recomendador from './Recomendador';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function Serie2 (props)  {
  
  const {pagina3} = props;

  return (
      <div className='flex flex-col '>

        <div className='m-1 flex flex-row justify-around'>
          <button className='preguntas w-1/2'
          onClick={() => {
            pagina3()
          }}              
          >
            <h1>Juego al máximo nivel</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Quiero un látex de máximo agarre y amortiguación. Asumo que la palma es delicada.</h2>
              </div>
          </button>   
        </div>
        <div className='m-1 flex flex-row justify-around'>
          <button className='preguntas w-1/2'
          onClick={() => {
            pagina3()
          }}
          >
            <h1>Juego al máximo nivel en climas extremos</h1>
              <div className='m-2'>
                <h2 className='preguntas '>En mi campo llueve muchas veces, lo riegan mucho y hace frío. Tejidos aislantes y palma delicada con máximo agarre.</h2>
              </div>
          </button>
        </div>
        <div className='m-1 flex flex-row justify-around'>
          <button className='preguntas w-1/2'
          onClick={() => {
            pagina3()
          }}
          >
            <h1>Juego federado a nivel amateur</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Necesito un buen guante pero no puedo cambiarlo cada poco tiempo. Agarre y duración media.</h2>
              </div>
          </button> 
          {/* {PageDisplay()} */}
        </div>
      </div>
      
    )
  }

