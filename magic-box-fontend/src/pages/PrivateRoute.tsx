import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}
const PrivateRoute: React.FC<Props> = ({ children }) => {
  const storageToken = localStorage.getItem('token')
  return <>{storageToken ? children : <Navigate to="/login" replace={true} />}</>
}

export default PrivateRoute
