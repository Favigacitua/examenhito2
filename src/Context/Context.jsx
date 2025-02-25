import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext({});

export const Context = ({ children }) => {
  const [cruceros, setCruceros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('/cruceros.json');
        const data = await response.json();
        console.log("Cruceros cargados desde JSON:", data);
        
        setCruceros(data.cruceros);  
        setViajes(data.cruceros);     
      } catch (error) {
        console.error("Error al obtener los cruceros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 

  }, []); 

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