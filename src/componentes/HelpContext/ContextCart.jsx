import {createContext, useState, useEffect } from "react";


export const ContextCart = createContext();

const ContextCartProvider = ({children}) =>{
    
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0);
    const [cartPizzas, setCartPizzas] = useState([])

    async function fetchPizzas (){
        const response = await  fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setCartPizzas(data)
      }
    
      useEffect(()=>{
        fetchPizzas()
      }, [])

    useEffect(() => {

        const subtotal = carrito.reduce((add, pizza) => add + pizza.subTotal, 0);
        setTotal(subtotal);
      }, [carrito]);
      
    const agregarPizza = (id)=>{
        
        const pizza = cartPizzas.find(pizza => pizza.id === id); 
        const pizzaExiste =  carrito.find(item => item.id === id)    

        if(pizzaExiste){
            const actualizaCarrito = [...carrito];
            const pizzaActualizar = actualizaCarrito.findIndex(index => index.id === id);
            actualizaCarrito[pizzaActualizar].cantidad +=1;
            actualizaCarrito[pizzaActualizar].subTotal = actualizaCarrito[pizzaActualizar].cantidad * pizza.price;
            setCarrito(actualizaCarrito)
        }else{
            const actualizaCarrito = [...carrito, {
                id: pizza.id,
                name: pizza.name,
                cantidad: 1,
                subTotal: pizza.price
            } ]
        setCarrito(actualizaCarrito)
    }
    }

    return(
        <ContextCart.Provider value={{carrito, setCarrito, total, setTotal, agregarPizza, cartPizzas, setCartPizzas}}>
            {children}
        </ContextCart.Provider>
    );
};
export default ContextCartProvider;