import React from 'react'
import Main from './Main'
import { useState } from 'react';
import data from './data';
import Basket from './Basket';
import PreNavbar from '../components/PreNavbar';
import {Link} from 'react-router-dom'
// --------------
import Alogo from './assets/alogo.png'
import Icon from '@mdi/react';
import { mdiCartOutline, mdiClose } from '@mdi/js';
import Footer from '../components/Footer';


export default function ProductGuantes(props){
  
  const [style, setStyle] = useState("");

  const changeStyle = () => {
    {(style == "cont3") ? setStyle("cont2") : setStyle("cont3")}
  };

const {products} = data;

  const [cartItems,setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const valor =+ 1;
    if(exist){
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else{
      setCartItems([...cartItems, {...product,qty:1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const valor =- 1;
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist,qty: exist.qty - 1}: x
        )
      );
    }
  }

  const carro = () =>{
    if( cartItems.length !== 0){
      return  cartItems.length;
    }
  }


const[isSideMenuOpen, setisSideMenuOpen ] = useState(false);
const showSideMenu = () => {(isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)}

 const{item} = props

  function SideMenu() {
    return(
      <div className='absolute right-1 top-36 h-screen w-1/4 bg-transparent '>
         <Basket
           onAdd={onAdd}
           onRemove={onRemove}
          cartItems={cartItems}
          ></Basket>
      </div>
    )
    }


  return (

    <div className='bg-[#2e0057]'>
          <PreNavbar/>

      <nav className="flex items-center bg-[#f6d3ff]">
        <div className=" flex items-center flex-shrink-0 text-black mr-6">
        {/* <Link to = {'/Home'}> */}
          <img src= {Alogo} className='  w-[120px] p-1'/>
        {/* </Link> */}

        </div>
          <div className="text-xl pr-2 ">
              <a href="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Inicio
              </a>
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
                  <button  onClick={() =>{showSideMenu();changeStyle(style)}}  className='bg-transparent right-2 z-10 '>
                  {(isSideMenuOpen) ?
                    <Icon path={mdiClose} size={'50px'} color="red"></Icon> :
                    <div>
                      <Icon path={mdiCartOutline} size={'50px'} color="black" /> 
                      <div className='absolute pl-12 -mt-6'>
                        {carro()}
                      </div>
                    </div>}
                    
                  </button>
                  
                  

                {(isSideMenuOpen ) ? SideMenu() : ""}

              </a>

            </div>
      </nav>


        <div className=''>
          <div className={style}>
            
            <Main onAdd={onAdd} products = {products}   ></Main>
          </div>
        </div>
        <Footer/>
    </div>
  )

}

