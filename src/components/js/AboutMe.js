import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import '../css/AboutMe.css';

export default function AboutMe() {
  return (

    <Card className=" borderNone bgWhite">
      <CardContent>
        <Typography
          variant='h4'
          className="colorGreen
          fontTopic
          distanceAboutMe"
          align="center">
          About Me
        </Typography>
        <Typography
          variant='subtitle1'
          className="paragraph
            fontText
            jcText
            colorGrayPrimary
            paragraph">
            Estudante de Ti começando carreira de desenvolvimento
            de software. Amo desafios lógicos e aprender novas tecnologias.
            Possuo conhecimento diversificado na área de TI devido
            minha formação.
        </Typography>
      </CardContent>
    </Card>

  );
}
