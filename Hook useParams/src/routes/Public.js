import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Registro from "../pages/Registro";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import User from "../components/User";

function Public() {
    return ( 
        <div>
            <h1>Conceptos básicos de rutas</h1>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users/:id" element={<User />} />
                    <Route path="/users/:id/:name" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
     );
}

export default Public;