import { CustomProvider, Drawer, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'

import { useEffect, useState } from 'react'
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
  const content = document.getElementsByTagName('body')[0]
  // js 监听系统主题模式
  const scheme = window.matchMedia('(prefers-color-scheme: dark)')
  const isDarkMode = scheme.matches
  // isDarkMode ? (content.dataset.theme = 'dark') : (content.dataset.theme = 'light')
  const [theme, setTheme] = useState<themeUnionType>(isDarkMode ? 'dark' : 'light')
  const { token } = useTokenContext()
  const { expand, handleExpand, isTop, toggleTop, menu, key, open, setOpen } = useGlobalContext()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    content.dataset.theme = theme === 'dark' ? 'light' : 'dark'
    // content.setAttribute('class', theme === 'dark' ? 'light-scheme' : 'dark-scheme')
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  useEffect(() => {
    // 添加事件监听器，当视窗宽度变化时调用 handleResize 函数
    window.addEventListener('resize', handleResize)

    // 组件卸载时移除事件监听器，避免内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser sidebar-page">
        <section className={styles.twoColLayout}>
          <section className={styles.twoColLayoutLeft}>
            {windowWidth < 768 ? (
              <Drawer
                size="xs"
                placement="left"
                open={open}
                onClose={() => setOpen(!open)}
                className={styles.showDrawer}
              >
                <Drawer.Body style={{ padding: 0 }}>
                  <SideLayout initKey={key as string} menu={menu} expand={open} />
                </Drawer.Body>
              </Drawer>
            ) : (
              <SideLayout className={styles.customSidebar} initKey={key as string} menu={menu} expand={expand} />
            )}
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
