import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

function Basicos() {
    return ( 
        <div>
            <h1>Conceptos básicos de rutas</h1>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<p>Esto es el inicio</p>} />
                    <Route path="/registro" element={<p>Registrate</p>} />
                    <Route path="/login" element={<p>Logueate</p>} />
                </Routes>
                <Footer />
            </Router>
        </div>
     );
}

export default Basicos;