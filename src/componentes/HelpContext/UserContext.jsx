import { createContext, useState } from "react"

export const MyLoginContext = createContext();

const UserContext = ({children}) => {

  const[token, setToken]= useState(true);

  function cerrarSesion(){
    setToken(false)
  }
  console.log(token)

  return (
    <MyLoginContext.Provider value={{token, cerrarSesion}}>
        {children}
    </MyLoginContext.Provider>

  )
}

export default UserContext
