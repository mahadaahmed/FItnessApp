import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Logo from '../assets/images/fitnessapp-low-resolution-logo-black-on-transparent-background.png'

const Footer = () => {
  return (
      <Box mt="80px" bgcolor="#845555">
        <Stack 
        gap= "40px"
        alignItems="center"
        px= "40px"
        pt="24px">
          <img src={Logo} alt='logo' width="200px"/>
        </Stack>
      </Box>
    )
}

export default Footer