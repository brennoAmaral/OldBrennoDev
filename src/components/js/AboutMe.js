import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import '../css/AboutMe.css';

export default function AboutMe() {
  return (

    <Card className=" radiusNone bgWhite">
      <CardContent>
        <Typography
          className="colorGreen
          fontPrimaryTopic
          distance"
          align="center">
          About Me
        </Typography>
        <Typography>
          <p className="paragraph colorGrayPrimary fontText ">
            Estudante de Ti começando carreira de desenvolvimento
            de software. Amo desafios lógicos e aprender novas tecnologias.
            Possuo conhecimento diversificado na área de TI devido
            minha formação.
          </p>
        </Typography>
      </CardContent>
    </Card>

  );
}
