import { Box, Typography } from '@material-ui/core';
import React from 'react';
import MuiLogo from '../../img/logo/MUI.png';
import '../css/CardsSkills.css';


export function Card2() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          Material UI
        </Typography>
      </Box>
      <Box className=''>
        <img src={MuiLogo} className='muiWH'
          alt='o logo que representa o framework Material UI é um M azul
           com uma letra U desenhado a partir da perna direita do M'/>
      </Box>
    </Box>
  );
}

export default Card2;
