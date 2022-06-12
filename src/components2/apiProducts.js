
import React, { useEffect, useState } from 'react';
import './styles/carrito.css';

import {  mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import ZoomProduct from '../components2/ZoomProduct';

// ---------------------------


const {productsApi} = data;

// ----------------------------------



const[isReviewOpen, setisReviewOpen ] = useState(false);
const ShowReview = () => {(isReviewOpen) ? setisReviewOpen(false) : setisReviewOpen(true)}


   
  return (
    
    <div className=''>
        
        <img className='small ' src={product.image} alt={product.name}></img>
        <h3>{productApi.name}</h3>
        <div>${productApi.price}</div>
        {/* <h3>{product.tipo}</h3>
        <h3>{product.talla}</h3> */}
        <div>
            <button onClick={()=>ShowReview()}>Add To Cart</button>
            
        </div>
        {(isReviewOpen ) ? Review() : '' }
    </div>
  )

  function Review (){
    // border-solid border-2 border-[#2e0057]  absolute top-0 w-2/4 h-2/4 bg-[#f6d3ff]
    return(
    <div className='flex flex-wrap'>
       <div className=' w-2/4 h-2/4 bg-[#f6d3ff] border-solid border-2 border-[#2e0057] absolute inset-y-0 '>
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
       </div>
     )
   }


 