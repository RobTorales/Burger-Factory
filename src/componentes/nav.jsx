import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

 const Nav = () => {
  return (<header className="header">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to="/"><img src="../public/burger factory.png" alt=""/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/login">Iniciar Sesion</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register">Registrarse</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar"/>
                        <button class="btn btn-danger" type="submit">Buscar</button>
                        <span>Roberto</span>
                        <button type="button" class="btn btn-danger">Cerrar Sesion</button>
                    </form>
                    </div>
                </div>
            </nav>
        <Outlet/>
    </header>
        
    
  )
}

export default Nav