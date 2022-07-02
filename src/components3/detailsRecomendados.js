import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';


export default function  Details ({id}){
   // console.log(useParams())
    console.log(id)
    //const[details, setDetails] = useState([]);
    //const[categories,setCategories] = useState([]);

    //const[stock,setStock] = useState([]);
    //const[sizes,setSizes] = useState([]);

    const[cc,setCc] = useState([]);
    const[feature,setFeature] = useState([]);
    const[tf,setTypeF] = useState([]);

    //const urll = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/product/${id}`;
    //const urll2 =`http://localhost/proyectoag/api-rest-laravel-ag/public/api/stock/product/${id}`;
    const urll3 = `http://localhost/proyectoag/api-rest-laravel-ag/public/api/cc/product/${id}`;
    //const urll =`https://rickandmortyapi.com/api/character/${id}`;

  




    useEffect(() => {
      const fetchApi = async () => {
        const data = await fetch(urll3);
        const ss = await data.json()
        setCc(ss.cc);
        setFeature(ss.cc.feature)
        setTypeF(ss.cc.typefeature)
        
      }
      fetchApi(urll3)
      
    },[])
   
return(


    

     
          <div className=' m-4'>
              {cc.map(item => (
              <div key={item.id} >
                <h3>{item.typefeature.name}: {item.feature.name} </h3>
              </div>
              ))}
              
          </div>
          
)

}