import { CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SettingHover } from '../components/SettingHover'
import { WeatherProvider } from '../context/WeatherContext'
import { useTokenContext } from '../context/auth/AuthContext'
import { useGlobalContext } from '../context/global/GlobalContext'
import ContentLayout from '../layouts/content/ContentLayout'
import { HeaderLayout } from '../layouts/header/HeaderLayout'
import { SideLayout } from '../layouts/sidenav/SideLayout'
import styles from '../layouts/styles/layout.module.less'
import { MainView } from './main/MainView'
import { ProductView } from './products/ProductView'
import { WeatherView } from './weather/WeatherView'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

export const HomeView = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const { token } = useTokenContext()
  const { expand, handleExpand, isTop, toggleTop, menu, key } = useGlobalContext()
  console.log(token, menu)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser sidebar-page">
        <section className={styles.twoColLayout}>
          <section className={styles.twoColLayoutLeft}>
            <SideLayout initKey={key as string} menu={menu} expand={expand} />
          </section>
          <section className={styles.twoColLayoutRight}>
            <HeaderLayout
              isTop={isTop}
              className={styles.twoColLayoutRightHeader}
              expand={expand}
              setExpand={handleExpand}
            />
            <ContentLayout className="two-col-layout-right-content">
              <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="product" element={<ProductView />} />
                <Route
                  path="weather"
                  element={
                    <WeatherProvider>
                      <WeatherView />
                    </WeatherProvider>
                  }
                />
              </Routes>
              <SettingHover isTop={isTop} setTop={toggleTop} theme={theme} toggleTheme={toggleTheme} />
              <Footer className={styles.twoColLayoutRightFooter}>Footer</Footer>
            </ContentLayout>
          </section>
        </section>
      </div>
    </CustomProvider>
  )
}
