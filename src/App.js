import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';
import Basket from './components2/Basket';
import Main from './components2/Main';
import './components2/styles/carrito.css';
import data from './components2/data';
import { useState } from 'react';



function App() {
 
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

    <div className='bg-[#2e0057]'>
      <PreNavbar/>
      <Navbar ></Navbar> 
      <Carousel/>
      <ImageSlider slides={SliderData}/>
      <div className=''>
        
      
      
      </div>
<Footer/>
         
 
      

    </div>
    
  );
}

export default App;
