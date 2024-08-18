import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faEye , faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'

const CardPizza = ({pizza}) => {

  const { desc, id, img, ingredients, name, price } = pizza;
  
  const formatNumber = (number) => {
    return number.toLocaleString('es-CL');
  };

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='text-center'>
          {desc}
        </ListGroup.Item>
        <ListGroup.Item className='text-center'>
        <FontAwesomeIcon icon={faPizzaSlice} /><strong>Ingredientes</strong>
            <ul>
              {ingredients.map((ingredient, index)=>
                (<li key={index}>{ingredient}</li>)
              )}
            </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Title className='text-center m-3'>
          <h3>$ {formatNumber(price)}</h3>
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