import react,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';


export default function Recomendados(){
    const {rank} = useParams();

    const[products, setProducts] = useState([]);

    const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/ranking/${rank}`;
  
    console.log(urll);

    useEffect(() => {
        const fetchApi = async () => {
          const data = await fetch(urll);
          const ss = await data.json();
          setProducts(ss.product);
          console.log(ss.product)
        }
        fetchApi(urll)
        
      },[])

    return(
        <div >
        <PreNavbar/>
        <Navbar/>

        <main className='block2 col-2' >
        <h1>PRODUCTOS RECOMENDADOS SEGUN TUS RESPUESTAS</h1>
        <div className='row prueba' >

        {products.map(item => (
                <div key={item.id} product={item} className=" zoom2">
                    <a href={`product/${item.id}`}> 
                    <div className=' text-[#2e0057] hover:text-[#2e0057]'>
                    <img className='small ' src={item.image} alt={item.name}></img>
                    <h1>{item.name}</h1>
                    <h3 className=' text-sm'>${item.price}</h3>
                    
                    </div>
                    </a>
                </div>
              ))}
        </div>    
        </main>
        </div>

    )
}