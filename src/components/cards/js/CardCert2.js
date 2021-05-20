import React from 'react';
import { Box } from '@material-ui/core';
import JsCursoEmVideo from '../../img/qualificações/jsCursoEmVideo.png';
import '../css/CardsCert.css';


export default function CardCert2() {
  return (
    <Box>
      <img src={JsCursoEmVideo} className="paddingTopImgQualificacao" />
    </Box>
  );
}
