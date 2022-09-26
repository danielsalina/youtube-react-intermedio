function FormGroup({label, type, register}) {
    return ( 
        <div>
            <label>{label}</label>
            <input type={type || "text"} {...register} ></input>
        </div>
     );
}

export default FormGroup;