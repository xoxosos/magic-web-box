import { IconButton, Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
import CogIcon from '@rsuite/icons/legacy/Cog'
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft'
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight'
import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import GlobalProps from 'globalProps'
import { AutoFix } from '../../components/AutoFix'
import styles from '../styles/layout.module.less'
import { CustomIconButton } from '../../components/buttons/CustomIconButton'
import { useGlobalContext } from '../../context/global/GlobalContext'

interface HeaderProps extends GlobalProps {
  isTop: boolean
  expand: boolean
  setExpand: (expand: boolean) => void
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
  const { open, setOpen } = useGlobalContext()
  return (
    <Navbar appearance="subtle" style={{ background: !isTop ? undefined : 'var(--rs-body)' }} className={className}>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <CustomIconButton
          icon={expand ? <AngleLeftIcon /> : <AngleRightIcon />}
          className={styles.showSidebar}
          expand={expand}
          onChange={() => setExpand(!expand)}
        />
        <AutoFix top={50}>
          <IconButton
            className={styles.showSidebarModal}
            circle
            onClick={() => setOpen(!open)}
            size="sm"
            icon={<AngleRightIcon />}
          />
        </AutoFix>
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
