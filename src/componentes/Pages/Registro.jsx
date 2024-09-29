import React, { useContext, useState } from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/popUpNavBtnStyle.css';
import { MyLoginContext } from '../HelpContext/UserContext';

const Registro = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");
    const{registrar} = useContext(MyLoginContext)

    const validacion = (event) => {
        event.preventDefault();

        if(email === "" || password === "" || confirmPassword === ""){
            setError("Debe Completar todos los campos");
            return
        }
        if(!/\S+@\S+\.\S+/.test(email)){
            setError("Debe ingresar un correo Válido")
            return
        } 
        if(password.length < 6){
            setError("La contraseña debe tener mas de 6 caracteres")
            return
        }
        if(password !== confirmPassword){
            setError("La contraseña no coincide")
            return
        } 
        setError("");
        registrar(email, password)
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

  return (
    <div className='contenedorView'>
        <Container>
        <h2 className='text-center'>Registro</h2>
        <Form onSubmit={validacion} className='d-flex flex-column'>
            <Form.Group className='mb-2'>
                <p>Correo:</p>
                <Form.Control 
                type="text" 
                name='email'
                value={email} 
                placeholder='Ingrese su correo'
                onChange={(event) => setEmail(event.target.value)}
                />
           
            </Form.Group>
            <Form.Group className='mb-2'>
            <p>Contraseña:</p>
                <Form.Control 
                type='password' 
                name='password' 
                value={password}
                placeholder='ingrese contraseña'
                onChange={(event) => setPassword(event.target.value)}
                />
        
            </Form.Group>
            <Form.Group className='mb-2'>
                <p>Repetir Contraseña:</p>
                <Form.Control 
                type="password" 
                name='confirmPassword'
                value={confirmPassword}
                placeholder='repita contraseña'
                onChange={(event) => setConfirmPassword(event.target.value)}
                />

            </Form.Group>       
            <Button type='submit' variant='secondary' className='mb-5'>Registrar</Button>
        </Form>
        {error ? <p className="textoError">{error}</p> : null}
        <p>¿Tienes Cuenta?</p>
        <Link to='/pizzeria/login'>Iniciar sesion</Link>
        </Container>
    </div>
  )
}

export default Registro