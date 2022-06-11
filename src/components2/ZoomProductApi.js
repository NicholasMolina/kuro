import React from 'react'


export default function ZoomProductApi  (props)  {
        
    const {product2,products2} = props;


  return (
    <div>
        {products2.map((product2) => (
            <div key={product2.id} product={product2}>
                <h1>{product2.name}</h1>
                <h1>{product2.status}</h1>
            </div>
        ))}
    </div>
  )
}

