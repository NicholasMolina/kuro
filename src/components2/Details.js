import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import PreNavbar from '../components/PreNavbar';
import Footer from '../components/Footer';
import Basket from './Basket';
import Alogo from './assets/alogo.png'
import Icon from '@mdi/react';
import { mdiCartOutline, mdiClose } from '@mdi/js';
import Pruebas from'./pruebas';
import Navbar from '../components/Navbar';


export default function  Details (){
   // console.log(useParams())
    const {id} = useParams()
    //console.log(id)
    const[details, setDetails] = useState([]);
    const[categories,setCategories] = useState([]);

    const[stock,setStock] = useState([]);
    const[sizes,setSizes] = useState([]);

    const[cc,setCc] = useState([]);
    const[feature,setFeature] = useState([]);
    const[tf,setTypeF] = useState([]);

    const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/${id}`;
    const urll2 =`http://localhost/proyectoag/api-rest-laravel-ag/public/api/stock/product/${id}`;
    const urll3 = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/cc/product/${id}`;
    //const urll =`https://rickandmortyapi.com/api/character/${id}`;

  
    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetch(urll);
        const ss = await data.json()
        //setDetails(details)
        //console.log(details)
        setDetails(ss.product)
        setCategories(ss.product.category)
        
      }
      fetchApi(urll)
      
    },[])

    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetch(urll2);
        const ss = await data.json()
        //setDetails(details)
        //console.log(details)
        setStock(ss.stock)
        setSizes(ss.stock.size)
        //console.log(ss.stock.size)
      }
      fetchApi(urll)
      
    },[])

    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetch(urll3);
        const ss = await data.json()
        setCc(ss.cc);
        setFeature(ss.cc.feature)
        setTypeF(ss.cc.typefeature)
        
        
        
      }
      fetchApi(urll)
      
    },[])
   

// ----------------------------Basket-------------------------------


return(
    <div className='bg-[#2e0057]'>
    <PreNavbar/>
    <Navbar/>


{/* ------------------------------------------------------------------------------------ */}
    
    <main className='block2 flex flex-row justify-center'>
     
        <img className='w-[35%]' src={details.image} alt={details.name}></img>
          <div className=' m-4'>
            <h3>{categories.name}</h3>
            <h1>{details.name}</h1>

            <h4>Talla Disponible</h4>
            {stock.map(item => (
              <div key={item.id} >
                 {item.size.size} | {item.quantity}
              </div>
            ))}
              <div className='pt-6'>
                <button className="Zoom"> AGREGAR A CARRO DE COMPRA</button>
              </div>

              {cc.map(item => (
              <div key={item.id} >
                <h1>{item.typefeature.name}:</h1> {item.feature.name}
              </div>
              ))}
              
          </div>

          
</main>  
    <Footer/>    
    </div>
)

}