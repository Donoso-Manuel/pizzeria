import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import BarraNavegacion from './componentes/BarraNavegacion';
import Pizza from './componentes/Pizza';


function App() {

  return (
    <>
      <BarraNavegacion />
      {/* <Home /> */}
      <Pizza /> 
      <Footer informacion = "¡Deliziosa Pizza! - Todos los Derechos Reservados"/>
    </>
  )
}

export default App
