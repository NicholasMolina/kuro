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
import Relacion from '../components4/Relacion';


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
   

// ----------------------------Descontar stock-------------------------------

const[product,setProduct]=useState("");
const[talla,setTalla]=useState("");
const[cantidad,setCantidad]=useState("");

async function add(){
  let item={product,talla,cantidad}
  console.warn(item);

  let result= await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/bystock",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
          "Content-Type":'application/json',
          "Accept":'application/json'  
      }
  });
  result = await result.json();
  console.warn("result",result);

}


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
            <h1>ID {details.id}</h1>

            <h4>ID  Talla Disponible</h4>
            {stock.map(item => (
              <div key={item.id} >
                 {item.size.id}  |  {item.size.size} | {item.quantity}
              </div>
            ))}
            <div>
              
              <input type="text" value={product} onChange={(e)=>setProduct(e.target.value)} className="form-control" placeholder="Id Product" />
              <br />
              <input type="text" value={talla} onChange={(e)=>setTalla(e.target.value)} className="form-control" placeholder="Ingrese Talla" />
              <br />
              <input type="text" value={cantidad} onChange={(e)=>setCantidad(e.target.value)} className="form-control" placeholder="Ingrese Cantidad" />
              <br />

              <button className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#f6d3ff]" onClick={add} >COMPRAR</button>
              </div>

              {cc.map(item => (
              <div key={item.id} >
                <h1>{item.typefeature.name}:</h1> {item.feature.name}
              </div>
              ))}

            
              
              
          </div>

          
</main>  
    <Relacion/>
    <Footer/>    
    </div>
)

}