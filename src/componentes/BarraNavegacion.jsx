import React, {useContext, useState} from 'react'
import {Container, Navbar, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faLock , faUser , faShoppingCart , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'
import { Link } from 'react-router-dom';
import { ContextCart } from './HelpContext/ContextCart';
import { MyLoginContext } from './HelpContext/UserContext';



const formatNumber = (number) => {
  return number.toLocaleString('es-CL');
};

const BarraNavegacion = () => {
  const {total} = useContext(ContextCart)
  const {token, cerrarSesion} = useContext(MyLoginContext);


  return (
  
  <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="tituloNav text-white">¡Deliziosa Pizza!</Navbar.Brand>
        <Navbar.Toggle />
        
        <Link to="/pizzeria/">
        <Button variant="dark" 
          className="botonNav">
          <FontAwesomeIcon icon={faPizzaSlice} />Home</Button>
        </Link>
        
        <Link to="/pizzeria/profile">
        <Button variant="dark" 
        className="botonNav" 
        style = {{display:token ? '' : 'none'}}>
          <FontAwesomeIcon icon={faUser}/>Profile</Button>
          </Link>
        
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? '' : 'none'}} onClick={()=> cerrarSesion()}>
          <FontAwesomeIcon icon = {faSignOutAlt}/> Logout</Button>
        
        <Link to='/pizzeria/login'>
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'none' : ''}}>
          <FontAwesomeIcon icon={faLock}/>Login</Button>
        </Link>
        
        <Link to='/pizzeria/registro'>
        <Button variant="dark" 
        className="botonNav" 
        style = {{display: token ? 'none' : ''}}>
          <FontAwesomeIcon icon={faLock}/>Register</Button>
          </Link>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/pizzeria/carrito">
            <Button variant="dark" className="botonNav"><FontAwesomeIcon icon={faShoppingCart} /> Total: {formatNumber(total)}</Button>
          </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion
