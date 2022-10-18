import { useReducer } from "react";

const initialState = {contador:0}

function reducer(state, action) {
    
    switch (action.type) {
        case "AUMENTAR":
            return {contador: state.contador + 1 }

        case "AUMENTAR_10":
                return {contador: state.contador + action.payload }
    
        case "DISMINUIR":
                return {contador: state.contador - 1 }

        case "RESET":
            return {contador: 0 }
        default:
            return state
    }

}

function init(initialState)
    {
        return {
        contador: initialState.contador + 545
    }}

function Contador() {

    const [state, dispatch] = useReducer(reducer, initialState, init)

    const sumar = () => dispatch({type: "AUMENTAR"})
    const aumentar_10 = () => dispatch({type: "AUMENTAR_10", payload: 10})
    const restar = () => dispatch({type: "DISMINUIR"})
    const reset = () => dispatch({type: "RESET"})
    
    
    return ( 
        <div>
            <h1>Contador</h1>
            <button onClick={sumar}>SUMAR</button>
            <button onClick={aumentar_10}>AUMENTAR 10</button>
            <button onClick={restar}>RESTAR</button>
            <button onClick={reset}>RESET</button>
            <div>{state.contador}</div>
        </div>
     );
}

export default Contador;