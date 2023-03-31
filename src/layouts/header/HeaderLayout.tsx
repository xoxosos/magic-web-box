import SettingDropDown from '../../components/SettingDropDown'
import { Header, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
interface Props {
  theme: themeUnionType
  toggleTheme: () => void
}
export const HeaderLayout: FC<Props> = ({ theme, toggleTheme }) => {
  const [activeKey, setActiveKey] = useState('1')
  const NavLink = React.forwardRef(({ href, children, ...rest }: any, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ))
  const handleSelect = (value: string) => {
    console.log(value)
    setActiveKey(value)
  }
  return (
    <Header>
      <Navbar appearance="inverse">
        <Navbar.Brand>
          <p style={{ color: '#fff' }}>Brand</p>
        </Navbar.Brand>
        <Nav onSelect={(e) => handleSelect(e)} activeKey={activeKey}>
          <Nav.Item as={NavLink} eventKey="1" href="/" icon={<HomeIcon />}>
            Home
          </Nav.Item>
          <Nav.Item as={NavLink} eventKey="2" href="/login">
            News
          </Nav.Item>
          <Nav.Item as={NavLink} eventKey="3" href="/product">
            Products
          </Nav.Item>
          <Nav.Menu eventKey="2-1" title="About">
            <Nav.Item eventKey="4">Company</Nav.Item>
            <Nav.Item eventKey="5">Team</Nav.Item>
            <Nav.Item eventKey="6">Contact</Nav.Item>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <SettingDropDown theme={theme} toggleTheme={toggleTheme} title="Settings" />
        </Nav>
      </Navbar>
    </Header>
  )
}
