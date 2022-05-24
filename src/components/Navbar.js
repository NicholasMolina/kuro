import React from 'react'
import Alogo from './assets/alogo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center bg-[#f6d3ff]">
  <div className=" flex items-center flex-shrink-0 text-black mr-6">
  <img src= {Alogo} className='  w-[120px] p-1'/> 
    
  </div>
  <div className="text-xl pr-2 ">
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Guantes de portero
      </a>
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Zapatos 
      </a>
      <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
        Accesorios
      </a>
    </div>  
</nav>
  )
}

export default Navbar


// import { Link } from 'react-router-dom'

// const PreNavbar = (props) => {

//     let Links = [
//         {name:"Inicio de sesion", link:"/ids"},
//         {name:"Registro ", link:"/registro"},
//         //  {name:"amazing_goalkeeper", link:"https://www.instagram.com/amazing_goalkeeper/"}


//     ];

//     const active = props.active;

//   return (
//     <div classNameName=''>
      
//         <nav classNameName='bg-[#2e0057]  text-white flex py-2'>
//         <img src = {insta} classNameName='w-8 h-8 '/>

//          {/* <a classNameName=' absolute top-2 inset-y-0 left-12 flex' href="https://www.instagram.com/amazing_goalkeeper/" > amazing_goalkeeper </a>  */}
          

          
//             <a target='_blank' classNameName=' bg-red-900 ' href ="https://www.instagram.com/amazing_goalkeeper/" >amazing_goalkeeper</a>   

          
//                 <div classNameName='  mx-auto w-[200px] absolute inset-0 -top-6'> 
//                     <img src = {Alogo2} classNameName=' -ml-10'/>
                    
//                 </div>
//                 <div classNameName='mx-auto'>
//                     <h1 classNameName='-ml-10'> │Ecommerce </h1> 
//                 {/* absolute inset-x-0 top-8 -ml-8 text-lg */}
//                 </div>

//                 <div classNameName=' absolute inset-x-0 top-2'>
//                     <ul classNameName='flex  justify-end'>
//                 {
//                                     Links.map((link) => (
//                                     <li key={link.name} classNameName=" px-4  text-white ">
//                                         <a href={link.link} classNameName={active == link.link ? "text-xl" : ""}>
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
// }<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
// export default PreNavbar