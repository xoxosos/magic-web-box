/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-07-16 19:44:17
 * @Description:
 */
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useTokenContext } from '../context/auth/AuthContext'

interface Props {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { token } = useTokenContext()
  console.log('PrivateRoute', token)
  return <>{token ? children : <Navigate to="/login" replace={true} />}</>
}

export default PrivateRoute
