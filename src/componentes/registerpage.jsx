import React from 'react'
import { useState } from 'react'

 const RegisterPage = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleNombreChange = (e) => {
        setNombre(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Iniciar sesión:', email, password, nombre);
      };

  return (
    <div class="d-flex justify-content-center m-0 p-0 w-100">
                    <div className="contenedor-formulario border  m-2 card-size rounded p-2 my-4">
                        <form className="formulario" onSubmit={handleSubmit}>
                         <img className="logo-login"src="../public/burger factory.png" alt=""/>
                            <div>
                                <h2 class="fs-3 fw-bold text-center">Registrarse</h2>
                            </div>
                            <div class="mb-3 m-2">
                                <label class="form-label m-0">Nombre</label>
                                <input type="name" class="form-control border border-grey"  value={nombre} onChange={handleNombreChange}/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Email</label>
                                <input type="text" class="form-control border border-grey" id="exampleInputEmail1" value={email} onChange={handleEmailChange} autoComplete='off'/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Contraseña</label>
                                <input type="password"  class="form-control border border-grey" id="inputPassword5" aria-labelledby="passwordHelpBlock" value={password} onChange={handlePasswordChange} autoComplete='off'/>
                            </div>
                            <div class="mb-3 m-2">
                                <div class="row d-flex justify-content-center">
                                    <button type="submit" class="btn btn-danger">Registrarse</button>
                                </div>
                            </div>
                            
                        </form>
                       
                    </div>
                </div>
  )
}

export default RegisterPage