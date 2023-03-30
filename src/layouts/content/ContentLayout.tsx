import { WeatherProvider } from '../../context/WeatherContext'
import { WeatherView } from '../../pages/weather/WeatherView'
import { Content } from 'rsuite'

function ContentLayout() {
  return (
    <Content>
      <div className="main-content">
        <div className="main-content-search">
          <WeatherProvider>
            <WeatherView />
          </WeatherProvider>
        </div>
      </div>
    </Content>
  )
}

export default ContentLayout
