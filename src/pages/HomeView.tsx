import { CustomProvider, Footer } from 'rsuite'
import zhCN from 'rsuite/esm/locales/zh_CN'

import { useEffect, useState } from 'react'
import { useTokenContext } from '../context/auth/AuthContext'
import { Route, Routes } from 'react-router-dom'
import { ProductView } from './products/ProductView'
import { WeatherProvider } from '../context/WeatherContext'
import { WeatherView } from './weather/WeatherView'
import ContentLayout from '../layouts/content/ContentLayout'
import { SideLayout } from '../layouts/sidenav/SideLayout'
import { HeaderLayout } from '../layouts/header/HeaderLayout'
import { SettingHover } from '../components/SettingHover'
import { MainView } from './main/MainView'
import styles from '../layouts/styles/layout.module.less'
import useLoginApi from './login/service'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
interface Props {
  id: number
  name: string
  children: Props[]
}
type iProps = Props[]
export const HomeView = () => {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const [expand, setExpand] = useState(true)

  const { token } = useTokenContext()
  console.log(token)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const [isTop, toggleTop] = useState(false)
  const [menu, setMenu] = useState([])
  const [key, setKey] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await useLoginApi.getCategories()
        const { data, code } = res?.data || {}
        if (code === 0) {
          const key = (data as iProps)?.[0]?.children ? (data as iProps)[0].children[0].id : (data as iProps)[0].id
          setKey(key.toString())
          setMenu(data as [])
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser sidebar-page">
        <section className={styles.twoColLayout}>
          <section className={styles.twoColLayoutLeft}>
            <SideLayout initKey={key} menu={menu} expand={expand} />
          </section>
          <section className={styles.twoColLayoutRight}>
            <HeaderLayout
              isTop={isTop}
              className={styles.twoColLayoutRightHeader}
              expand={expand}
              setExpand={setExpand}
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
