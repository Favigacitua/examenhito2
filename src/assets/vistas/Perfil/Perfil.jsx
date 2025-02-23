import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./perfil.css";

export const Perfil = () => {
  const misDestinos = useRef(null);
  const mispublicaciones = useRef(null);
  
  const [calificacion, setCalificacion] = useState("");

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || (value >= 1 && value <= 5)) {
      setCalificacion(value);
    }
  };

  return (
    <div className="perfilcontainer">
      <div className="datos">
        <h1 style={{ color: "#0DBCAD", fontSize: "clamp(50px, 4vw, 24px)", padding: '2rem' }}>Nombre</h1>
        <div className="botonesperfil">
          <Button
            className="misdestinos"
            style={{ backgroundColor: "lightgrey", border: "2px solid grey", color: "#0DBCAD", margin: '1rem' }}
            onClick={() => scrollToSection(misDestinos)}
          > 
            Mis destinos
          </Button>
          <Button
            className="mispublicaciones"
            style={{ backgroundColor: "lightgrey", border: "2px solid grey", color: "#0DBCAD", margin: '1rem' }}
            onClick={() => scrollToSection(mispublicaciones)}
          >
            Mis Publicaciones
          </Button>
          <Button
            className="Editar perfil"
            style={{ backgroundColor: "#0DBCAD", border: "2px solid #0DBCAD", margin: '1rem' }}
            as={NavLink}
            to="/editarperfil"
          >
            Editar perfil
          </Button>
        </div>
        <div>
          <div className="imagendeperfil">
            <img className="imagen" src="/sinimagen.png" alt="imagendeperfil" />
          </div>
        </div>       
      </div>
      <div className="misexperiencias">
        <div className="misdestinos">
          <h3 style={{ color: "#0DBCAD" }}>Mis Destinos</h3>
          <div>
            <p>Card de destino</p>
          </div>
        </div>

        <div className="mispublicaciones">
          <h3 style={{ color: "#0DBCAD" }}>Mis publicaciones</h3>
          <div>
            <p>Card de publicaciones</p>
          </div>
        </div>
      </div>
      <div className="enviarpublicacion">
        <h1 className="titulo" style={{ color: "#0DBCAD", fontSize: "clamp(50px, 4vw, 24px)", padding: '2rem' }}>Califica tus viajes</h1>

        <Form className="formulariopublicacion">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Destino</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el destino" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Calificación</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Ingrese una calificación (1-5)" 
              value={calificacion}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cuenta tu experiencia</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Cuenta tu experiencia"
            />
          </Form.Group>
          <Button
            style={{ backgroundColor: "#0DBCAD", border: "2px solid #0DBCAD" }}
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Perfil;
