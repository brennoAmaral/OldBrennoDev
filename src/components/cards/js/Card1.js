import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ReactLogo from '../../img/logo/react.png';
import '../css/CardsSkills.css';

export function Card1() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          React
        </Typography>
      </Box>
      <Box>
        <img src={ReactLogo} className='reactWH'
          alt='o logo que representa o framework react é um
           hexagono com um atomo dentro'/>
      </Box>
    </Box>
  );
}

export default Card1;
