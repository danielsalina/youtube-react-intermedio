import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkNav from "./LinkNav";

function Rutas() {
    return ( 
        <div>
            <h1>Conceptos básicos de rutas</h1>
            <Router>
                <LinkNav />
                <Routes>
                    <Route path="/" element={<p>Esto es el inicio</p>} />
                    <Route path="/registro" element={<p>Registrate</p>} />
                    <Route path="/login" element={<p>Logueate</p>} />
                </Routes>
            </Router>
        </div>
     );
}

export default Rutas;