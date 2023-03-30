import { useState } from 'react'
import { Container, CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/locales/zh_CN'
import './App.less'
import ContentLayout from './layouts/content/ContentLayout'
import { HeaderLayout } from './layouts/header/HeaderLayout'
import { TokenProvider } from './context/TokenContext'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

export const App = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    // 一个应用只有一个QueryClientProvider组件
    <CustomProvider locale={zhCN} theme={theme}>
      <TokenProvider>
        <div className="show-fake-browser navbar-page App">
          <Container>
            <HeaderLayout theme={theme} toggleTheme={toggleTheme} />
            <ContentLayout />
            <Footer>Footer</Footer>
          </Container>
        </div>
      </TokenProvider>
    </CustomProvider>
  )
}
