import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import FigmaLogo from '../../img/logo/figma.png';
import '../css/CardsSkills.css';


export function Card7() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          Figma
        </Typography>
      </Box>
      <Box>
        <img src={FigmaLogo} className='figmaWH' />
      </Box>

    </Box>
  );
}

export default Card7;
