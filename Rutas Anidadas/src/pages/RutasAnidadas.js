import { Link, Outlet, Route, Routes } from "react-router-dom";

function RutasAnidadas() {
    return ( 
        <div>
            <ul style={{display: "flex"}}>
                <li><Link to={"frontend"}>1- Frontend</Link></li>
                <li><Link to={"backend"}>2- Backend</Link></li>
                <li><Link to={"BD"}>3- BD</Link></li>
                <li><Link to={"seguridad"}>4- Cyber Security</Link></li>
                <li><Link to={"cloud"}>5- Cloud</Link></li>
                <li><Link to={"architecture"}>6- Architecture</Link></li>
                <li><Link to={"testing"}>7- Testing</Link></li>
                <li><Link to={"hacking"}>8- Hacking</Link></li>
            </ul>
            <Outlet/>
            {/* <Routes >
                <Route path="frontend" element={<p>FrontEnd ✨</p>}/>
                <Route path="backend" element={<p>BackEnd 🤖</p>}/>
                <Route path="bd" element={<p>BD 💾</p>}/>
                <Route path="seguridad" element={<p>Cyber Security 🔒</p>}/>
                <Route path="cloud" element={<p>Cloud ☁️</p>}/>
                <Route path="architecture" element={<p>Architecture 📐</p>}/>
                <Route path="testing" element={<p>Testing 🧪</p>}/>
                <Route path="hacking" element={<p>Hacking 🤠</p>}/>
            </Routes> */}
        </div>
     );
}

export default RutasAnidadas;