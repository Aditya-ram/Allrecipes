import React, { useContext } from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const PrivateRoute = () => {
    const {token} = useContext(AuthContext);
    console.log("token and theme is ",token)
    if(!token){
        return <Navigate to="/login"/>
    }
  return (
    <Outlet/>
  )
}

export default PrivateRoute
