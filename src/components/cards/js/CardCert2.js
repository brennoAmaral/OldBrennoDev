import React from 'react';
import { Box } from '@material-ui/core';
import JsCursoEmVideo from '../../img/qualificações/jsCursoEmVideo.png';
import '../css/CardsCert.css';


export function CardCert2() {
  return (
    <Box>
      <img src={JsCursoEmVideo}
        className="paddingTopImgQualificacao certSize"
        alt='certificado de conclusão de curso javascript
         na instituição curso em video'/>
    </Box>
  );
}

export default CardCert2;
