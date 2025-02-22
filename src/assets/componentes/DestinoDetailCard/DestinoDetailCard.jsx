import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/Context'; // Importar el contexto
import './destinoDetailCard.css';

const DestinoDetailCard = () => {
  const { id } = useParams(); // Capturar el id de la URL
  const { cruceros } = useContext(MyContext); // Acceder a los cruceros desde el contexto
  
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    // Buscar el destino con el id correspondiente (comparando cadenas)
    const encontrado = cruceros.find((crucero) => crucero.id === id);
    setDestino(encontrado);
    console.log("Destino encontrado:", encontrado); // Comprobamos si se encontró el destino
  }, [id, cruceros]); // El efecto depende tanto del id como de los cruceros

  if (!destino) {
    return <p>Cargando destino...</p>; // Mensaje mientras se carga el destino
  }

  return (
    <div className="destino-detail-card">
      <img src={destino.image} alt={destino.name} className="destino-detail-image" />
      <div className="destino-detail-info">
        <h2>{destino.name}</h2>
        <p>{destino.description}</p>
        <p><strong>Precio por persona:</strong> ${destino.pricePerPerson}</p>
        <p><strong>Fechas:</strong> {destino.departureDate} - {destino.returnDate}</p>
        <p><strong>Capacidad:</strong> {destino.capacity}</p>
        <p><strong>Destinos:</strong> {destino.destinations.join(", ")}</p>
        <p><strong>Características:</strong> {destino.features.join(", ")}</p>
        <div className="reviews">
          <h3>Opiniones:</h3>
          {destino.reviews.map((review, index) => (
            <div key={index} className="review">
              <strong>{review.username}</strong> ({review.rating} estrellas): 
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinoDetailCard;
