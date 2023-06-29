import { IconButton, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import CogIcon from '@rsuite/icons/legacy/Cog'
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft'
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight'
import React, { MouseEventHandler } from 'react'

const NavToggle = ({
  expand,
  onChange
}: {
  expand: boolean
  onChange: MouseEventHandler<HTMLElement>
}) => {
  return (
    <IconButton
      circle
      onClick={onChange}
      size="sm"
      icon={expand ? <AngleLeftIcon /> : <AngleRightIcon />}
    />
  )
}
export const CustomHeaderNavbar = ({
  expand,
  setExpand
}: {
  expand: boolean
  setExpand: (expand: boolean) => void
}) => {
  const [activeKey, setActiveKey] = React.useState('1')
  return (
    <Navbar appearance="subtle" style={{ position: 'sticky', top: 0 }}>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Navbar.Brand>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item eventKey="4">Company</Nav.Item>
          <Nav.Item eventKey="5">Team</Nav.Item>
          <Nav.Item eventKey="6">Contact</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  )
}
