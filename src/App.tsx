/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-03-29 10:09:17
 * @LastEditors: LinRenJie xoxosos666@gmail.com
 * @LastEditTime: 2023-03-29 10:42:43
 * @FilePath: /rsuite-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HomeIcon from '@rsuite/icons/legacy/Home'
import { useState } from 'react'
import { Container, Content, CustomProvider, Footer, Header, Nav, Navbar } from 'rsuite'
import zhCN from 'rsuite/locales/zh_CN'
import './App.less'

import SettingDropDown from './components/SettingDropDown'
import MainContent from './components/MainContent'
type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
function App() {
  const [theme, setTheme] = useState<themeUnionType>('light')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log(theme)
  }
  return (
    <CustomProvider locale={zhCN} theme={theme}>
      <div className="show-fake-browser navbar-page App">
        <Container>
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand>
                <a style={{ color: '#fff' }}>Brand</a>
              </Navbar.Brand>
              <Nav>
                <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                <Nav.Item>News</Nav.Item>
                <Nav.Item>Products</Nav.Item>
                <Nav.Menu title="About">
                  <Nav.Item>Company</Nav.Item>
                  <Nav.Item>Team</Nav.Item>
                  <Nav.Item>Contact</Nav.Item>
                </Nav.Menu>
              </Nav>
              <Nav pullRight>
                <SettingDropDown theme={theme} toggleTheme={toggleTheme} title="Settings" />
              </Nav>
            </Navbar>
          </Header>
          <Content>
            <MainContent />
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </div>
    </CustomProvider>
  )
}
export default App
