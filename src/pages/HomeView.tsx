import { Container, CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'

import { useState } from 'react'
import { useTokenContext } from '../context/auth/AuthContext'
import { Route, Routes } from 'react-router-dom'
import { ProductView } from './products/ProductView'
import { WeatherProvider } from '../context/WeatherContext'
import { WeatherView } from './weather/WeatherView'
import ContentLayout from '../layouts/content/ContentLayout'
import { SideLayout } from '../layouts/sidenav/SideLayout'
import { CustomHeaderNavbar } from '../layouts/header/CustomHeaderNavbar'
import { SettingHover } from '../components/SettingHover'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

export const HomeView = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const [expand, setExpand] = useState(true)

  const { token } = useTokenContext()
  console.log(token)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser sidebar-page">
        <Container>
          {/*<HeaderLayout theme={theme} toggleTheme={toggleTheme} />*/}
          <Container className="App">
            <SideLayout expand={expand} />
            <Container>
              <CustomHeaderNavbar expand={expand} setExpand={setExpand} />

              <ContentLayout>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <WeatherProvider>
                        <WeatherView />
                      </WeatherProvider>
                    }
                  />
                  <Route path="product" element={<ProductView />} />
                </Routes>
              </ContentLayout>
            </Container>
          </Container>
          <SettingHover theme={theme} toggleTheme={toggleTheme} />
          <Footer>Footer</Footer>
        </Container>
      </div>
    </CustomProvider>
  )
}
