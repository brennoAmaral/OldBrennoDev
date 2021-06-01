import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import CarouselQualificacoes from './CarouselQualificacoes';


export default function Qualificacoes() {
  return (

    <Card className="borderNone textCenter " id='Qualificacoes'>
      <CardContent>
        <Typography variant='h2'
          className="fontTopic colorDarkGreen distance">
          Qualificações
        </Typography>
        <CarouselQualificacoes/>
      </CardContent>
    </Card>

  );
}
