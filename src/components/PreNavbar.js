 import React from 'react'
import Alogo2 from "./assets/alogo2.png"
import insta from "./assets/instagram.png"


const PreNavbar1 = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#2e0057] p-6 py-2">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <img src = {insta} className='w-8 h-8 '/>
    <a href ="https://www.instagram.com/amazing_goalkeeper/" target="_blank" class="font-semibold text-xl tracking-tight pl-1">amazing_goalkeeper</a>
  </div>
  <div class="block lg:hidden">
    <button id='boton' class="flex items-center px-3 py-2 border rounded  border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div id='menu' class="text-center w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    <img src = {Alogo2} className=' w-[180px]  mt-4 lg:inline-block lg:mt-0 '/>
        <a className='text-white text-2xl align-middle '>Ecommerce </a>
    </div>
    <div>
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4">
        Seguimiento de pedido
      </a>
      <a href="SingIn" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4 border rounded hover:border-transparent">
        Iniciar Sesion
      </a>
      <a href="Login" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black">
        Registrarse
      </a>
      {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a> */}
    </div>
  </div>
</nav>
  )
}

export default PreNavbar1




