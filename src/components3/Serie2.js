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

        <div className='m-1'>
        {/* <Link to = '/Serie3'> */}
          <button className='preguntas'
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
        <div className='m-1'>
          <button className='preguntas'
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
        <div className='m-1 '>
          <button className='preguntas'
          onClick={() => {
            pagina3()
          }}
          >
            <h1>Juego al máximo nivel</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Quiero un látex de máximo agarre y amortiguación. Asumo que la palma es delicada.</h2>
              </div>
          </button> 
          {/* {PageDisplay()} */}
        </div>
      </div>
      
    )
  }

