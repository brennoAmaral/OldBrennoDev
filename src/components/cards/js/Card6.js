import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import HtmlLogo from '../../img/logo/html.png';
import '../css/CardsSkills.css';


export function Card6() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          HTML 5
        </Typography>
      </Box>
      <Box>
        <img src={HtmlLogo} className='htmlWH'
          alt='o logo do HTML5 é um laranja isóceles amarelo
           com um numero 5 em branco escrito dentro'/>
      </Box>
    </Box>
  );
}

export default Card6;
