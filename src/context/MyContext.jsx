import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    
    const [PokemonesData, setPokemonesData] = useState([]);

    useEffect(() => {
        const TraerDatos = async () => {
            try {
                const RespuestaFetch = await fetch('https://pokeapi.co/api/v2/pokemon/');
                if (!RespuestaFetch.ok) {
                    throw new Error("No hay respuesta del servidor");
                }
                const Data = await RespuestaFetch.json();
                setPokemonesData(Data.results);
                console.log(Data.results);
            } catch (error) {
                console.error("Hubo un error al traer los datos", error);
            }
        };

        TraerDatos();
    }, []);
   
    return (
        <MyContext.Provider value={{PokemonesData, setPokemonesData}}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
