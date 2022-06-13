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


export default function  Details (props){
//console.log(useParams());
    const{id} = useParams()
    console.log(id)
    const[details, setDetails] = useState([]);
    //const[categories,setCategories] = useState([]);
    //const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/${id}`;
    const urll =`https://rickandmortyapi.com/api/character/${id}`;
    
    const fetchApi = async () => {
        const data = await fetch(urll);
        const details = await data.json()
        setDetails(details)
        console.log(details)
        //setDetails(details.product)
        //setCategories(details.product.category)

        //console.log(details.product)
        //console.log(details.category.name)
        //console.log(details.product.name)


        //const i = Pruebas(details.product.category_id)
    } 

  
    useEffect(() => {
      fetchApi(urll)
    },[])
   

// ----------------------------Basket-------------------------------

const {onAdd,onRemove,cartItems} = props;


const[isSideMenuOpen, setisSideMenuOpen ] = useState(false);
const showSideMenu = () => {(isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)}


  function SideMenu() {
    return(
      <div className='absolute right-1 top-36 h-screen w-1/4 bg-transparent '>
         <Basket
           onAdd={onAdd}
           onRemove={onRemove}
          cartItems={cartItems}
          ></Basket>
      </div>
    )
    }
// -----------------Stylo basket-------------------

const [style, setStyle] = useState("");

  const changeStyle = () => {
    {(style == "cont3") ? setStyle("cont2") : setStyle("cont3")}
  };


return(
    <div className='bg-[#2e0057]'>
    <PreNavbar/>

{/* ------------------------------Nabvar----------- */}
      <nav className="flex items-center bg-[#f6d3ff]">
        <div className=" flex items-center flex-shrink-0 text-black mr-6">
          <Link to = {'/Home'}>
            <img src= {Alogo} className='  w-[120px] p-1'/>
          </Link>  
        </div>

          <div className="text-xl pr-2 ">

              <a href="/Guantes" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Guantes de portero
              </a>

              <a href="/Zapatos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Zapatos
              </a>

              <a href="/Accesorio" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
                Accesorios
              </a>

              <a href="#/cart" className='block mt-4 lg:inline-block lg:mt-0 '>
                  <button  onClick={() =>{showSideMenu();changeStyle(style)}}  className='bg-transparent right-2 z-10'>
                  {(isSideMenuOpen) ?
                    <Icon path={mdiClose} size={'50px'} color="red"></Icon> :
                    <Icon path={mdiCartOutline} size={'50px'} color="black" > </Icon> }
                  </button>

                {(isSideMenuOpen ) ? SideMenu() : ""}
              </a>
          </div>
        </nav>

{/* ------------------------------------------------------------------------------------ */}
    
    <main className='block2 flex flex-row justify-center'>
     
        <img className='w-[35%]' src={details.image} alt={details.name}></img>
          <div className=' m-4'>
          {/*<h3>{categories.name}</h3>*/}
            <h1>{details.name}</h1>
            <h3>${details.price}</h3>
            {/*<Pruebas pruebas2={details.id}></Pruebas>*/}
              <div className='pt-6'>
                <button className="Zoom"> AGREGAR A CARRO DE COMPRA</button>
              </div>
          </div>
          
</main>  
    <Footer/>    
    </div>
)

}