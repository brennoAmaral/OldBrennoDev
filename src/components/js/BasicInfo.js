import {
  Box,
  Typography} from '@material-ui/core';
import React from 'react';
import '../css/BasicInfo.css';

export default function BasicInfo() {
  return (


    <Box
      height="60px"
      className="bgGreen
      radiusNone
      bgGreen
      paddingTopDistance"
    >

      <Typography variant='h6' className="
      fontName
      colorPrimaryGray
      textCenter">
        Brenno Amaral Marques Oliveira
      </Typography>

      <Typography variant='subtitle1' className="
      fontOcupation
      colorPrimaryGray
      textCenter">
        Desenvolvedor de Software &amp; Tecnico de TI
      </Typography>

    </Box>


  );
}
