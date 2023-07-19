import { IconButton } from 'rsuite'
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine'
import { Icon } from '@rsuite/icons'

import { BiSolidMoon, BiSun } from 'react-icons/bi'
import { useCallback, useEffect } from 'react'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

interface Props {
  isTop: boolean
  setTop: (isTop: boolean) => void
  theme: themeUnionType
  toggleTheme: () => void
}

export function SettingHover({ isTop, setTop, theme, toggleTheme }: Props) {
  // const [isTop, setTop] = useState(false)
  // 避免在每次渲染时重新创建回调函数
  const handleScroll = useCallback(() => {
    const element = document.querySelector('.two-col-layout-right-content')
    if (element) {
      if (element.scrollTop > 100) {
        setTop(true)
      } else {
        setTop(false)
      }
    }
  }, [])

  const handleClick = () => {
    const element = document.querySelector('.two-col-layout-right-content')
    element?.scrollTo({
      top: 0,
      behavior: 'smooth' //平滑滚动到顶部
    })
  }

  useEffect(() => {
    const element = document.querySelector('.two-col-layout-right-content')
    element?.addEventListener('scroll', handleScroll)

    return () => {
      element?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'column',
        alignContent: 'flex-end',
        width: 'fit-content',
        display: 'flex',
        padding: '22px',
        zIndex: '999'
      }}
    >
      <IconButton
        id="scrollToTopButton"
        onClick={handleClick}
        icon={<ArrowUpLineIcon />}
        color="blue"
        style={{ display: isTop ? undefined : 'none', marginBottom: '5px' }}
        appearance="primary"
        circle
      />
      <IconButton
        onClick={toggleTheme}
        icon={<Icon as={theme === 'dark' ? BiSun : BiSolidMoon} />}
        color={theme === 'dark' ? 'blue' : 'red'}
        appearance="primary"
        circle
      />
    </div>
  )
}
