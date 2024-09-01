import React from 'react'
import { Button, Container } from 'react-bootstrap';
import '../../assets/css/popUpNavBtnStyle.css';

const Profile = () => {
  let usuario = '"Manuel.Donoso@example.com"';
  return (
    <div className='contenedorView'>
      <Container className="d-flex">
      <h3>Usuario : {usuario}</h3>
      <Button variant='success' className='ms-auto'>Cerrar Sesion</Button>
      </Container>
    </div>
  )
}

export default Profile
