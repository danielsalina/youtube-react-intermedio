import React,{useState} from 'react';

function Formulario () {
    const [form,setForm] = useState({name:'',lastname:'',email:'',password:''})
    const handleSubmit = (event)=>{
      console.log("handleSubmit",form)
      event.preventDefault()

    }
    const handleChange = (event)=>{
      console.log("handleChange")
      const elementName = event.target.name
      const value = event.target.value
      setForm({
        ...form,
        [elementName]:value
      })
    }
    return (
      <div>
        <h1>Formulario tradicional</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} ></input>
          </div>
          <div>
            <label>Apellido</label>
            <input type="text" name="lastname" value={form.lastname} onChange={handleChange}></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}></input>
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={form.password} onChange={handleChange}></input>
          </div>
          <button type="submit" >Registrarme</button>
        </form>
  
      </div>
    );
}

export default Formulario ;