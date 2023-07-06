import HomeIcon from '@rsuite/icons/legacy/Home';
import { useState } from 'react';
import { Nav } from 'rsuite';
const Navbar = ({ active, onSelect, ...props }) => {
  return (
      <Nav className='content-header-navbar' {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 50,border:'none' }}>
      <Nav.Item eventKey="home" icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
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
             <Navbar  appearance="subtle" active={active} onSelect={setActive} />
        </div>
    )
}
export default SearchBox