import React from 'react';
import "./styles/Singin.css";
import PreNavbar from './PreNavbar';
import Navbar from './Navbar';



const Singin = () => {
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
                className='block text-gray-700 text-sm font-bold mb-2 text-center'  
              >
                Iniciar Sesion
              </label>
              <input 
                type="text"
                id='username' 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'                
                placeholder='Correo electronico'
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
            <div className='flex items-center justify-between '>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>
                SING IN
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700'
                href='/'
              >
                Olvido su contraseña?
              </a>
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

export default Singin

