import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Pages/Home';
import Footer from './componentes/Footer';
import BarraNavegacion from './componentes/BarraNavegacion';
import Pizza from './componentes/Pages/Pizza';
import Login from './componentes/Pages/Login';
import Registro from './componentes/Pages/Registro';
import Cart from './componentes/Pages/Cart';
import { Navigate, Route, Routes, } from 'react-router-dom';
import Profile from './componentes/Pages/Profile';
import NotFound from './componentes/Pages/NotFound';
import ContextCartProvider from './componentes/HelpContext/ContextCart.jsx';
import { useContext } from 'react';
import { MyLoginContext } from './componentes/HelpContext/UserContext.jsx';



function App() {

  const {token} = useContext(MyLoginContext)

  return (
    <>
    <ContextCartProvider>
      <BarraNavegacion />
      <Routes>
        <Route path='/pizzeria/' element={<Home />} />
        <Route path='/pizzeria/login' element={ token ? <Navigate to = '/pizzeria/'/> : <Login />}  />
        <Route path='/pizzeria/registro' element={ token ? <Navigate to = '/pizzeria/'/> : <Registro/>}  />
        <Route path='/pizzeria/carrito' element={<Cart />} />
        <Route path='/pizzeria/profile' element={ token ? <Profile /> : <Navigate to = '/pizzeria/login' />} />
        <Route path='/pizzeria/pizza/:pizzaId' element={<Pizza />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} /> {/* redunda, pero no se sí es lo que solicita */}
      </Routes>
      <Footer informacion = "¡Deliziosa Pizza! - Todos los Derechos Reservados"/>
      </ContextCartProvider>
    </>
  )
}

export default App
