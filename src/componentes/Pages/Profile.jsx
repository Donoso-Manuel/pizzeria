import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import { MyLoginContext } from '../HelpContext/UserContext';
import '../../assets/css/popUpNavBtnStyle.css';

const Profile = () => {
  const {cerrarSesion, usuario} = useContext(MyLoginContext)
  return (
    <div className='contenedorView'>
      <Container className="d-flex">
      <h3>Usuario : {usuario.email}</h3>
      <Button variant='success' className='ms-auto' onClick={()=> cerrarSesion()}>Cerrar Sesion</Button>
      </Container>
    </div>
  )
}

export default Profile
