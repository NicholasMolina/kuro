import React from 'react'
import PreNavbar from '../components/PreNavbar';
import './styles/carrito.css';


export default function Product(props) {
  <PreNavbar/>
  const {product, onAdd} = props;
   
  return (
    
    <div className=''>
        
        <img className='small ' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <h3>{product.tipo}</h3>
        <h3>{product.talla}</h3>
        <div>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  )
}
