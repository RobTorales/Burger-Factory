import {useState} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  HomePage  from "./componentes/homepage";
import  DashBoard  from "./componentes/dashboard";
import  RegisterPage  from "./componentes/registerpage";
import  Nav  from "./componentes/nav";
import  Login from "./componentes/login";
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Nav/>}>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/homepage"element={<HomePage/>}/>
                <Route path="dashboard" element={<DashBoard/>}/>
                <Route path="*" element={<h4>Error 404: Page not found</h4>}/>
              </Route>
              
      </Routes>
    </BrowserRouter>
  )
}

export default App
