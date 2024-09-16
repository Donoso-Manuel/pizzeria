import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './componentes/HelpContext/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext>
  </React.StrictMode>,
)
