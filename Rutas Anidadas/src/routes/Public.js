import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Registro from "../pages/Registro";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import User from "../pages/User";
import RutasAnidadas from "../pages/RutasAnidadas";

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
                    <Route path="/rutas/" element={<RutasAnidadas />} >
                        <Route path="frontend" element={<p>FrontEnd ✨</p>}/>
                        <Route path="backend" element={<p>BackEnd 🤖</p>}/>
                        <Route path="bd" element={<p>BD 💾</p>}/>
                        <Route path="seguridad" element={<p>Cyber Security 🔒</p>}/>
                        <Route path="cloud" element={<p>Cloud ☁️</p>}/>
                        <Route path="architecture" element={<p>Architecture 📐</p>}/>
                        <Route path="testing" element={<p>Testing 🧪</p>}/>
                        <Route path="hacking" element={<p>Hacking 🤠</p>}/>    
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </div>
     );
}

export default Public;