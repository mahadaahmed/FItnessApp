import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner1.jpeg';

const HeroBanner = ({ darkMode }) => {
    console.log(darkMode)
  return (
    <Box
      sx={{
        mt: { lg: '150px', xs: '70px' },
        ml: { sm: '50px' },
        position: 'relative',
        p: '20px',
        backgroundColor: darkMode ? '#333333' : '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          color={darkMode ? '#FFAAAA' : '#FF2655'}
          fontSize="26px"
          fontWeight="600"
        >
          Welcome to
        </Typography>
        <Typography
          fontWeight="600"
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          mb="23px"
          mt="30px"
          color={darkMode ? '#FFFFFF' : '#000000'}
        >
          FitApp
        </Typography>

        <Typography
          fontSize="22px"
          lineHeight="30px"
          mb={3}
          color={darkMode ? '#CCCCCC' : '#000000'}
        >
          Discover a new level of fitness!
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: darkMode ? '#FFAAAA' : '#FF2655',
            padding: '19px',
          }}
        >
          Check out the Exercises
        </Button>
      </Box>

      <Typography
        fontWeight={600}
        color={darkMode ? '#FFAAAA' : '#FF2625'}
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: '100px',
          position: 'absolute',
          top: '50%',
          left: '43%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      >
        Greatness Is <br />
        Awaiting You
      </Typography>

      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{
          display: { lg: 'block', xs: 'none' },
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: 2,
          width: '312px',
          borderRadius: '10px',
          boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        }}
      />
    </Box>
  );
};

export default HeroBanner;
