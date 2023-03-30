import SettingDropDown from '../../components/SettingDropDown'
import { Header, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import React from 'react'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
interface Props {
  theme: themeUnionType
  toggleTheme: () => void
}
export const HeaderLayout: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Header>
      <Navbar appearance="inverse">
        <Navbar.Brand>
          <p style={{ color: '#fff' }}>Brand</p>
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
  )
}
