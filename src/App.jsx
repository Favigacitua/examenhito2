import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './assets/vistas/Inicio/Inicio'
import { Contacto } from './assets/vistas/Contacto/Contacto'
import { Destino } from './assets/vistas/Destino/Destino'
import { Destinos } from './assets/vistas/Destinos/Destinos'
import { EditarPerfil } from './assets/vistas/EditarPerfil/EditarPerfil'
import { Favoritos } from './assets/vistas/Favoritos/Favoritos'
import { Login } from './assets/vistas/Login/Login'
import { Perfil } from './assets/vistas/Perfil/Perfil'
import { Register } from './assets/vistas/Register/Register'
import { NotFound } from './assets/vistas/NotFound/NotFound'
import { NavBar } from './assets/componentes/Navbar/Navbar'
import { Footer } from './assets/componentes/Footer/Footer'
import { Context } from './Context/Context'
import OnGoing from './assets/vistas/OnGoing/OnGoing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Context>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/destino' element={< Destino/>} />
        <Route path='/destinos' element={< Destinos/>} />
        <Route path='/editarperfil' element={< EditarPerfil/>} />
        <Route path='/favoritos' element={< Favoritos/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/perfil' element={< Perfil/>} />
        <Route path='/register' element={< Register/>} />
        <Route path='*' element={< NotFound/>} />
        <Route path='/ongoing' element={< OnGoing/>} />
      </Routes>
      <Footer/>
      </Context>
    </>
  ) 
}

export default App
