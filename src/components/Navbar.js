import React from 'react'
import Alogo from "./assets/alogo.png"

const Navbar = (props) => {
    let Links = [ 
        {name:"Guantes de portero ", link:"/guantes"},
        {name:"Zapatos ", link:"/zapatos"},
        {name:"Accesorios ", link:"/accesorios"}

    ];

    const active = props.active;

  return (
    <div className='bg-[#f6d3ff]  flex'>
       
        <nav className=' flex items-center  py-7' >
            <div className=' absolute w-[130px] invert'>
                <img src= {Alogo}/> 
        
            </div>
            <ul className='flex ml-[115px] '>
                {
                    Links.map((link) => (
                    <li key={link.name} className=" px-4">                    
                        <a href={link.link} className={active == link.link ? "text-xl" : ""}> 
                            {link.name}
                        </a>
                    </li>

                    ))
                }
               
            </ul>
        </nav>
            
    </div>
  )
}

export default Navbar