import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Authentication = () => {
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <div>
      <button onClick={handleAuth}>{auth ? "Llegaste" : "Te fuiste"}</button>
      {auth ? <p>Hola</p> : <p>Chao</p>}
    </div>
  );
};

export default Authentication;
