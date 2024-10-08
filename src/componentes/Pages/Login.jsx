import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import '../../assets/css/popUpNavBtnStyle.css';
import { Link } from 'react-router-dom';
import { MyLoginContext } from '../HelpContext/UserContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {iniciarSesion} = useContext(MyLoginContext)

  const validacionLogin = (event)=>{
    event.preventDefault();
    
    if(email === "" || password === ""){
      setError("Debe ingresar todos los datos");
      return
  }
    if(password.length < 6){
    setError("La contraseña debe tener mas de 6 caracteres")
    return
  }
    iniciarSesion(email, password)
    setEmail("");
    setPassword("");
    setError("");

  }

  return (
    <div className='contenedorView'>
      <Container>
          <h2>Login</h2>
          <Form onSubmit={validacionLogin} className='d-flex flex-column'>
              <Form.Group>
                <p>Usuario (correo) </p>
                <Form.Control 
                type='email'
                name='email'
                value={email}
                placeholder='Ingrese su correo example@exaple.com'
                onChange={(event)=> setEmail(event.target.value)}
                />
              </Form.Group>
             
              <Form.Group>
                <p>Password</p>
                <Form.Control 
                type='password'
                name='password'
                value={password}
                placeholder='Ingrese su contraseña'
                onChange={(event)=> setPassword(event.target.value)}
                />
              </Form.Group>
            <Button type='submit' variant='secondary' className='mt-4'>Ingresar</Button>
          </Form>
          {error ? <p className="textoError">{error}</p> : null}
          <p>¿No tienes cuenta?</p>
          <Link to='/pizzeria/registro'>Crear Cuenta</Link>
          </Container>
    </div>


  )
}

export default Login