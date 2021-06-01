import { Box, Typography } from '@material-ui/core';
import React from 'react';
import JsLogo from '../../img/logo/js.png';
import '../css/CardsSkills.css';


export function Card5() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          JavaScript
        </Typography>
      </Box>
      <Box>
        <img src={JsLogo} className='jsWH'
          alt='o logo da linguagem de programação javascript é as siglas JS
           dentro de um trapézio isóceles amarelo' />
      </Box>
    </Box>
  );
}

export default Card5;
