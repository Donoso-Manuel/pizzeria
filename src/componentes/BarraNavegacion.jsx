import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faLock , faUser , faShoppingCart , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'

const formatNumber = (number) => {
  return number.toLocaleString('es-ES');
};

const BarraNavegacion = () => {

  const total = 25000;
  const token = false;

  return (
  
  <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand className="tituloNav text-white">¡Deliziosa Pizza!</Navbar.Brand>
        <Navbar.Toggle />
        <Button variant="dark" className="botonNav"><FontAwesomeIcon icon={faPizzaSlice} />Home</Button>
        <Button variant="dark" className="botonNav" style = {{display: token ? 'null' : 'none'}}><FontAwesomeIcon icon={faUser}/>Profile</Button>
        <Button variant="dark" className="botonNav" style = {{display: token ? 'null' : 'none'}}><FontAwesomeIcon icon = {faSignOutAlt}/> Logout</Button>
        <Button variant="dark" className="botonNav" style = {{display: token ? 'none' : 'null'}}><FontAwesomeIcon icon={faLock}/>Login</Button>
        <Button variant="dark" className="botonNav" style = {{display: token ? 'none' : 'null'}}><FontAwesomeIcon icon={faLock}/>Register</Button>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="dark" className="botonNav"><FontAwesomeIcon icon={faShoppingCart} /> Total: {formatNumber(total)}</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion
