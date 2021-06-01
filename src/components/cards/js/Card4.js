import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import FigmaLogo from '../../img/logo/figma.png';
import '../css/CardsSkills.css';


export function Card4() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          Figma
        </Typography>
      </Box>
      <Box>
        <img src={FigmaLogo} className='figmaWH'
          alt='o logo do figma é um quadrado preto com as bordas arredondadas
           e dentro dele tem uma letra F sendo formada através de varios
           circulos de cores diferentes'/>
      </Box>

    </Box>
  );
}

export default Card4;

