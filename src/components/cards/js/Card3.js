import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NodeLogo from '../../img/logo/nodejs.png';
import '../css/CardsSkills.css';


export function Card3() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          Node.js
        </Typography>
      </Box>
      <Box>
        <img src={NodeLogo} className='nodeWH' />
      </Box>
    </Box>
  );
}

export default Card3;

