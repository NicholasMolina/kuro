import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd} = props;
    return (
        <main className='block2 col-2'>
            <h2>Products</h2>
            <div className='row prueba'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}
 