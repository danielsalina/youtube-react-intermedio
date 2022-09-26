import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";

function Registro() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return ( 
        <div>
            <h1>Formulario utilizando React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("name", {required:true})}} />
                {errors.name && <p>El campo es obligatorio</p>}
                <FormGroup label="Apellido" register={{...register("lastname", {required:true})}} />
                {errors.name && <p>El campo es obligatorio</p>}
                <FormGroup label="Email" register={{...register("email", {required:true})}} />
                {errors.name && <p>El campo es obligatorio</p>}
                <FormGroup label="Contraseña" type="password" register= {{...register("password", {required:true, minLength:6})}} />
                {errors.password?.type === "required" && <p>El campo contraseña es obligatorio</p>}
                {errors.password?.type === "minLength" && <p>Debe completar al menos 6 caracteres</p>}
                <button type="submit" >Registrarme</button>
            </form>
        </div>
     );
}

export default Registro;