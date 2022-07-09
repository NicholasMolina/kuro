import react,{useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailsRe from './detailsRecomendados';

export default function Recomendados(){
    const {q1,a1,q2,a2} = useParams();

    const[products, setProducts] = useState([]);

    const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/cc/productqa2/${q1}/${a1}/${q2}/${a2}`;
  
    console.log(urll);

    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetch(urll);
        const ss = await data.json();
        setProducts(ss.cc);
        
        if(setProducts(ss.cc) == null){
          alert("No se han encontrado productos en base a tus respuestas")
        }
        console.log(ss.cc);
      }
      fetchApi(urll)
      
    },[])


    return(
        <div className='bg-[#2e0057]' >
        <PreNavbar/>
        <Navbar/>

        <main className='block2 col-2' >
        <h1>PRODUCTOS RECOMENDADOS SEGUN TUS PREFERENCIAS</h1>
        <div className='row prueba' >

        {products.map(item => (
                <div key={item.id} product={item} className=" zoom2">
                    <a href={`/product/${item.product_id}`}> 
                    <div className=' text-[#2e0057] hover:text-[#2e0057]'>
                    <img className='small ' src={item.product.image} alt={item.product.name}></img>
                    <h1>{item.product.name}</h1>
                    <h3 className=' text-sm'>${item.product.price}</h3>
                    <DetailsRe id = {item.product_id}></DetailsRe>

                    </div>
                    </a>
                </div>
              ))}
        </div>    
        </main>
        <Footer/>
        </div>

    )
}