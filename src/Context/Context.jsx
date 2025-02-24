import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext({});

export const Context = ({ children }) => {
  const [cruceros, setCruceros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    fetchCruceros();
  }, []);

  const fetchCruceros = async () => {
    try {
      const response = await fetch('/cruceros.json');
      const data = await response.json();
      console.log("Cruceros cargados desde JSON:", data);
      setCruceros(data.cruceros);
    } catch (error) {
      console.error("Error al obtener los cruceros:", error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    // Cargar el archivo cruceros.json
    const fetchViajes = async () => {
      try {
        const response = await fetch('/cruceros.json'); // Ruta al archivo JSON en la carpeta public
        const data = await response.json(); // Convertir la respuesta en JSON
        setViajes(data.cruceros); // Ahora accedemos a la clave 'cruceros' del JSON
      } catch (error) {
        console.error('Error al obtener los viajes:', error);
        setViajes([]); // En caso de error, dejamos el estado vacío
      }
    };
    fetchViajes();
  }, [])

  const globalState = {
    cruceros,
    loading,
    viajes,
  };

  return (
    <MyContext.Provider value={globalState}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;