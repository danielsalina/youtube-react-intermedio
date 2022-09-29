import { NavLink } from "react-router-dom";
import "./LinkNav.css"

export default function LinkNav() {
    
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/" style={({ isActive }) => {return {color: isActive ? "green" : "red" } }}> Home </NavLink>
        </li>
        <li>
          <NavLink end to="/login" style={({ isActive }) => {return {color: isActive ? "green" : "red" } }}> Login </NavLink>
        </li>
        <li>
          <NavLink end to="/registro" style={({ isActive }) => {return {color: isActive ? "green" : "red" } }}> Registro </NavLink>
        </li>
      </ul>
      {/* <ul>
        <li>
          <NavLink end to="/" className={({ isActive }) => isActive ? "active" : "" } > Home </NavLink>
        </li>
        <li>
          <NavLink end to="/login" className={({ isActive }) => isActive ? "active" : "" } > Login </NavLink>
        </li>
        <li>
          <NavLink end to="/registro" className={({ isActive }) => isActive ? "active" : "" } > Registro </NavLink>
        </li>
      </ul> */}
    </nav>
  );
}