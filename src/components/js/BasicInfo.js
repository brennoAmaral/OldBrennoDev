import {
  Box,
  Typography} from '@material-ui/core';
import React from 'react';
import '../css/BasicInfo.css';

export default function BasicInfo() {
  return (


    <Box
      className="radiusNone
      paddingTopDistance"
    >

      <Typography variant='h6' className="
      fontName
      colorGreen
      textCenter">
        Brenno Amaral Marques Oliveira
      </Typography>

      <Typography variant='h6' className="
      fontOcupation
      colorGreen
      textCenter">
        Desenvolvedor de Software &amp; Técnico de TI
      </Typography>

    </Box>


  );
}
