import { IconButton } from 'rsuite'
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine'
import { Icon } from '@rsuite/icons'

import { BiSolidMoon, BiSun } from 'react-icons/bi'
import { useCallback, useEffect, useState } from 'react'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined

interface Props {
  theme: themeUnionType
  toggleTheme: () => void
}

export function SettingHover({ theme, toggleTheme }: Props) {
  const [isTop, toggleTop] = useState(false)
  // 避免在每次渲染时重新创建回调函数
  const handleScroll = useCallback(() => {
    const element = document.querySelector('main')
    if (element) {
      if (element.scrollTop > 100) {
        toggleTop(true)
      } else {
        toggleTop(false)
      }
    }
  }, [])

  const handleClick = () => {
    const element = document.querySelector('main')
    element?.scrollTo({
      top: 0,
      behavior: 'smooth' //平滑滚动到顶部
    })
  }

  useEffect(() => {
    const element = document.querySelector('main')
    element?.addEventListener('scroll', handleScroll)

    return () => {
      element?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        flexDirection: 'column',
        alignContent: 'flex-end',
        width: 'fit-content',
        left: '100%',
        display: 'flex',
        padding: '22px'
      }}
    >
      <IconButton
        id="scrollToTopButton"
        onClick={handleClick}
        icon={<ArrowUpLineIcon />}
        color="blue"
        style={{ display: isTop ? undefined : 'none' }}
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
