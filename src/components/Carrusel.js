import React from 'react'
import op from './assets/op1.png'
import op2 from './assets/op2.png'
import op3 from './assets/op3.png'


const Carrusel = () => {
  return (
    <div className='w-full select-none relative '>
    <div className=' aspect-w-16 aspect-h-9'>
        <img src={op} alt=''/>
    </div>
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3
        bg-red-400 flex justify-between item-center'>
            <button>Anterior</button>
            <button>Siguiente</button>
        </div>       
</div>
  )
}

export default Carrusel