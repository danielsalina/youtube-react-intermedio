import { Link, NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return ( 
        <nav>
            {/* <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul> */}
            {/* <ul>
                <li><NavLink end style={({isActive}) => {return {color: isActive ? "green" : "red"}}} to="/">Inicio</NavLink></li>
                <li><NavLink end style={({isActive}) => {return {color: isActive ? "green" : "red"}}} to="/registro">Registro</NavLink></li>
                <li><NavLink end style={({isActive}) => {return {color: isActive ? "green" : "red"}}} to="/login">Login</NavLink></li>
            </ul> */}
            <ul>
                <li><NavLink end className={({isActive}) => isActive ? "activo" : "" } to="/">Inicio</NavLink></li>
                <li><NavLink end className={({isActive}) => isActive ? "activo" : "" } to="/registro">Registro</NavLink></li>
                <li><NavLink end className={({isActive}) => isActive ? "activo" : "" } to="/login">Login</NavLink></li>
                <li><NavLink end className={({isActive}) => isActive ? "activo" : "" } to="/users/777">Número de id</NavLink></li>
                <li><NavLink end className={({isActive}) => isActive ? "activo" : "" } to="/users/777/Daniel">Ver datos</NavLink></li>
            </ul>
        </nav>
     );
}

export default Menu;