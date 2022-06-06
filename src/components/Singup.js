import React from 'react';

import PreNavbar from './PreNavbar';
import Navbar from './Navbar';



const Singup = () => {
  return (

    <div className=' bg-gray-300'>
      
    <PreNavbar/>
    <Navbar/>  
    
      <div className="flex flex-wrap justify-center mt-20">
        <div className='w-full max-w-sm'>
          <form action='' className='shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-5'>
              <label 
                htmlFor='password' 
                className='block text-[#2e0057] text-base font-bold mb-2 text-center'  
              >
                Registrarse
              </label>
              
              <input 
                type="text"
                id='Nombres' 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                placeholder='Nombre/s*'
              />
            </div>

            <div className='mb-6'>
              <input 
                  type="text"
                  id='Apellidos' 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                  placeholder='Apellido Paterno y Materno*'
                />         
            </div>
            {/* <div className='mb-6'>
              <input 
                  type="tel"
                  id='NumeroContacto' 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                  placeholder='Numero telefonico*'
                />         
            </div>
            <div className='mb-6'>
              <input 
                  type="text"
                  id='Cedula' 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                  placeholder='Rut*'
                />         
            </div> */}

            <div className='mb-6'>
              <input 
                  type="email"
                  id='Correo' 
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                  placeholder='Correo Electronico*'
                />         
            </div>


            <div className='mb-6'>
              <label 
                htmlFor='password' 
                className='block text-gray-700 text-sm dond-bold mb-2'></label>
            
            <input 
                type="password" 
                className='shadow pt-6appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                placeholder='Contraseña'
              />
        </div>     

        <div className='mb-6'>
              <label 
                htmlFor='password' 
                className='block text-gray-700 text-sm dond-bold mb-2'></label>
            
            <input 
                type="password" 
                className='shadow pt-6appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                placeholder='Repetir Contraseña'
              />
        </div>    




            <div className=' flex pl-24'>
              <button className=' bg-[#f6d3ff] hover:hover:bg-[#2e0057] hover:text-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>
                Registrarse
              </button>
             
            </div>  
          </form>
          
        </div>
      </div>    

        {/* <div className='containerPrincipal'>
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
      </div>*/}


    </div> 
  )
}

export default Singup

