import React, { createContext,useState } from 'react'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [theme,setTheme]= useState("light");
    const[token,setToken] = useState(localStorage.getItem("token")||"")
  return (
    <div>
        <AuthContext.Provider value={{theme,token}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
