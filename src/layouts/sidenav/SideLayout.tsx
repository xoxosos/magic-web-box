import { Nav, Sidebar, Sidenav } from 'rsuite'
import React, { Fragment, useState } from 'react'

import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import MagicIcon from '@rsuite/icons/legacy/Magic'

interface Props {
  id: number
  name: string
  children: Props[]
}
const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  color: '#fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
} as { [key: string]: React.CSSProperties }

export const SideLayout = ({ expand, menu, initKey }: { expand: boolean; menu: any; initKey: string }) => {
  // 选中的菜单
  const [activeKey, setActiveKey] = useState(initKey)
  const handleSelect = (eventKey: string) => {
    setActiveKey(eventKey)
  }
  React.useEffect(() => {
    setActiveKey(initKey)
  }, [initKey])

  return (
    <Sidebar
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red'
      }}
      width={expand ? 250 : 56}
      collapsible
    >
      <Sidenav.Header>
        <div style={headerStyles}>
          <span style={{ marginTop: 'auto', color: '#f33' }}> BRAND</span>
        </div>
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={['1']}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={handleSelect}>
            {menu.map((item: Props) => {
              return (
                <Fragment key={item.id}>
                  {item.children.length > 0 ? (
                    <Nav.Menu title={item.name} eventKey={item.id.toString()} icon={<MagicIcon />}>
                      {item.children.map((child: Props) => {
                        return (
                          <Nav.Item key={child.id} eventKey={child.id.toString()}>
                            {child.name}
                          </Nav.Item>
                        )
                      })}
                    </Nav.Menu>
                  ) : (
                    <Nav.Item key={item.id} eventKey={item.id.toString()} icon={<DashboardIcon />}>
                      {item.name}
                    </Nav.Item>
                  )}
                </Fragment>
              )
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}
function uesEffect(arg0: () => void) {
  throw new Error('Function not implemented.')
}
