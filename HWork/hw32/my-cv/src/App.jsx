import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Container from '@mui/material/Container';
import Experience from "./pages/Experience.jsx";

function App() {
  return (
      <>
        <Header />
        <Container sx={{ minHeight: '80vh', mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/roadmap" element={<Todo />} />
          </Routes>
        </Container>
        <Footer />
      </>
  );
}

export default App;
