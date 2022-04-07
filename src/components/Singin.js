import React from 'react';
import "./Singin.css"
import PreNavbar from './PreNavbar';
import Navbar from './Navbar';



const Singin = () => {
  return (

    <div className=''>
      
    <PreNavbar/>
    <Navbar/>  
    


        <div className='containerPrincipal'>
          <div className=' containerSecundario'>
            <div className='form-group'>
              <label>Usuario: </label>
              <br/>
              <input
                type='text'
                className='form-control bg-[#f6d3ff]'
              />
              <br/>
              <label>Contraseña: </label>
              <br/>
              <input
                type='password'
                className='form-control bg-[#f6d3ff]'
              />
              <br/>
              <button className='btn btn-primary'>Iniciar Sesion</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Singin

