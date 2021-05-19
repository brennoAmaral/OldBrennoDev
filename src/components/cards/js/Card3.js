import {Box, Typography} from '@material-ui/core';
import React from 'react';
import JsLogo from '../../img/logo/js.png';
import '../css/CardsSkills.css';


export function Card3() {
  return (
    <Box className='cardStyle'>
      <Box>
        <Typography variant='h5'
          className='titleDistance
          fontTopic
          colorGreen'>
          JavaScript
        </Typography>
      </Box>
      <Box>
        <img src={JsLogo} className='jsWH' />
      </Box>
    </Box>
  );
}

export default Card3;
