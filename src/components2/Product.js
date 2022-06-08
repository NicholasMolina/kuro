import React, { useState } from 'react'
import PreNavbar from '../components/PreNavbar';
import './styles/carrito.css';

import {  mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import ZoomProduct from '../components2/ZoomProduct';



export default function Product(props) {
  <PreNavbar/>
  const {product, onAdd} = props;


const[isReviewOpen, setisReviewOpen ] = useState(false);
const ShowReview = () => {(isReviewOpen) ? setisReviewOpen(false) : setisReviewOpen(true)}


   
  return (
    
    <div className=''>
        
        <img className='small ' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        {/* <h3>{product.tipo}</h3>
        <h3>{product.talla}</h3> */}
        <div>
            <button onClick={()=>ShowReview()}>Add To Cart</button>
            
        </div>
        {(isReviewOpen ) ? Review() : '' }
    </div>
  )

  function Review (){
     
    return(
       <div className=' border-solid border-2 border-[#2e0057]  absolute top-0 w-2/4 h-2/4 bg-[#f6d3ff]'>
          <div className=' mt-1 lg:inline-block absolute'>       
            <button  onClick={() =>{ShowReview()}}  className='bg-white'> 
                      {(isReviewOpen) ? 
                        <Icon path={mdiClose} size={'40px'} color="red"></Icon> : 
                        '' }
            </button>
          </div> 
          <div className=''>
            <ZoomProduct key={product.id} product={product} onAdd={onAdd}></ZoomProduct>
          </div>
       </div>
     )
   }

}





// ()=>onAdd(product)}