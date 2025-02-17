import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
import { useUserContext } from '../../../Context/UserContext';

export const NavBar = () => {
  
  const { token, logout } = useUserContext();

  const handleLoginClick = () => {
   
    console.log("Login Button Clicked");
  };

  return (
    <>
      <Navbar expand="md" className="navbar-custom mb-3">
        <Container fluid style={{paddingLeft:'0px', marginLeft:'2rem', paddingRight:'0px', marginRight:'2rem', width:'100vw', height:'5rem'}}>
          <Navbar.Brand as={NavLink} to="/" end className={({ isActive }) => isActive ? "navbar-brand active-link" : "navbar-brand"} style={{fontWeight:'bold'}}>Nautilus Prestige</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/destinos" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Destinos</Nav.Link>
                <Nav.Link as={NavLink} to="/contacto" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Contacto</Nav.Link>

                
                {token ? (
                  <>
                    <Nav.Link as={NavLink} to="/profile" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Perfil</Nav.Link>
                  
                    <Button 
                      className='loginButton' 
                      style={{backgroundColor:'#0DBCAD', border: '2px solid #0DBCAD'}}
                      onClick={logout}
                    >
                      Cerrar sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Nav.Link as={NavLink} to="/register" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Registrarse</Nav.Link>
                  
                    <Button 
                      className='loginButton' 
                      style={{backgroundColor:'#0DBCAD', border: '2px solid #0DBCAD'}} 
                      href="#login" 
                      as={NavLink} 
                      to="/login"
                      onClick={handleLoginClick} 
                    >
                      Login
                    </Button>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;