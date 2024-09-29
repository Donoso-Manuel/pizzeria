import { createContext, useState, useEffect } from "react"

export const MyLoginContext = createContext();

const UserContext = ({children}) => {

  const[token, setToken]= useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    console.log(token)
    obtenerUser(token)

  }, [token])
  

  async function registrar(email, password) {
    const registrar = await fetch("http://localhost:5000/api/auth/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
  });
  const registrado = await registrar.json();
  console.log(registrado)
  if(registrado && registrado.token){
    alert(`Usuario ${registrado.email} Registrado`)
    setEmail(registrado.email)
    setToken(registrado.token)
  }else{
    alert(registrado.error)}
  }

  async function iniciarSesion(email, password) {
    const sesion =await fetch("http://localhost:5000/api/auth/login", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const datosSesion = await sesion.json();
    if(datosSesion && datosSesion.token){
      alert("Sesion Iniciada")
      setEmail(datosSesion.email)
      setToken(datosSesion.token)
    }else{
      alert(datosSesion.error)
    }
  }
  async function obtenerUser(token) {
    
    const resultado = await fetch("http://localhost:5000/api/auth/me",{
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },
    } )
    const usuario = await resultado.json();
    setUsuario(usuario);
  }

  function cerrarSesion(){
    setToken("")
    setEmail("")
  }
  

  return (
    <MyLoginContext.Provider value={{token, cerrarSesion, registrar, iniciarSesion, usuario }}>
        {children}
    </MyLoginContext.Provider>

  )
}

export default UserContext
