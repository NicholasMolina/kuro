import { BrowserRouter,Route,Router,Routes,Link} from "react-router-dom";
import Navbar from './Navbar';
import PreNavbar from './PreNavbar';
import ImageSlider from './ImageSlider';
import { SliderData }  from './SliderData';
import Footer from './Footer';
//import Basket from './components2/Basket';
//import './components2/styles/carrito.css';
import { useState } from 'react';
import data from '../components2/data';
import Bot from  '../components3/Bot';
import Recomendador from "../components3/Recomendador";
import Carousel from "./Carousel";



function Home() {

  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        ) 
      );
    } else{
      setCartItems([...cartItems, {...product,qty:1}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist,qty: exist.qty - 1}: x
        )
      );
    }
  }

  return (

    <div className='bg-[#2e0057]' onClick={() => window.location.reload()}>
      <PreNavbar/>
      <Navbar ></Navbar> 
      <Carousel/>
      <Bot></Bot>
<Footer/>

    </div>

    
  );

  }



export default Home;