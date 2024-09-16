import {Button , Table, Container} from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import '../../assets/css/popUpNavBtnStyle.css';
import { ContextCart } from '../HelpContext/ContextCart.jsx';
import { MyLoginContext } from '../HelpContext/UserContext.jsx';


const Cart = () => {
    
    const {carrito, setCarrito, total, setTotal, agregarPizza, cartPizzas, setCartPizzas} = useContext(ContextCart)
    const {token} = useContext(MyLoginContext)

    async function fetchPizzas (){
        const response = await  fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        console.log(data)
        setCartPizzas(data)
      }
    
      useEffect(()=>{
        fetchPizzas()
      }, [])


    const quitarPizza = (id)=>{
        const pizza = cartPizzas.find(pizza => pizza.id === id); 
        const pizzaExiste =  carrito.find(item => item.id === id);
        if(pizzaExiste){
            const actualizaCarrito = [...carrito];
            const pizzaActualizar = actualizaCarrito.findIndex(index => index.id === id);
            if(actualizaCarrito[pizzaActualizar].cantidad > 1){
                actualizaCarrito[pizzaActualizar].cantidad -=1;
                actualizaCarrito[pizzaActualizar].subTotal = actualizaCarrito[pizzaActualizar].cantidad * pizza.price;
                setCarrito(actualizaCarrito)
            }else{
                actualizaCarrito.splice(pizzaActualizar, 1)
                setCarrito(actualizaCarrito);
            }
        }
    }
    const vaciarCarrito = ()=>{
        setCarrito([])
        setTotal(0)
    }
    const formatNumber = (number) => {
        if(number === undefined || number === null){
            return '0';
        }
        
        return number.toLocaleString('es-CL');
      };
  return (
    <div  className='contenedorView'>
        <Container>
        <h2>Tu Carrito</h2>
        <ul className='opcionesPizza'>
            { cartPizzas.map(pizza =>
                (
                    <li key={pizza.id}>
                        <div>
                            <h5>{pizza.name}</h5>
                            <img className='pizzaCarrito' src={pizza.img}/>
                            <p>$: {formatNumber(pizza.price)}</p>
                            <Button variant='danger' onClick={()=>quitarPizza(pizza.id)}>-</Button> 
                            <Button variant='success' onClick={()=>agregarPizza(pizza.id)}>+</Button>
                        </div>                
                    </li>
                ))}
        </ul>
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map(cart => ( 
                        <tr key={cart.id}>
                            <td>{cart.name}</td>
                            <td>{cart.cantidad}</td>
                            <td>${formatNumber(cart.subTotal)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant='danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
            <h4>Total: ${formatNumber(total)}</h4><Button variant='primary' disabled = {!token}>Pagar</Button>
        </div>
        </Container>
    </div>
  )
}

export default Cart
