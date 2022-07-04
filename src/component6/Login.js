import react,{useEffect, useState} from 'react';
//import {useHistory} from 'react-router-dom';


import { useNavigate } from 'react-router';

function Login(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('user-info')) {
           //navigate("/add")
        }
    },[])

    async function loginn(){
        console.warn(email,password);
        let item={email,password};
        let result = await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))

        if(JSON.stringify(result)!=1){
            alert("usuario ")
            navigate("/")


        window.location.href="./";    
        }else{
            alert("usuario incorrecto")


        }
        

        
 
        //history.push("/")

        
    }


    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Login pagina</h1>
            <div className="col-sm-6 offset-sm-3">
            
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
            <br />

            <input type="text" placeholder="contraseña" onChange={(e)=>setPassword(e.target.value)}  className="form-control" />
            <br />

            <button onClick={loginn} className="btn btn-primary" >Iniciar Sesion</button>
            
            </div>
        </div>
    )

}
export default Login;

