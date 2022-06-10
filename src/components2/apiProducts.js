import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import PreNavbar from '../components/PreNavbar';
//import Main from './Main';
//import data from './data';

function ApiProducts (){

  const[products, setProducts] = useState([]);

  const urll = "http://localhost/proyectoag/api-rest-laravel-ag/public/api/product";

  const fetchApi = (urll) => {
    axios
      .get(urll)
      .then((data)=>{
        setProducts(data.data.products);
        console.log(data.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchApi(urll)
  },[])

  return (

    <div>
      {products.map(item => (
        <div key={item.id}>
          <div >
            <li>{item}</li>
          </div>   
        </div>    
      ))}
           
    </div>

  )
}
export default ApiProducts;