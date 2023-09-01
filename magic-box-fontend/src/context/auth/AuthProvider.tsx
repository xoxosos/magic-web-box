/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-07-16 19:44:17
 * @Description:
 */
import React, { useCallback, useMemo } from 'react'
import Cookies from 'react-cookies'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
interface Props {
  children: React.ReactNode
}
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = React.useState<string | undefined>(() => {
    return Cookies.load('saToken') ?? undefined
  })
  // 避免每次渲染都重新创建一个新的函数。
  const logOut = useCallback(() => {
    Cookies.remove('saToken')
    setToken(undefined)
    // 跳转到登录页面
    navigate('/login')
  }, [navigate])
  // useEffect(() => {
  //   localStorage.setItem('token', token ?? '')
  // }, [token])
  const authContextValue = useMemo(() => ({ token, setToken, logOut }), [token, setToken, logOut])
  // 使用 useMemo 来优化 TokenProvider 组件中的 AuthContext.Provider 的 value 值，避免每次渲染都重新创建一个新的对象。
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}
