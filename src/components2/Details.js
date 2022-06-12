import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Details = () => {
//console.log(useParams());
    const{id} = useParams()
    console.log(id)

    const[details, setDetails] = useState([]);

    //const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/${id}`;
    const urll =`https://rickandmortyapi.com/api/character/${id}`;
    const fetchApi = async () => {
        const data = await fetch(urll);
        const details = await data.json()
        //setDetails(details.product)
        //console.log(details.product)
        setDetails(details)
        console.log(details)
      }
  
    useEffect(() => {
      fetchApi(urll)
    },[])

return(
    <div className='bg-[#2e0057]'>
    <PreNavbar/>
    <Navbar/>
    
    <main className='block2 col-2'>
        
        <img className='small ' src={details.image} alt={details.name}></img>
        <h1>{details.name},{details.status}</h1>
        
</main>  
    <Footer/>    
    </div>
)

}
export default Details; 