import { NavLink } from "react-router-dom";

const NavBar = () => {
    const Estado = ({ isActive }) => (isActive ? 'activo' : 'desactivado');

    return (
        <nav>
            <div className="logo">
                <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokemon_go_icon_138275.png" alt="Pokemon" />
            </div>
            <div className="links">
                <NavLink className={Estado} to={'/'}>Home</NavLink>
                <NavLink className={Estado} to={'/pokemones'}>Pokemones</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;

