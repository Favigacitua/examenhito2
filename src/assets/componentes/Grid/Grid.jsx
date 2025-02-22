import React, { useContext } from 'react';
import { MyContext } from '../../../Context/Context';
import CardViaje from '../CardViaje/CardViaje';
import './grid.css';

export const Grid = () => {
  const { destinos } = useContext(MyContext);  // Usando 'destinos' desde el contexto

  return (
    <div className='viajes'>
      {destinos.map(d => (  // Iterando sobre los 'destinos'
     <CardViaje 
     key={d.id} 
     name={d.name} 
     url={d.image} 
     description={d.description} 
     price={d.pricePerPerson}
   />
   
      ))}
    </div>
  );
};
