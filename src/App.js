import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import ImageSlider from './components/ImageSlider';
import { SliderData }  from './components/SliderData';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';
import Products from './components/Products';
import { CartProvider } from './Context/CartContext';
import Basket from './components2/Basket';
import Main from './components2/Main';
import './components2/carrito.css';
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
      <Navbar countCartItems={cartItems.length}></Navbar> 
      <Carousel/>
      <ImageSlider slides={SliderData}/>
      <div className=''>
        <div className='row'>
          <Main onAdd={onAdd} products = {products}></Main>
          <Basket 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems}
          ></Basket>
        </div>
      <Footer/>
      
      </div>

         
 
      

    </div>
    
  );
}

export default App;
