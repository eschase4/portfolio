import React from 'react';
// import './App.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderComponent from './components/Header';
import Home from './pages/Home';
import ProjectSection from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import FooterComponent from './components/Footer';

import './index.css';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark'}}>
      <BrowserRouter basename="/portfolio">
        <HeaderComponent />
        {/* <div style={{ height: '100%' }} > */}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </div> */}
        <FooterComponent />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
