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
  padding: 18,
  fontSize: 16,
  height: 56,
  color: '#fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
} as { [key: string]: CSSProperties }

export const SideLayout = ({ expand, menu, initKey }: { expand: boolean; menu: any; initKey: string }) => {
  console.log(menu)
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
