import "./App.css";
import Authentication from "./components/Autentication";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
