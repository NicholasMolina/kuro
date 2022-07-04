import React, {useState} from 'react'

function Register()
{
    const[nombre,setName] = useState("")
    const[surname,setSurname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    


    async function Singup()
    {
        let item={nombre,surname,email,password}
        console.warn(item)

        let result = await fetch("http://localhost/proyectoag/api-rest-laravel-ag/public/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
          "Content-type":'application/json',
           "Accept":'application/json'
           }
        })
        result = await result.json()
        console.warn("result",result)
    }

    return(
        <div>
            <input type="text" value={nombre} onChange={(e)=>setName(e.target.value)} className="" placeholder='name'  />
            <br/>
            <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} className="" placeholder='surname'  />
            <br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="" placeholder='email'  />
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="" placeholder='contraseña'  />
            <br/>

            <button onClick={Singup}>registrar</button>
        </div>
    )
}
export default Register