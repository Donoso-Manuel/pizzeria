import React, { useEffect, useState } from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap';
import '../../assets/css/popUpNavBtnStyle.css';
import { useParams } from 'react-router-dom';

const Pizza = () => {

    const[pizza, setPizza] = useState(null)
    const { desc, id, img, ingredients, name, price } = pizza || {};

    const {pizzaId} = useParams();

    const formatNumber = (number) => {
        return number.toLocaleString('es-CL');
      };

    async function fetchPizzas (){
        const response = await  fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        const data = await response.json();
        setPizza(data)
    }
    useEffect(()=>{
        fetchPizzas()
    },[])

    if (!pizza) {
        return <div>Cargando...</div>;
    }

  return (
    <Container className='d-flex justify-content-center align-items-center'>    
      <div className='contenedorPizza'>
      <Card style={{ width: '40%' }}>
        <Card.Title className='text-center'><h3>{name}</h3></Card.Title>
        <Card.Body>
            <Card.Img variant='top' src={img}/>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item className='text-center'>
                {desc}
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className='text-center'>Ingredientes</h4>
            <ul>
              {ingredients.map((ingredient, index)=>
                (<li key={index}>{ingredient}</li>)
              )}
            </ul>
            </ListGroup.Item>
            <ListGroup.Item>
                <strong> Precio: $ {formatNumber(price)}</strong>
            </ListGroup.Item>
        </ListGroup>    
      </Card>
    </div>
    </Container>
  )
}

export default Pizza
