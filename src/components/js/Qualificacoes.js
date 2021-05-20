import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import CarouselQualificacoes from './CarouselQualificacoes';


export default function Qualificacoes() {
  return (

    <Card className="borderNone textCenter " id='idQualificacoes'>
      <CardContent>
        <Typography variant='h4'
          className="fontTopic colorGreen distance">
          Qualificações
        </Typography>
        <CarouselQualificacoes/>
      </CardContent>
    </Card>

  );
}
