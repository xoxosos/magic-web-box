import { IconButton, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import CogIcon from '@rsuite/icons/legacy/Cog'
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft'
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight'
import React, { MouseEventHandler } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import GlobalProps from 'globalProps'

interface HeaderProps extends GlobalProps {
  isTop: boolean
  expand: boolean
  setExpand: (expand: boolean) => void
}
const NavToggle = ({ expand, onChange }: { expand: boolean; onChange: MouseEventHandler<HTMLElement> }) => {
  return <IconButton circle onClick={onChange} size="sm" icon={expand ? <AngleLeftIcon /> : <AngleRightIcon />} />
}
const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props}>
    {props.children}
  </Link>
))
export const HeaderLayout = ({ isTop, expand, setExpand, className }: HeaderProps) => {
  const { pathname } = useLocation()
  const [activeKey, setActiveKey] = React.useState(pathname || '/home')
  NavLink.displayName = 'NavLink'
  return (
    <Navbar appearance="subtle" style={{ background: !isTop ? 'transparent' : 'white' }} className={className}>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Navbar.Brand>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        <Nav.Item as={NavLink} eventKey="/home" to="/home" icon={<HomeIcon />}>
          主页
        </Nav.Item>
        <Nav.Item as={NavLink} eventKey="2" to="/login">
          关于
        </Nav.Item>
        <Nav.Item as={NavLink} eventKey="/home/product" to="/home/product">
          其他
        </Nav.Item>
        <Nav.Menu eventKey="2-1" title="应用">
          <Nav.Item eventKey="4">天气APP</Nav.Item>
          <Nav.Item eventKey="5">TodoList</Nav.Item>
          <Nav.Item eventKey="6">...</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  )
}
