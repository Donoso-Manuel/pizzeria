import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css'

const Footer = (props) => {
  return (
    <div className='footer'>
      <p><FontAwesomeIcon icon = {faCopyright}/> {props.informacion}</p>
    </div>
  )
}

export default Footer
