import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {pizzas} from '../assets/data/pizzas.js'
import '../assets/css/style.css'

const Home = () => {
  return (
    <div>
      <Header titulo="¡Deliziosa Pizza!" descripcion="Tenemos las mejores pizzas que podrás encontrar" />
      <Container fluid>
        <Row>
          {pizzas.map((pizza)=> 
          <Col key={pizza.id} md={4} xs={12}>
            <div className='mb-3'>
              <CardPizza pizza = {pizza}/>
            </div>
          </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;