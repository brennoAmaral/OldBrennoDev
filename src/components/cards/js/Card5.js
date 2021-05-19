import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CssLogo from '../../img/logo/css3.png';
import '../css/CardsSkills.css';


export function Card5() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          CSS 3
        </Typography>
      </Box>
      <Box>
        <img src={CssLogo} className='cssWH' />
      </Box>
    </Box>
  );
}

export default Card5;
