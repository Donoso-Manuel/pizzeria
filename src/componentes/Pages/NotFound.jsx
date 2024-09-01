import React from 'react'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'

const NotFound = () => {
  return (
    <div className='Page404'>
        <Container>
      <h1>Estimado Usuario, le informamos 404</h1>
      <p>El enlace al cual intenta acceder no existe, no se deje estafar, haga click <Link to='/pizzeria/'>Volver Al Home</Link> y siga disfrutando de las mejores pizzas
      </p>
      </Container>
    </div>
  )
}

export default NotFound
