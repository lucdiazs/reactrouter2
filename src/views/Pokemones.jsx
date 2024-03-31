// Pokemones.jsx
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
    const { PokemonesData } = useContext(MyContext);
    const Navigate = useNavigate();
    const [PokemonSeleccionado, setPokemonSeleccionado] = useState('');

    if (!PokemonesData) {
        return <p>Cargando...</p>;
    }

    const GuardarPokemon = (event) => {
        setPokemonSeleccionado(event.target.value);
    };

    const ClickDetalles = () => {
        if (PokemonSeleccionado) {
            Navigate(`/pokemones/${PokemonSeleccionado}/`);
        }
    };

    return (
        <div className="container">
            <h1>Selecciona un pokemon</h1>
            <select onChange={GuardarPokemon} value={PokemonSeleccionado} name="" id="">
                <option value="">Selecciona un pokemon</option>
                {PokemonesData.map((element, index) => (
                    <option value={element.url.split("/")[6]} key={index}>
                        {element.name}
                    </option>
                ))}
            </select>
            <button onClick={ClickDetalles}>Ver Detalle</button>
        </div>
    );
};

export default Pokemones;
