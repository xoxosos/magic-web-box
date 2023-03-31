import SettingDropDown from '../../components/SettingDropDown'
import { Header, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

interface Props {
  theme: themeUnionType
  toggleTheme: () => void
}

export const HeaderLayout: React.FC<Props> = ({ theme, toggleTheme }) => {
  const { pathname } = useLocation()
  const [activeKey, setActiveKey] = useState(pathname || 'home')
  //当 exact 被设置为 true 时，只有当路由路径与当前路径完全匹配时，才会激活该路由。
  // @eslint ignore
  const NavLink = React.forwardRef(({ href, children, ...rest }: any, ref) => (
    <Link ref={ref} exact="true" to={href} {...rest}>
      {children}
    </Link>
  ))
  NavLink.displayName = 'NavLink'
  const handleSelect = (value: string) => setActiveKey(value)

  return (
    <Header>
      <Navbar className="My-NavBar" appearance="inverse">
        <Navbar.Brand>
          <p style={{ color: '#fff' }}>React By Pglin</p>
        </Navbar.Brand>
        <Nav onSelect={(e) => handleSelect(e)} activeKey={activeKey}>
          <Nav.Item as={NavLink} eventKey="/home" href="/home" icon={<HomeIcon />}>
            主页
          </Nav.Item>
          <Nav.Item as={NavLink} eventKey="2" href="/login">
            关于
          </Nav.Item>
          <Nav.Item as={NavLink} eventKey="/home/product" href="/home/product">
            其他
          </Nav.Item>
          <Nav.Menu eventKey="2-1" title="应用">
            <Nav.Item eventKey="4">天气APP</Nav.Item>
            <Nav.Item eventKey="5">TodoList</Nav.Item>
            <Nav.Item eventKey="6">...</Nav.Item>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <SettingDropDown theme={theme} toggleTheme={toggleTheme} title="Settings" />
        </Nav>
      </Navbar>
    </Header>
  )
}
