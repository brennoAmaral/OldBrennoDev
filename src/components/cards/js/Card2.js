import { Box, Typography } from '@material-ui/core';
import React from 'react';
import MuiLogo from '../../img/logo/MUI.png';
import '../css/CardsSkills.css';


export function Card2() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          Material UI
        </Typography>
      </Box>
      <Box className=''>
        <img src={MuiLogo} className='muiWH' />
      </Box>
    </Box>
  );
}

export default Card2;
