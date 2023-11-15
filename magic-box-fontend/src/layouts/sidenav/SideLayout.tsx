import logo from '@/assets/images/logo.png'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import { CSSProperties, Fragment, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { AiOutlineAppstore, AiOutlineConsoleSql, AiOutlineDesktop, AiOutlineRobot } from 'react-icons/ai'
import { Nav, Sidebar, Sidenav } from 'rsuite'
import { ReactIcon } from '../../components/icon/ReactIcon'
import { useGlobalContext } from '../../context/global/GlobalContext'
interface Props {
  id: number
  name: string
  children: Props[]
}
const iconState = new Map()
iconState.set(1, AiOutlineDesktop)
iconState.set(2, AiOutlineConsoleSql)
iconState.set(24, AiOutlineRobot)
iconState.set(25, AiOutlineAppstore)
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
} as {
  [key: string]: CSSProperties
}

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
  const { index, handleIndex, selectedRef, setTabKey, key } = useGlobalContext()
  console.log(initKey)
  // 选中的菜单
  const [activeKey, setActiveKey] = useState('0')
  const handleSelect = (eventKey: string) => {
    console.log('eventKey', eventKey)
    setActiveKey(eventKey)
  }
  const itemClick = (id: number) => {
    console.log(id)
    // 设置选择的item
    setTabKey(id)
  }
  const scrollToRef = (index = 0) => {
    flushSync(() => {
      handleIndex(index)
    })
  }
  useEffect(() => {
    setActiveKey((key as number).toString())
  }, [key])
  useEffect(() => {
    // 滚动到对应的区域
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        alignToTop: true,
        behavior: 'smooth'
      })
    }
  }, [index])
  return (
    <Sidebar className={className} width={expand ? 210 : 56} collapsible>
      <Sidenav.Header>
        <div style={headerStyles}>
          <img src={logo} width="40px" height="40px" alt="" />
          <h5 className="side-logo-text" style={{ display: expand ? 'inline' : 'none' }}>
            Geek Heaven
          </h5>
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
                      style={{ fontSize: '14px' }}
                      onClick={() => scrollToRef(i)}
                      title={item.name}
                      eventKey={item.id.toString()}
                      icon={
                        <ReactIcon
                          icon={iconState.get(item.id)}
                          styles={{
                            fontSize: '2em',
                            height: '20px',
                            left: expand ? '21px' : '13px',
                            transition: 'left .2s ease'
                          }}
                        />
                      }
                    >
                      {item.children.map((child: Props) => {
                        return (
                          <Nav.Item
                            style={{ fontSize: '14px' }}
                            onClick={() => itemClick(child.id)}
                            key={child.id}
                            eventKey={child.id.toString()}
                          >
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
