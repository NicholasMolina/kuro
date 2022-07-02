import React, {useState} from 'react'
import './styles/estilos.css'
import { Formulario2,MensajeError,MensajeExito, Boton , ContenedorBotonCentrado} from './elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';

const Singin2 = () => {
    const [correo,cambiarCorreo] = useState({campo: '', valido: null});
    const [password,cambiarPassword] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormulario] = useState(null);

const expresiones = {
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,		
	}
    
const onSubmit = (e) => {
    e.preventDefault();
    
    if(
        password.valido === 'true'  &&
        correo.valido === 'true'  
       
        ){
          cambiarPassword({campo: '', valido:null});       
          cambiarCorreo({campo: '', valido:null});        
        }else{
          cambiarFormulario(false);
        }
}

  return (
<div>
    <PreNavbar/>
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