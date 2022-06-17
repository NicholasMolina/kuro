import React, {useState} from 'react';


export default function Basket(props){
    const{cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 50000 ? 0 :6990;
    const totalPrice = itemsPrice + shippingPrice;
    



    return(      
        <aside className='block3 '>
     
            <h2> Cart Items  </h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.name}</div>

                    <div className='col-2'>
                        <button onClick={()=>onAdd(item)} className="add">
                            +
                        </button>
                        <button onClick={()=>onRemove(item)} className="remove">
                            -
                        </button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>

                </div>
                
            ))}
            

            {cartItems.length !== 0 &&(
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Precio Productos</div>
                        <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Precio de Envio</div>
                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <strong>Precio Total</strong>
                        </div>
                        <div className='col-1 text-right'>
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <button onClick={() => alert('Implementar boton pago')} className="buton">
                            Pagar
                        </button>
                    </div>
                </>
            )}

        </aside>
       
    );
}
 