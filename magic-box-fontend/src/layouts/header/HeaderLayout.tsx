import { Icon } from '@rsuite/icons'
import CogIcon from '@rsuite/icons/legacy/Cog'
import HomeIcon from '@rsuite/icons/legacy/Home'
import ExitIcon from '@rsuite/icons/Exit'
import GlobalProps from 'globalProps'
import React from 'react'
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import { IconButton, Nav, Navbar } from 'rsuite'
import { AutoFix } from '../../components/autofix/AutoFix'
import { CustomIconButton } from '../../components/buttons/CustomIconButton'
import { useGlobalContext } from '../../context/global/GlobalContext'
import styles from '../styles/layout.module.less'
import { useTokenContext } from '../../context/auth/AuthContext'

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
  const { logOut } = useTokenContext()
  return (
    <Navbar
      appearance="subtle"
      style={{ background: !isTop ? undefined : 'var(--rs-body)' }}
      className={`${styles.customHeader} ${className}`}
    >
      <Navbar.Brand href="#" className={styles.customHeaderMenu}>
        <CustomIconButton
          icon={
            expand ? (
              <Icon as={BiMenuAltLeft} style={{ fontSize: '2rem' }} />
            ) : (
              <Icon as={BiMenu} style={{ fontSize: '2rem' }} />
            )
          }
          className={styles.showSidebar}
          onChange={() => setExpand(!expand)}
        />
        <AutoFix top={50}>
          <IconButton
            className={styles.showSidebarModal}
            circle
            onClick={() => setOpen(!open)}
            size="sm"
            icon={<Icon as={BiMenu} style={{ fontSize: '2rem' }} />}
          />
        </AutoFix>
      </Navbar.Brand>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        <Nav.Item as={NavLink} eventKey="/home" to="/home" icon={<HomeIcon />}>
          主页
        </Nav.Item>
        <Nav.Item as={NavLink} eventKey="2" to="https://page.look4u.top">
          关于
        </Nav.Item>
        <Nav.Menu eventKey="2-1" title="其他">
          <Nav.Item eventKey="4">天气APP</Nav.Item>
          <Nav.Item eventKey="5">TodoList</Nav.Item>
          <Nav.Item eventKey="6">...</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight className={styles.customHeaderSetting}>
        <Nav.Menu icon={<CogIcon />} placement="bottomEnd">
          <Nav.Item icon={<ExitIcon />} eventKey="4" onSelect={logOut}>
            退出登录
          </Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  )
}
