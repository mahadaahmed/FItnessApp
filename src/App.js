import React, { useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3A1212',
      },
      secondary: {
        main: '#FF2625',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FF2625',
      },
      secondary: {
        main: '#3A1212',
      },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="400px" sx={{ width: { xl: '1488ps' } }} m="auto">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
      <ThemeProvider theme={{}}>
        <HeroBanner darkMode={darkMode} />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;
