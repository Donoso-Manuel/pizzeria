import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice , faEye , faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'
import { ContextCart } from './HelpContext/ContextCart';
import { useNavigate } from 'react-router-dom';


const CardPizza = ({pizza}) => {

  const {agregarPizza} = useContext(ContextCart)
  const navegacion = useNavigate();
  const { desc, id, img, ingredients, name, price } = pizza;
  
  const formatNumber = (number) => {
    return number.toLocaleString('es-CL');
  };

  function verPizza(id){
    navegacion(`/pizzeria/pizza/${id}`)
  }

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
            <Button variant="light" className="botonPizza" onClick={()=>verPizza(id)}>Ver Mas <FontAwesomeIcon icon={faEye} /></Button>
            <Button variant="dark" className="botonPizza" onClick={()=>agregarPizza(id)}>añadir <FontAwesomeIcon icon = {faPlus} /></Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    
  );
}

export default CardPizza;