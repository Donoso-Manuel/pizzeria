import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import BarraNavegacion from './componentes/BarraNavegacion';


function App() {

  return (
    <>
      <BarraNavegacion />
      <Home />
      <Footer informacion = "¡Deliziosa Pizza! - Todos los Derechos Reservados"/>
    </>
  )
}

export default App
