import React from 'react';
import { useState,useEffect,useParams } from 'react';
import {Link} from 'react-router-dom'
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Details from './Details';


export default function ProductGuantes(props){ 

  const[products, setProducts] = useState([]);

  const urll = "http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/category/2";
  //const urll ="https://rickandmortyapi.com/api/character";
  //const urll ="/C:/Users/gianl/Desktop/response.json";

  const fetchApi = async () => {
    const data = await fetch(urll);
    const products = await data.json()
    setProducts(products.products)
    console.log(products.products)
    //setProducts(products.results)
    //console.log(products.results)
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
              {products.map(item => (
                <div key={item.id} product={item} className="hover:bg-[#2e0057]">  
                  <Link to = {`/product/${item.id}`}>
                    <div className=' text-[#2e0057] hover:text-[#f6d3ff]'>
                    <img className='small ' src={item.image} alt={item.name}></img>
                    <h1>{item.name},{item.id}</h1>
                    <h3>${item.price}</h3>
                    </div>
                  </Link>
                </div>
              ))}
              
            </div>
          </main>
          <Footer/>
      </div> 

    )
    

}