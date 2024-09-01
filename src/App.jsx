import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Pages/Home';
import Footer from './componentes/Footer';
import BarraNavegacion from './componentes/BarraNavegacion';
import Pizza from './componentes/Pages/Pizza';
import Login from './componentes/Pages/Login';
import Registro from './componentes/Pages/Registro';
import Cart from './componentes/Pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Profile from './componentes/Pages/Profile';
import NotFound from './componentes/Pages/NotFound';


function App() {

  return (
    <>
      <BarraNavegacion />
      <Routes>
        <Route path='/pizzeria/' element={<Home />} />
        <Route path='/pizzeria/login' element={<Login/>}  />
        <Route path='/pizzeria/registro' element={<Registro/>}  />
        <Route path='/pizzeria/carrito' element={<Cart />} />
        <Route path='/pizzeria/profile' element={<Profile />} />
        <Route path='/pizzeria/pizza/p001' element={<Pizza />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} /> {/* redunda, pero no se sí es lo que solicita */}
      </Routes>
      <Footer informacion = "¡Deliziosa Pizza! - Todos los Derechos Reservados"/>
    </>
  )
}

export default App
