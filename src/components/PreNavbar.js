 import React from 'react'
import Alogo2 from "./assets/alogo2.png"
import insta from "./assets/instagram.png"


// import { Link } from 'react-router-dom'

// const PreNavbar = (props) => {

//     let Links = [
//         {name:"Inicio de sesion", link:"/ids"},
//         {name:"Registro ", link:"/registro"},
//         //  {name:"amazing_goalkeeper", link:"https://www.instagram.com/amazing_goalkeeper/"}


//     ];

//     const active = props.active;

//   return (
//     <div className=''>
      
//         <nav className='bg-[#2e0057]  text-white flex py-2'>
//         <img src = {insta} className='w-8 h-8 '/>

//          {/* <a className=' absolute top-2 inset-y-0 left-12 flex' href="https://www.instagram.com/amazing_goalkeeper/" > amazing_goalkeeper </a>  */}
          

          
//             <a target='_blank' className=' bg-red-900 ' href ="https://www.instagram.com/amazing_goalkeeper/" >amazing_goalkeeper</a>   

          
//                 <div className='  mx-auto w-[200px] absolute inset-0 -top-6'> 
//                     <img src = {Alogo2} className=' -ml-10'/>
                    
//                 </div>
//                 <div className='mx-auto'>
//                     <h1 className='-ml-10'> │Ecommerce </h1> 
//                 {/* absolute inset-x-0 top-8 -ml-8 text-lg */}
//                 </div>

//                 <div className=' absolute inset-x-0 top-2'>
//                     <ul className='flex  justify-end'>
//                 {
//                                     Links.map((link) => (
//                                     <li key={link.name} className=" px-4  text-white ">
//                                         <a href={link.link} className={active == link.link ? "text-xl" : ""}>
//                                             {link.name}
//                                         </a>
//                                     </li>
//                                     ))
//                 }
//                      </ul>
//                 </div>
//         </nav>

//     </div>
//   )
// }<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
// export default PreNavbar


const PreNavbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#2e0057] p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <a href ="https://www.instagram.com/amazing_goalkeeper/" class="font-semibold text-xl tracking-tight">amazing_goalkeeper</a>
  </div>
  <div class="block lg:hidden">
    <button id='boton' class="flex items-center px-3 py-2 border rounded  border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div id='menu' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
  )
}

export default PreNavbar




