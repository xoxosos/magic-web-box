/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 16:11:15
 * @LastEditTime: 2023-07-24 10:23:37
 * @Description:
 * @FilePath: \magic-box-fontend\src\components\content-header\search-box\SearchBox.tsx
 * @Email: xoxosos666@gmail.com
 */
import GooglePlusCircleIcon from '@rsuite/icons/legacy/GooglePlusCircle'
import HomeIcon from '@rsuite/icons/legacy/Home'
import SearchIcon from '@rsuite/icons/legacy/Search'
import TwitterIcon from '@rsuite/icons/legacy/Twitter'
import { KeyboardEvent, useState } from 'react'
import { Button, ButtonToolbar, Input, InputGroup, Nav } from 'rsuite'

const styles = {
  width: '90%',
  margin: 'auto',
  borderRadius: '25px',
  border: '1px solid rgba(255,255,255,.05)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, .6)'
}

interface SearchProps {
  baidu: string
  google: string
  bing: string
}

type SearchEngine = 'baidu' | 'google' | 'bing'

// 修改 type 变量的类型为 SearchEngine
const placeholder: Map<string, string | SearchProps> = new Map()
placeholder.set('search', { baidu: '百度一下，你就知道', google: 'Google', bing: '必应搜索' })
placeholder.set('news', 'news')
placeholder.set('solutions', 'solutions')
const Navbar = ({ active, onSelect, ...props }: any) => {
  return (
    <Nav
      className="content-header-navbar"
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 10, border: 'none' }}
    >
      <Nav.Item eventKey="search" icon={<HomeIcon />}>
        搜索
      </Nav.Item>
      <Nav.Item eventKey="news">社区</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  )
}

const SearchBox = () => {
  const [active, setActive] = useState('search')
  const [val, setVal] = useState('')
  const [type, setType] = useState<SearchEngine>('baidu')

  const search = (e?: KeyboardEvent<HTMLInputElement>) => {
    const searchEngineUrls: { [key: string]: string } = {
      baidu: 'https://www.baidu.com/s?wd=',
      google: 'https://www.google.com/search?q=',
      bing: 'https://cn.bing.com/search?q='
    }
    const open = (url: string) => {
      // encodeURIComponent用于将字符串中的特殊字符进行编码，使其成为安全的 URL 组件。
      window.open(url + encodeURIComponent(val), '_blank')
    }
    if (e) {
      e.key === 'Enter' && open(searchEngineUrls[type] || searchEngineUrls.baidu)
      return
    }
    open(searchEngineUrls[type] || searchEngineUrls.baidu)
  }
  const placeholderText =
    active === 'search' ? (placeholder.get(active) as SearchProps)[type] : (placeholder.get(active) as string)
  return (
    <div>
      <h1>程序猿梦工厂-收录程序猿常用的资料</h1>
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <InputGroup inside style={styles}>
        <Input
          onKeyDown={(e) => search(e)}
          className="search-input "
          value={val}
          onChange={setVal}
          style={styles}
          placeholder={placeholderText}
        />
        <InputGroup.Button onClick={() => (active === 'search' ? search() : undefined)} className="search-input-btn">
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      {active === 'search' && (
        <ButtonToolbar className="content-header-btn">
          <Button
            onClick={() => setType('baidu')}
            color="blue"
            appearance="primary"
            startIcon={<GooglePlusCircleIcon />}
          >
            Baidu
          </Button>
          <Button
            onClick={() => setType('google')}
            color="red"
            appearance="primary"
            startIcon={<GooglePlusCircleIcon />}
          >
            Google
          </Button>
          <Button onClick={() => setType('bing')} color="cyan" appearance="primary" startIcon={<TwitterIcon />}>
            Bing
          </Button>
        </ButtonToolbar>
      )}
    </div>
  )
}
export default SearchBox
