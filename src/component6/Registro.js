import react,{useState} from 'react';

function Registro(){

const[name,setName]=useState("");
const[surname,setSurname]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

async function signUp(){
    let item={name,surname,email,password}
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
 
}

    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Registro pagina</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
            <br />
            <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} className="form-control" placeholder="surname" />
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <button onClick={signUp} className="btn btn primary">Registrar</button>
        </div>
    )

}
export default Registro;

