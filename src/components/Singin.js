import React from 'react'
import PreNavbar from './PreNavbar';
import Navbar from './Navbar';


const Signin = () => {
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
                Iniciar Sesion
              </label>
              <input 
                type="text"
                id='correo' 
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

            <div className='flex items-center pb-3'>
              <input id ="" 
                    name='' 
                    type="checkbox" className=''></input>
              <label 
                    className='ml-2 block text-sm text-gray-700 focus:outline-none focus:shadow-outline '>
                    Recordarme  
              </label> 
            </div>

            <div className='flex items-center pb-1 '>
              <button className=' w-full bg-[#f6d3ff] hover:bg-[#2e0057] text-gray-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>
                INICIAR SESION
              </button>

            </div>

            <a
                className='inline-block align-baseline font-bold text-xs text-[#2e0057] hover:text-blue-700'
                href='/'
              >
                Olvido su contraseña?
              </a>

          </form>
          
        </div>
      </div>    
    </div>
  )
}

export default Signin