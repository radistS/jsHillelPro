import React from 'react';
import { useLinkStyle } from '../context/LinkStyleContext';

const Header = () => {
  const linkStyle = useLinkStyle();
  return (
      <header style={{ backgroundColor: 'lightgray', padding: '10px' }}>
        <a href="/" style={linkStyle}>Головна</a>
        <a href="/todo" style={linkStyle}>TODO лист</a>
        <a href="/contacts" style={linkStyle}>Контакти</a>
      </header>
  );
};

export default Header;
