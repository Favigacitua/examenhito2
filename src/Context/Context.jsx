import React, { Children, useEffect, useState } from 'react'


export const MyContext= createContext({})



export const Context = ({children}) => {

    //logica global

    const [viajes, setViajes] = useState([])
    // const [page, setPage]= useState(1) no piden paginacion, no creo que deberiamos hacerla por que tiempo 

    useEffect(() => {
       
        viajesFetch()

    }, [])
    
    const viajesFetch = async() => {
       
        const response = await fetch("/http://localhost:3000/viajes")
        const data = await response.json()
        console.log(data)

     }

    //  useEffect(() => {
    //    const response = await fetch (`/http://localhost:3000/viajes${page}`)
     
    //  }, [page])
     

     

    const globalState = { //almacena todo los estados y const que se pasan a la aplicacion
        viajes
        //page
     }


  return (
    <MyContext.Provider value={globalState}>
        {Children}

    </MyContext.Provider>
  )
}
