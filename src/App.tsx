import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderComponent from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <BrowserRouter basename="/">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
