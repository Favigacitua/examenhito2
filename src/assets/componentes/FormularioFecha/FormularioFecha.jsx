import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './formularioFecha.css';

const FormularioFecha = () => {
  const [destino, setDestino] = useState('');
  const [fechaInicio, setFechaInicio] = useState(null);

  return (
    <Container className='formulario'>
      <Form>
        <Form.Group controlId="destino" className='destino'>
          <FontAwesomeIcon icon={faLocationDot} style={{ margin: 'auto' }} />
          <Form.Control
            type="text"
            placeholder="Destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="form-control"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white'
            }}
          />
        </Form.Group>
      </Form>

      <p style={{ color: 'white', margin: '5px', }}>|</p>

      <Form>
        <Form.Group controlId="fechaInicio" className='inicio'>
          <FontAwesomeIcon icon={faCalendarDays} style={{ margin: 'auto' }} />
          <DatePicker
            selected={fechaInicio}
            onChange={(date) => setFechaInicio(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Fecha"
            className="form-control"
          />
        </Form.Group>
      </Form>

      <Button type="submit" className='button' style={{ backgroundColor: '#0DBCAD', border: '2px solid #0DBCAD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='buttonicon' style={{ textAlign: 'center' }} />
      </Button>
    </Container>
  );
};

export default FormularioFecha;
