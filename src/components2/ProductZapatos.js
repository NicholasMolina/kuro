import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ZoomProductApi from './ZoomProductApi';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// --------------

export default function ProductGuantes(props){ 

//---------------------------------NAVBAR---------------------------------------------------------------------------------------

 
  const[products2, setProducts] = useState([]);

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


  //  ----------------------------
    const [cambio,setCambio] = useState(true);
   


    if(!cambio) {
      return <ZoomProductApi key={product2.id} product={product2}></ZoomProductApi>
    }

  // --------------------------------

    return (
      <div className='bg-[#2e0057]'>
            <PreNavbar/>
            <Navbar/>

          <main className='block2 col-2'>
            <h2>PRODUCTOS: ZAPATOS</h2>
            <div className='row prueba'>
              {products2.map((product2) => (
                
                <div key={product2.id} product={product2}>
                      
                  <img className='small ' src={product2.image} alt={product2.name}></img>
                  <h1>{product2.name}</h1>
                  <div>Estado: {product2.status}
                      <div>
                       <button  onClick={() => setCambio(false)}>
                        
                       Add To Cart
                        </button> 
                      
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