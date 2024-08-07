import React from 'react';
import '../assets/css/style.css';

const Header = ({ titulo, descripcion }) => {
  return (
    <div className='headerTitulo'>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
}

export default Header;