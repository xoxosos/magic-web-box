import { Nav, Sidebar, Sidenav } from 'rsuite'
import GroupIcon from '@rsuite/icons/legacy/Group'
import React, { useState } from 'react'

import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import { useLocation } from 'react-router-dom'
import NavLink from '../../components/NavLink'

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  color: '#fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
} as { [key: string]: React.CSSProperties }

export const SideLayout = ({ expand }: { expand: boolean }) => {
  // url路径
  const { pathname } = useLocation()
  // 选中的菜单
  const [activeKey, setActiveKey] = useState(pathname || 'home')

  return (
    <Sidebar
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red'
      }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav.Header>
        <div style={headerStyles}>
          <span style={{ marginTop: 'auto', color: '#f33' }}> BRAND</span>
        </div>
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item as={NavLink} eventKey="/home" href="/home" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item
              as={NavLink}
              eventKey="/home/product"
              href="/home/product"
              icon={<GroupIcon />}
            >
              User Group
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}
