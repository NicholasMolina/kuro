import React from 'react'
import './styles/Footer.css'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram2.png'
import Twitter from './assets/twitter.png'
import casa from './assets/casa.png'
import email from './assets/email.png'
import telefono from './assets/telefono.png'

const Footer = () => {
  return (

    <footer className='primero'>

        <div className='container-footer-all'>
            <div className='container-body'>
                <div className='colum1'>

                    <h1>Mas informacion de la compañia</h1>
                    <p>Somos una marca nacional dedicada al desarrollo y comercialización de productos deportivos especializados en el futbol
                        . Estamos enfocados en potenciar a nuestros deportistas a alcanzar su mejor versión mediante la innovación.
                        Amazing Goalkeeper nace de la necesidad de una tienda espcializada en el deporte rey, el futbol</p>              
                </div>

                <div className='colum2'>

                    <h1>Redes Sociales</h1>

                    <div className='row'> 
                        <img src={facebook}></img>
                        <a href ="https://www.facebook.com/amazing.goalkeeper" > Siguenos en facebook </a> 
                    </div>
                    {/*<div className='row'> 
                        <img src={Twitter}></img>
                        <a href ="" > Siguenos en twitter </a>
  </div>*/}
                    <div className='row'> 
                        <img src={instagram}></img>
                        <a href ="https://www.instagram.com/amazing_goalkeeper/" > Siguenos en instagram</a>    
                    </div>
                </div>

                    <div className='column3'>
                        <h1>Informacion Contactos</h1>

                        <div className='row2'>
                            <img src={casa} className='invert'></img>
                            <label>Chile, ALgeciras, #444</label>
                        </div>

                        <div className='row2'>
                            <img src={telefono} className='invert'></img>
                            <label>+569 9735 4468</label>
                        </div>

                        <div className='row2'>
                            <img src={email} className='invert'></img>
                            <label>amazing_goalkeeper@gmail.com</label>
                        </div>
                </div> 
                       
            </div>
        </div>  
        <div className='container-footer'>
                    <div className='copyright'>
                    © todos los derechos reservados
                    <a href='https://www.instagram.com/p/CSCul3ULf-E/'target="_blank" >| Oso</a>
                    </div>
                    <div className='informacion'>
                        <a href=''>Informacion Compañia</a> |
                        <a href=''>Privacion y Politica</a> |
                        <a href=''>Terminos y Condiciones</a>
                    </div>
                </div>
              
    </footer>
    

  )
}

export default Footer