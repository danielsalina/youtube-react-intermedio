import { useParams } from "react-router-dom";

function User() {
    
    const {id, name} = useParams();
    console.log(useParams());

    return ( 
        <div>
            <h1>Hola {name}, eres el id número {id}</h1>
        </div>
     );
}

export default User;