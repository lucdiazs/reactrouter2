import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CardDetalle = () => {
    const { id } = useParams();
    const [GuardarPokemon, setGuardarPokemon] = useState();

    useEffect(() => {
        if (id) {
            const TraerDatos2 = async () => {
                try {
                    const RespuestaFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                    if (!RespuestaFetch.ok) {
                        throw new Error("No hay respuesta del servidor");
                    }
                    const Data = await RespuestaFetch.json();
                    setGuardarPokemon(Data);
                } catch (error) {
                    console.error("Hubo un error al traer los datos", error);
                }
            };
            TraerDatos2();
        }
    }, [id]);
    

    console.log(GuardarPokemon);

    if (!GuardarPokemon) {
        return <p>Cargando...</p>;
    } else {
        return (
            <div className="card-container"> {/* Contenedor para centrar y aplicar estilos */}
                <img className="pokemon-image" src={GuardarPokemon.sprites.front_default} alt="" />
                <h1>{GuardarPokemon.name}</h1>
                <h4>hp: {GuardarPokemon.stats[0].base_stat}</h4>
                <h4>attack: {GuardarPokemon.stats[1].base_stat}</h4>
                <h4>defense: {GuardarPokemon.stats[2].base_stat}</h4>
                <h4>special attack: {GuardarPokemon.stats[3].base_stat}</h4>
                <h4>special defense: {GuardarPokemon.stats[4].base_stat}</h4>
                <h4>speed: {GuardarPokemon.stats[5].base_stat}</h4>
                <h4>Type: {GuardarPokemon.types[0].type.name}</h4>
            </div>
        );        
    }
};

export default CardDetalle;
