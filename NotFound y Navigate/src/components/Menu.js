import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
     );
}

export default Menu;