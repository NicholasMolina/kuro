import React from 'react'
import Alogo2 from "./assets/alogo2.png"
import insta from "./assets/instagram.png"


import { Link } from 'react-router-dom'

const PreNavbar = (props) => {

    let Links = [
        {name:"Inicio de sesion", link:"/ids"},
        {name:"Registro ", link:"/registro"},
        //  {name:"amazing_goalkeeper", link:"https://www.instagram.com/amazing_goalkeeper/"}


    ];

    const active = props.active;


  return (
    <div className=''>
      
        <nav className='bg-[#2e0057]  text-white flex py-2'>
        <img src = {insta} className='w-8 h-8 '/>

         {/* <a className=' absolute top-2 inset-y-0 left-12 flex' href="https://www.instagram.com/amazing_goalkeeper/" > amazing_goalkeeper </a>  */}
          

          
            <a target='_blank' className=' bg-red-900 ' href ="https://www.instagram.com/amazing_goalkeeper/" >amazing_goalkeeper</a>   

          
                <div className='  mx-auto w-[200px] absolute inset-0 -top-6'> 
                    <img src = {Alogo2} className=' -ml-10'/>
                    
                </div>
                <div className='mx-auto'>
                    <h1 className='-ml-10'> │Ecommerce </h1> 
                {/* absolute inset-x-0 top-8 -ml-8 text-lg */}
                </div>

                <div className=' absolute inset-x-0 top-2'>
                    <ul className='flex  justify-end'>
                {
                                    Links.map((link) => (
                                    <li key={link.name} className=" px-4  text-white ">
                                        <a href={link.link} className={active == link.link ? "text-xl" : ""}>
                                            {link.name}
                                        </a>
                                    </li>
                                    ))
                }
                     </ul>
                </div>
        </nav>

    </div>
  )
}

export default PreNavbar