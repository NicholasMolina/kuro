import React from 'react'
import { useState } from 'react';
import Serie2 from './Serie2';



export default function Serie (props){

const[isPreguntasOpen2, setisPreguntasOpen2 ] = useState(false);
const showPreguntas2 = () => {(isPreguntasOpen2) ? setisPreguntasOpen2(false) : setisPreguntasOpen2(true)}

function PreguntasOpen2(){
  return(
    <Serie2></Serie2>
  )
 }



  return (
    <div className='text-white  preguntas w-80'>
        
        <div className='space-y-16'>          
             <button onClick={() =>{showPreguntas2()}} className=' mt-4'>
            {(isPreguntasOpen2) ? PreguntasOpen2() : ""}
            around 
            </button> 

            <button className=''>
                the
            </button>

            <button className=''>
            world
            </button>
        </div> 
    </div>
  )
}

