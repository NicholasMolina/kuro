import React, {useState,useEffect} from 'react'
import './styles/estilos.css'
import { Formulario2,MensajeError,MensajeExito, Boton , ContenedorBotonCentrado} from './elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';

const Singin2 = () => {
    const [correo,cambiarCorreo] = useState({campo: '', valido: null});
    const [password,cambiarPassword] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormulario] = useState(null);
    const navigate = useNavigate();
    const valor = 0;
const expresiones = {
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,		    
	}

  useEffect(()=>{
    if(localStorage.getItem('user-info')) {
       //navigate("/add")
    }
},[])

    
const onSubmit = async (e) => {
    valor = 1;
    e.preventDefault();
    
    if(
        password.valido === 'true'  &&
        correo.valido === 'true'  
       
        ){

        
          let ingreso = {
            email: '',
            password: ''
          }


          ingreso.email = correo.campo
          ingreso.password = password.campo

          console.warn(ingreso);
         
          let result = await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/login",{
              method:'POST',
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json"
              },
              body:JSON.stringify(ingreso)
          });
          result= await result.json();
          localStorage.setItem("user-info",JSON.stringify(result))
  
          if(JSON.stringify(result)!=1){
               
              navigate("/")
  
  
          window.location.href="./";    
          }else{
              alert("usuario incorrecto")
  
  
          }         





          cambiarPassword({campo: '', valido:null});       
          cambiarCorreo({campo: '', valido:null});        
        }else{
          cambiarFormulario(false);
        }
}

  return (
<div>
    <PreNavbar valor={valor}/>
    <Navbar/>
    <main className='main3'>
        

        <Formulario2 action='' onSubmit={onSubmit}>
            <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electronico"
            placeholder="correo@correo.com"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
            />
            <Input
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            name="password1"
            leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
            expresionRegular={expresiones.password}
            />


                {formularioValido  === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Por Favor llenar los campos correctamente.
                    </p>     
                </MensajeError>}

                <ContenedorBotonCentrado>
                    <Boton type='submit' className=' hover:bg-[#2e0057] '>Iniciar Sesion</Boton>
                    {formularioValido  && <MensajeExito>Sesion iniciada exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>


        </Formulario2>
    </main>
</div>

  )
}

export default Singin2