import react from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'


function SearchProduct(){

    const[data,setData]=useState([]);

    async function search(key){ 

        console.warn(key);

        let result = await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/search/"+key);
        result=await result.json();
        setData(result)


    }

    return(
        <div>
            <div className='block2 col-2'>
                <h1>Search Product</h1>
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Buscar Producto" />
                <h1>TODOS LOS PRODUCTOS</h1>
                 <div className='row prueba'>
                 

                {data.map((item) => 
                <div key={item.id} product={item} className=" zoom2">  
                    <Link to = {`/product/${item.id}`}>
                  
                    <div className=' text-[#2e0057] hover:text-[#2e0057]'>
                    <img className='small ' src={item.image} alt={item.name}></img>
                    <h1>{item.name}</h1>
                    <h3 className=' text-sm'>${item.price}</h3>
                    </div></Link>
               
                </div>
                )}
                </div>
            </div>
        </div>
    )


}
export default SearchProduct