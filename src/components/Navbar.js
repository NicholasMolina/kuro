import React, { useState } from 'react'
import Alogo from './assets/alogo.png'
import Basket from '../components2/Basket';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiClose } from '@mdi/js';
import data from '../components2/data';


 export default function Navbar(props){
// const{countCartItems} = props;
const[isSideMenuOpen, setisSideMenuOpen ] = useState(false);
const showSideMenu = () => {(isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)}

// const Navbar = () => {
  



  return (
    <nav className="flex items-center bg-[#f6d3ff]">
  <div className=" flex items-center flex-shrink-0 text-black mr-6">
  <img src= {Alogo} className='  w-[120px] p-1'/> 
    
  </div>
  <div className="text-xl pr-2 ">
      <a href="/Guantes" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Guantes de portero
      </a>
      <a href="/Zapatos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Zapatos 
      </a>
      <a href="/Accesorio" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
        Accesorios
      </a>
      
      <a href="#/cart" className='block mt-4 lg:inline-block lg:mt-0 '>
        {/* Cart { ' '}
        {countCartItems ? {countCartItems}( */}
          <button  onClick={() =>{showSideMenu()}} className='bg-transparent right-2 z-10'> {(isSideMenuOpen) ? 
            <Icon path={mdiClose} size={'50px'} color="black"></Icon> : 
            <Icon path={mdiCartOutline} size={'50px'} color="black" ></Icon> }
          
          </button>
        {/* ) : (
          ''
        )} */}
        {(isSideMenuOpen ) ? SideMenu() : '' }
      </a>
      {/* {' '} */}

    </div>  
</nav>
  );



  

}

function SideMenu() {
  

  return(
    <div className='absolute right-0 top-0 h-screen w-2/4 bg-white'>
      
    </div>
  )
} 
