import React, {useState} from 'react'
import "./styles/estilos.css"
import { Formulario, Label ,MensajeError,MensajeExito, Boton , ContenedorBotonCentrado, ContenedorTerminos } from './elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import PreNavbar from '../components/PreNavbar';
import Navbar from '../components/Navbar';

const Singup = () => {
  const [usuario,cambiarUsuario] = useState({campo: '', valido: null});
  const [nombre,cambiarNombre] = useState({campo: '', valido: null});
  const [password,cambiarPassword] = useState({campo: '', valido: null});
  const [password2,cambiarPassword2] = useState({campo: '', valido: null});
  const [correo,cambiarCorreo] = useState({campo: '', valido: null});
  const [telefono,cambiarTelefono] = useState({campo: '', valido: null});
  const [terminos,cambiarTerminos] = useState(false);
  const [formularioValido,cambiarFormulario] = useState(null);

  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{11}$/ // 7 a 14 numeros.
	}

  const validarPassword2 = () => {
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        cambiarPassword2((prevState) => {
          return{...prevState, valido: 'false'}
        });  
      }else {
        cambiarPassword2((prevState) => {
          return{...prevState, valido: 'true'}
      });
    }  
  }}

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked)
  }

  const onSubmit = async (e) => {
    e.preventDefault();

  


    if(
      usuario.valido === 'true'  && 
      nombre.valido === 'true'  &&
      password.valido === 'true'  &&
      password2.valido === 'true'  &&
      correo.valido === 'true'  &&
      telefono.valido === 'true'  &&
      terminos
      ){

        const item = {
          name: '',
          surname: '',
          email: '',
          password: ''
        }
           
    //  let item={usuario,nombre,correo,password}

    item.name = usuario.campo
    item.surname = nombre.campo
    item.email = correo.campo
    item.password = password.campo

    console.warn(item);

    let result= await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'  
        }
    });
    result = await result.json();
    console.warn("result",result);
    if(JSON.stringify(result)!=1){
               
      alert("Usuario Agregado correctamente")


  window.location.href="./"; 
  }else{
      alert("Registro Fallido: el correo ya se encuentra registrado")


  }  







        cambiarFormulario(true);
        cambiarUsuario({campo: '', valido:''});
        cambiarNombre({campo: '', valido:null});
        cambiarPassword({campo: '', valido:null});
        cambiarPassword2({campo: '', valido:'null'});
        cambiarCorreo({campo: '', valido:null});
        cambiarTelefono({campo: '', valido:null});
      }else{
        cambiarFormulario(false);
      }
  } 

  return (
    <div>
    <PreNavbar/>
    <Navbar/> 
    <main className='main2'>
      <Formulario action='' onSubmit={onSubmit}>
        <Input
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo="text"
          label="Nombre"
          placeholder="Nombre"
          name="nombre"
          leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede  contener numeros, letras y guion bajo."
          expresionRegular={expresiones.usuario}
        />
         <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Apellido"
          placeholder="Apellido"
          name="apellido"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
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
         <Input
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo="password"
          label="Repetir Contraseña"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
          <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electronico"
          placeholder="correo@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guin bajo."
          expresionRegular={expresiones.correo}
        />
          <Input
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Telefono"
          placeholder="56985459532"
          name="telefono"
          leyendaError="El telefono solo puede contener numeros y  son 11 digítos"
          expresionRegular={expresiones.telefono}
        />
      
        
           

        <ContenedorTerminos>
          <Label> 
            <input 
              type="checkbox" 
              name="terminos"
              id="terminos" 
              checked={terminos}
              onChange={onChangeTerminos}
             />
            Acepto los Terminos y Condiciones
          </Label>   
        </ContenedorTerminos>
        {formularioValido  === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por Favor rellena el formulario correctamente.
          </p>     
        </MensajeError>}  
        <ContenedorBotonCentrado>
          <Boton type='submit' className=' hover:bg-[#2e0057]'>Enviar</Boton>
        {/*formularioValido  && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>*/}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
    </div>
  )
}

  
export default Singup