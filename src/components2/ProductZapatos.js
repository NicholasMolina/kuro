import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
//import data from './data';
//import Basket from './Basket';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import Product from './Product';
//import ZoomProduct from './ZoomProduct';
// --------------
//import Alogo from './assets/alogo.png'
//import Icon from '@mdi/react';
//import { mdiCartOutline, mdiClose } from '@mdi/js';

export default function ProductGuantes(props){ 
  //const [style, setStyle] = useState("");
  
  //const changeStyle = () => {
   // {(style == "cont3") ? setStyle("cont2") : setStyle("cont3")}  
  //};
  //const[isReviewOpen, setisReviewOpen ] = useState(false);
//const ShowReview = () => {(isReviewOpen) ? setisReviewOpen(false) : setisReviewOpen(true)}






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
        console.log(data.data);
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
            <Navbar/>

          <main className='block2 col-2'>
            <h2>PRODUCTOS: ZAPATOS</h2>
            <div className='row prueba'>
              {products.map((product) => (
                <div key={product.id} product={product}>    
                  <img className='small ' src={product.image} alt={product.name}></img>
                  <h1>{product.name}</h1>
                  <div>${product.status}
                      <div>
                      <button /*onClick={()=>ShowReview()}*/>Add To Cart</button>
                      </div>
                  </div>
                </div>
              ))}
              
            </div>
          </main>
          <Footer/>
      </div> 

    )
    

}
