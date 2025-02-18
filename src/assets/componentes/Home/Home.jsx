import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUserContext } from '../../../Context/UserContext';
import FormularioFecha from '../FormularioFecha/FormularioFecha';
import './home.css';

export const Home = () => {
  const { token, logout } = useUserContext();

  const handleLoginClick = () => {
    console.log("Login Button Clicked");
  };

  // Estado para controlar el Offcanvas
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div className='homestyle'>
      <div>
        <Navbar expand="md" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Container fluid style={{ padding: '0px', marginLeft: '1rem', marginRight: '1rem', width: '100vw', height: '2rem' }}>
          <Navbar.Brand
            as={NavLink}
            to="/"
            end
            className={({ isActive }) => isActive ? "navbar-brand active-link" : "navbar-brand"}
            style={{ fontWeight: 'bold', color:'white' }}
          >
            Nautilus Prestige
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={handleShow} />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
              show={showOffcanvas}
              onHide={handleClose}
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={NavLink}
                    to="/destinos"
                    onClick={handleClose} // Cierra el offcanvas al hacer clic
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                  >
                    Destinos
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/contacto"
                    onClick={handleClose} // Cierra el offcanvas al hacer clic
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                  >
                    Contacto
                  </Nav.Link>

                  {token ? (
                    <>
                      <Nav.Link
                        as={NavLink}
                        to="/profile"
                        onClick={handleClose} // Cierra el offcanvas al hacer clic
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                      >
                        Perfil
                      </Nav.Link>
                      <Button
                        className='loginButton'
                        style={{ backgroundColor: '#0DBCAD', border: '2px solid #0DBCAD' }}
                        onClick={() => { logout(); handleClose(); }} // Cierra al cerrar sesión
                      >
                        Cerrar sesión
                      </Button>
                    </>
                  ) : (
                    <>
                      <Nav.Link
                        as={NavLink}
                        to="/register"
                        onClick={handleClose} // Cierra el offcanvas al hacer clic
                        className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                      >
                        Registrarse
                      </Nav.Link>
                      <Button
                        className='loginButton'
                        style={{ backgroundColor: '#0DBCAD', border: '2px solid #0DBCAD' }}
                        as={NavLink}
                        to="/login"
                        onClick={() => { handleLoginClick(); handleClose(); }} // Cierra al hacer clic
                      >
                        Iniciar Sesion
                      </Button>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <div>
          <img src='/viajaconnosotros.png' alt='viaja-con-nosotros' style={{ width: '12rem', marginLeft: '1rem' }} />
        </div>
        <div>
          <h3 className='titulo'>Vamonos!</h3>
          <p className='bajadatitulo'>Elije una fecha y nosotros cumplimos tus sueños</p>
        </div>
        <div className='formulariofecha'>
          <FormularioFecha />
        </div>
      </div>
    </div>
  );
};

export default Home;
