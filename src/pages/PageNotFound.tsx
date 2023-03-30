import { Navigate, useLocation } from 'react-router-dom'

function PageNotFound() {
  const location = useLocation()

  // 如果当前路径是 /404，则不需要重定向
  if (location.pathname === '/404') {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    )
  }

  // 否则重定向到 /404
  // 我们使用了 replace 属性来替换当前路径，这样用户就无法通过浏览器的后退按钮返回到不存在的路径
  return <Navigate to="/404" replace />
}

export default PageNotFound
