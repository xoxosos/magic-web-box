import { WeatherProvider } from '../../context/WeatherContext'
import { WeatherView } from '../../pages/weather/WeatherView'
import { Content } from 'rsuite'
import LoginView from '../../pages/login/LoginView'

const token = localStorage.getItem('token')
function ContentLayout() {
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
