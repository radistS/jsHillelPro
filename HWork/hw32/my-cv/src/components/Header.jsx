import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const navItems = [
  { label: 'About Me', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Development roadmap', path: '/roadmap' },
];

function Header() {
  const location = useLocation();
  return (
      <AppBar position="static">
        <Toolbar>
          <Box>
            {navItems.map((item) => (
                <Button
                    key={item.path}
                    color="inherit"
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                    }}
                >
                  {item.label}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
