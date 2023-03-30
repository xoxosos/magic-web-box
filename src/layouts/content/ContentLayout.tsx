import { WeatherProvider } from '../../context/WeatherContext'
import { WeatherView } from '../../pages/weather/WeatherView'
import { Content } from 'rsuite'
import LoginView from '../../pages/login/LoginView'
import { useTokenContext } from '../../context/TokenContext'

function ContentLayout() {
  // 根据token来判断是否登录
  const localStorageToken = localStorage.getItem('token')
  const { token, setToken } = useTokenContext()
  if (localStorageToken) setToken(localStorageToken)
  return token ? (
    <Content>
      <div className="main-content">
        <div className="main-content-search">
          <WeatherProvider>
            <WeatherView />
          </WeatherProvider>
        </div>
      </div>
    </Content>
  ) : (
    <LoginView />
  )
}

export default ContentLayout
