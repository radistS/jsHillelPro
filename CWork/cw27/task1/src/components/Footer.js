import React from 'react';
import { useLinkStyle } from '../context/LinkStyleContext';

const Footer = () => {
  const linkStyle = useLinkStyle();
  return (
      <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
        <a href="/privacy" style={linkStyle}>Політика конфіденційності</a>
        <a href="/terms" style={linkStyle}>Умови використання</a>
      </footer>
  );
};

export default Footer;
