import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
//import data from './data';
import Basket from './Basket';
import PreNavbar from '../components/PreNavbar';
import Product from './Product';
import ZoomProduct from './ZoomProduct';
// --------------
import Alogo from './assets/alogo.png'
import Icon from '@mdi/react';
import { mdiCartOutline, mdiClose } from '@mdi/js';

export default function ProductGuantes(props){ 
  const [style, setStyle] = useState("");
  
  const changeStyle = () => {
    {(style == "cont3") ? setStyle("cont2") : setStyle("cont3")}  
  };
  const[isReviewOpen, setisReviewOpen ] = useState(false);
const ShowReview = () => {(isReviewOpen) ? setisReviewOpen(false) : setisReviewOpen(true)}






//---------------------------------NAVBAR---------------------------------------------------------------------------------------


  const[products, setProducts] = useState([]);

  //const urll = "http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/category/2";
  const urll ="https://rickandmortyapi.com/api/character";

  const fetchApi = (urll) => {
    axios
      .get(urll)
      .then((data)=>{
        //setProducts(data.data.products);
        //console.log(data.data.products);
        setProducts(data.data.results);
        console.log(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchApi(urll)
  },[])

    return (
      <div className='bg-[#2e0057]'>
            <PreNavbar/>

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
                </a>     
        
              </div>  
        </nav>

          <main className='block2 col-2'>
            <h2>PRODUCTOS: ZAPATOS</h2>
            <div className='row prueba'>
              {products.map((product) => (
                <div key={product.id} product={product}>    
                  <img className='small ' src={product.image} alt={product.name}></img>
                  <h1>{product.name}</h1>
                  <div>${product.status}
                      <div>
                      <button onClick={()=>ShowReview()}>Add To Cart</button>
                      </div>
                  </div>
                </div>
              ))}
              
            </div>
          </main>
      </div> 
    )

}
