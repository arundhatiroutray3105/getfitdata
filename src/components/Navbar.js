import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '12px', xs: '5px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50x', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="30px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;