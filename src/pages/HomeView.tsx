import { Container, CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'
import { HeaderLayout } from '../layouts/header/HeaderLayout'

import { useState } from 'react'
import { useTokenContext } from '../context/auth/AuthContext'
import { Route, Routes } from 'react-router-dom'
import { ProductView } from './products/ProductView'
import { WeatherProvider } from '../context/WeatherContext'
import { WeatherView } from './weather/WeatherView'
import ContentLayout from '../layouts/content/ContentLayout'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

export const HomeView = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const { token } = useTokenContext()
  console.log(token)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser navbar-page App">
        <Container>
          <HeaderLayout theme={theme} toggleTheme={toggleTheme} />{' '}
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
          <Footer>Footer</Footer>
        </Container>
      </div>
    </CustomProvider>
  )
}
