import React, {useState} from 'react'
import {Container, Navbar, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faLock , faUser , faShoppingCart , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Registro from './Registro';
import Login from './Login';
import '../assets/css/style.css'
import Cart from './Cart';

const formatNumber = (number) => {
  return number.toLocaleString('es-CL');
};

const BarraNavegacion = () => {

  const [total, setTotal] = useState(0);
  const token = false;

  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarCarrito, setMostrarCarrito] = useState(false)

  const desplegarRegistro = () => setMostrarRegistro(true)
  const cerrarRegistro = () => setMostrarRegistro(false)
  const desplegarLogin = () => setMostrarLogin(true)
  const cerrarLogin = () => setMostrarLogin(false)
  const desplegarCarrito = ()=> setMostrarCarrito(true)
  const cerrarCarrito = () => setMostrarCarrito(false)

  return (
  
  <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand className="tituloNav text-white">¡Deliziosa Pizza!</Navbar.Brand>
        <Navbar.Toggle />
        <Button variant="dark" 
          className="botonNav">
          <FontAwesomeIcon icon={faPizzaSlice} />Home</Button>
        
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'null' : 'none'}}>
          <FontAwesomeIcon icon={faUser}/>Profile</Button>
        
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'null' : 'none'}}>
          <FontAwesomeIcon icon = {faSignOutAlt}/> Logout</Button>
        
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'none' : 'null'}}
        onClick={desplegarLogin}>
          <FontAwesomeIcon icon={faLock}/>Login</Button>
        
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'none' : 'null'}}
        onClick={desplegarRegistro}>
          <FontAwesomeIcon icon={faLock}/>Register</Button>
        
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="dark" className="botonNav" onClick={desplegarCarrito}><FontAwesomeIcon icon={faShoppingCart} /> Total: {formatNumber(total)}</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Registro mostrar = {mostrarRegistro} cerrar = {cerrarRegistro}></Registro>
      <Login mostrar = {mostrarLogin} cerrar = {cerrarLogin}></Login>
      <Cart mostrar = {mostrarCarrito} cerrar = {cerrarCarrito} total = {total} setTotal = {setTotal}/>
    </Navbar>
  )
}

export default BarraNavegacion
