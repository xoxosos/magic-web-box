/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 16:11:15
 * @LastEditTime: 2023-07-07 15:20:14
 * @Description: 
 * @FilePath: \react-test\src\components\content-header\search-box\SearchBox.tsx
 * @Email: xoxosos666@gmail.com
 */
import HomeIcon from '@rsuite/icons/legacy/Home';
import SearchIcon from '@rsuite/icons/legacy/Search';

import { useState } from 'react';
import { Input, InputGroup, Nav } from 'rsuite';
const inputStyles = {
  padding: '9px 20px',
  backgroundColor: 'transparent',
  color: '#fff',

}
const styles = {
  width: '90%',
  margin: 'auto',
  borderRadius: '50px',
  border: '1px solid rgba(255,255,255,.05)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, .6)',
};
let placeholder: Map<string, string> = new Map([
  ["home", 'home'],
  ["news", 'news'],
  ["solutions", 'solutions']
]);
const Navbar = ({ active, onSelect, ...props }) => {
  return (
    <Nav className='content-header-navbar' {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 10, border: 'none' }}>
      <Nav.Item eventKey="home" icon={<HomeIcon />}>
        搜索
      </Nav.Item>
      <Nav.Item eventKey="news">社区</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};
const SearchBox = () => {
  const [active, setActive] = useState('home');



  return (
    <div>
      <h1>程序猿梦工厂-收录程序猿常用的资料</h1>
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <InputGroup inside style={styles}>
        <Input className='search-input' style={inputStyles} placeholder={placeholder.get(active)} />
        <InputGroup.Button className='search-input-btn'>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </div>
  )
}
export default SearchBox
