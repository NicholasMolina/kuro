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
                    <p>Uno de estos es One Piece, la creación de Eiichirō Oda elegida como el manga más popular por el 
                        publico japonés, según la encuesta de TV Asahi. En la lista le siguieron Demon Slayer,
                        Slam Dunk, Detective Conan y, finalmente, Dragon Ball.</p>              
                </div>

                <div className='colum2'>

                    <h1>Redes Sociales</h1>

                    <div className='row'> 
                        <img src={facebook}></img>
                        <a href ="https://www.facebook.com/amazing.goalkeeper" > Siguenos en facebook </a> 
                    </div>
                    <div className='row'> 
                        <img src={Twitter}></img>
                        <a href ="" > Siguenos en twitter </a>
                    </div>
                    <div className='row'> 
                        <img src={instagram}></img>
                        <a href ="" > Siguenos en insta</a> 
                    </div>
                </div>

                    <div className='column3'>
                        <h1>Informacion Contactos</h1>

                        <div className='row2'>
                            <img src={casa} className='invert'></img>
                            <label>direccion</label>
                        </div>

                        <div className='row2'>
                            <img src={telefono} className='invert'></img>
                            <label>+56997354468</label>
                        </div>

                        <div className='row2'>
                            <img src={email} className='invert'></img>
                            <label>email</label>
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