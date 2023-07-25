import logo from '@/assets/images/mario.png'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import MagicIcon from '@rsuite/icons/legacy/Magic'
import { CSSProperties, Fragment, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Nav, Sidebar, Sidenav } from 'rsuite'
import { useGlobalContext } from '../../context/global/GlobalContext'

interface Props {
  id: number
  name: string
  children: Props[]
}

const headerStyles = {
  padding: '18px 18px 18px 9px',
  fontSize: 16,
  height: 56,
  color: '#fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
} as { [key: string]: CSSProperties }

export const SideLayout = ({
  expand,
  menu,
  initKey,
  className
}: {
  expand: boolean
  menu: any
  initKey: string
  className?: string
}) => {
  const { index, handleIndex, selectedRef } = useGlobalContext()
  // 选中的菜单
  const [activeKey, setActiveKey] = useState(initKey)
  const handleSelect = (eventKey: string) => {
    setActiveKey(eventKey)
  }
  const scrollToRef = (index = 0) => {
    flushSync(() => {
      handleIndex(index)
    })
  }
  useEffect(() => {
    setActiveKey(initKey)
  }, [initKey])
  useEffect(() => {
    // 滚动到对应的区域
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      })
    }
  }, [index])
  return (
    <Sidebar className={className} width={expand ? 210 : 56} collapsible>
      <Sidenav.Header>
        <div style={headerStyles}>
          <img src={logo} width="40px" height="40px" />

          <h5 style={{ marginTop: 'auto', color: '#f33', display: expand ? 'inline' : 'none' }}>Magic Box</h5>
        </div>
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={['1']}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={handleSelect}>
            {menu.map((item: Props, i: number) => {
              return (
                <Fragment key={item.id}>
                  {item.children.length > 0 ? (
                    <Nav.Menu
                      onClick={() => scrollToRef(i)}
                      title={item.name}
                      eventKey={item.id.toString()}
                      icon={<MagicIcon />}
                    >
                      {item.children.map((child: Props) => {
                        return (
                          <Nav.Item key={child.id} eventKey={child.id.toString()}>
                            {child.name}
                          </Nav.Item>
                        )
                      })}
                    </Nav.Menu>
                  ) : (
                    <Nav.Item
                      onClick={() => scrollToRef(i)}
                      key={item.id}
                      eventKey={item.id.toString()}
                      icon={<DashboardIcon />}
                    >
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
