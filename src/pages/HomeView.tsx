import { Container, CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'
import { HeaderLayout } from '../layouts/header/HeaderLayout'
import ContentLayout from '../layouts/content/ContentLayout'

import { useState } from 'react'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

export const HomeView = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser navbar-page App">
        <Container>
          <HeaderLayout theme={theme} toggleTheme={toggleTheme} />
          <ContentLayout />
          <Footer>Footer</Footer>
        </Container>
      </div>
    </CustomProvider>
  )
}
