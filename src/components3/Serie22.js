import React from 'react'
import Serie11 from './Serie11';
import Serie33 from './Serie33';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RecomendadorZapatos from './RecomendadorZapatos';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function Serie22 (props)  {
  
  const {pagina33,guardar2,change} = props;

 
  return (
      <div className='flex flex-col '>

        <div className='m-1 flex flex-row justify-around'>
          <button className='preguntas w-1/2'
          onClick={() => {
            pagina33();guardar2(6,13)
          }}              
          >
            <h1>Gama Alta</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Quiero lo mejor.</h2>
              </div>
          </button>   
        </div>
        <div className='m-1 flex flex-row justify-around'>
          <button className='preguntas w-1/2'
          onClick={() => {
            pagina33();guardar2(6,14)
          }}
          >
            <h1>Gama Baja</h1>
              <div className='m-2'>
                <h2 className='preguntas '>Quiero algo resistente.</h2>
              </div>
          </button>
        </div>
      </div>
      
    )
  }

