import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faEye , faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'

const CardPizza = ({ name, price, ingredients, img }) => {
  
  let precio = parseInt(price);
  
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='text-center'>
          <strong>Ingredientes</strong>
          <Card.Text><FontAwesomeIcon icon={faPizzaSlice} /> {ingredients.join(' - ')}</Card.Text>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title className='text-center m-3'>
          <h3>$ {precio}</h3>
          </Card.Title>
          <div className='botonesPizzaContenedor'>
            <Button variant="light" className="botonPizza">Ver Mas <FontAwesomeIcon icon={faEye}/></Button>
            <Button variant="dark" className="botonPizza">añadir <FontAwesomeIcon icon = {faPlus} /></Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    
  );
}

export default CardPizza;