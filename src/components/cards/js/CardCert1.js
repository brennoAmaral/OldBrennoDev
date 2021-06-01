import React from 'react';
import DiplomaITB from '../../img/qualificações/diplomaITB.png';
import { Box } from '@material-ui/core';
import '../css/CardsCert.css';

export function CardCert1() {
  return (
    <Box>
      <img src={DiplomaITB} className="paddingTopImgQualificacao certSize"
        alt="diploma de conclusão do curso Suporte e manuntenção para
          informática na intituição ITB(instituto técnico de barueri"/>
    </Box>
  );
}

export default CardCert1;
