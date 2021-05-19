import {
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';
import HtmlLogo from '../../img/logo/html.png';
import '../css/CardsSkills.css';


export function Card4() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          HTML 5
        </Typography>
      </Box>
      <Box>
        <img src={HtmlLogo} className='htmlWH' />
      </Box>
    </Box>
  );
}

export default Card4;
