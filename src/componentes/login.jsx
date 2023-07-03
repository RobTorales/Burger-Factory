import React from 'react'
import { useState } from 'react';
import './login.css';

 const Login  = () => {
    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre === "" || email === "" || password === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])
    }
  return (
    <div className="main-login">
        <div class="d-flex justify-content-center m-0 p-0 w-100">
                    <div className="contenedor-formulario border  m-2 card-size rounded p-2 my-4">
                        <form className="formulario" >
                         <img className="logo-login"src="../public/burger factory.png" alt=""/>
                            <div>
                                <h2 class="fs-3 fw-bold text-center">Inicio de Sesion</h2>
                            </div>
                            <div class="mb-3 m-2">
                                <label class="form-label m-0">Nombre</label>
                                <input type="name" class="form-control border border-grey"  value={nombre} onChange={e => setNombre(e.target.value)}/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Email</label>
                                <input type="text" class="form-control border border-grey" id="exampleInputEmail1" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Contraseña</label>
                                <input type="password"  class="form-control border border-grey" id="inputPassword5" aria-labelledby="passwordHelpBlock" value={password} onChange={e => setPasword(e.target.value)}/>
                            </div>
                            <div class="mb-3 m-2">
                                <div class="row d-flex justify-content-center">
                                    <button type="reset" class="btn btn-danger" onSubmit={handleSubmit}>Iniciar Sesion</button>
                                </div>
                            </div>
                            
                        </form>
                        {error && <p>Todos los campos son obligatorios</p>}
                    </div>
                </div>
                
    </div>
  )
}

export default Login;