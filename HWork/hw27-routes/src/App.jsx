import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Drawer from './pages/components/Drawer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutMe from './pages/AboutMe';
import ToDo from './pages/ToDo';
import {CssBaseline, Box, Toolbar} from '@mui/material';
import {ThemeProvider} from './pages/components/ThemeContext';
import ErrorBoundary from './pages/components/ErrorBoundary';

function App() {

  return (
      <ThemeProvider>
        <Router>
          <ErrorBoundary>
            <Box sx={{display: 'flex'}}>
              <CssBaseline/>
              <Drawer/>
              <Box component="main"
                   sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - 240px)`}}}>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/todo" element={<ToDo/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
                  <Route path="/about" element={<AboutMe/>}/>
                </Routes>
              </Box>
            </Box>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
  );
}

export default App;
