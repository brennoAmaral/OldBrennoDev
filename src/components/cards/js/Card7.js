import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CssLogo from '../../img/logo/css3.png';
import '../css/CardsSkills.css';


export function Card7() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h3'
          className='titleDistance
          fontTopic
          colorGreen'>
          CSS 3
        </Typography>
      </Box>
      <Box>
        <img src={CssLogo} className='cssWH'
          alt='o logo do CSS3 é um trapézio isoceles com
           CSS escrito em branco dentro dele'/>
      </Box>
    </Box>
  );
}

export default Card7;

