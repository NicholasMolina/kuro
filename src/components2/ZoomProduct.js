import React, { useState } from 'react'

export default function ZoomProduct(props) {

    const {product, onAdd} = props;


  return (
    <div className=''>
        
        <img className='small2 ' src={product.image} alt={product.name}></img>
        <div className=' text-black ml-2'>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <h3>{product.tipo}</h3>
            <h3>{product.talla}</h3> 
        </div>
        <div>
            <button onClick={()=>onAdd(product)} className="">Add To Cart</button>
            
        </div>
       
    </div>
  )
  
}

