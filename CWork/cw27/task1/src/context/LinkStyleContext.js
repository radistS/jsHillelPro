import { createContext, useContext } from 'react';

const LinkStyleContext = createContext(null);

export const LinkStyleProvider = ({ children }) => {
  const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
  };

  return (
      <LinkStyleContext.Provider value={linkStyle}>
        {children}
      </LinkStyleContext.Provider>
  );
};

export const useLinkStyle = () => useContext(LinkStyleContext);
