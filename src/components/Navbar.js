import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';
import Gif from '../assets/icons/icons8-deadlift.gif';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/">
        <img src={Gif} alt="gif" style={{ width: '48px', height: '48px', margin: '0,20px' }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Exercises
        </a>
      </Stack>
      <IconButton color="inherit" onClick={toggleDarkMode}>
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
