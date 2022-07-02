import React from 'react'
import {Input, Label ,GrupoInput,IconoValidacion, LeyendaError } from './elementos/Formulario';
import {faCircleCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons';


const ComponenteInput = ({estado,funcion, cambiarEstado, label, placeholder,tipo,name, leyendaError,expresionRegular}) => {
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value})
    }

    const Validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
             } else{
                cambiarEstado({...estado, valido: 'false'});
             }
        }

        if(funcion){
            funcion();
        }
    }
  
    return (
    <div>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>
            <Input 
                type={tipo} 
                placeholder={placeholder}
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={Validacion}
                onBlur={Validacion}
                valido={estado.valido}
            />
            
            <IconoValidacion 
                icon={estado.valido === 'true' ? faCircleCheck: faTimesCircle} 
                valido={estado.valido}

            />
        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  )
}
export default ComponenteInput