import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ children }: any) {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    // 判断用户是否已经登录，如果没有登录则跳转到登录页面
    if (!token) {
      console.log('没有登录')
      navigate('/login')
    }
  }, [navigate, token])
  console.log('登录了')
  return <>{token ? children : null}</>
}

export default PrivateRoute
