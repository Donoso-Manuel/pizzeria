import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/style.css'

const Home = () => {
  return (
    <div>
      <Header titulo="¡Deliziosa Pizza!" descripcion="Tenemos las mejores pizzas que podrás encontrar" />
      <Container fluid>
        <Row>
          <Col md={4} xs={12}>
            <div className="mb-3">
              <CardPizza
                name="Napolitana"
                price= {5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="mb-3">
              <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="mb-3">
              <CardPizza
                name="Pepperoni"
                price={(6950).toLocaleString()}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;