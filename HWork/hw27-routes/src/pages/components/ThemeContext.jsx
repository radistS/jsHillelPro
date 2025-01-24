import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');  // Початковий режим теми

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#556cd6' : '#90caf9',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
      },
    },
  }), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
      <ThemeContext.Provider value={{ toggleTheme, mode }}>
        <MUIThemeProvider theme={theme}>
          {children}
        </MUIThemeProvider>
      </ThemeContext.Provider>
  );
};
