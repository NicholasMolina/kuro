import React, { useState } from 'react'
import Alogo from './assets/alogo.png'
import { Link } from 'react-router-dom';

 export default function Navbar(props){

  return (
    // onClick={() => window.location.reload()} 
  <nav className="flex items-center bg-[#f6d3ff]" >
    <div className=" flex items-center flex-shrink-0 text-black mr-6">     
        <img  src= {Alogo} className='  w-[120px] p-1'/> 
    </div>
    <div className="text-xl pr-2">
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                  Inicio
        </a>
        <a href="/Guantes" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
          Guantes de portero
        </a>
        <a href="/Zapatos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
          Zapatos 
        </a>
        <a href="/Accesorios" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
          Accesorios
        </a>
        

    </div>
     
  </nav>
   
  );


}




