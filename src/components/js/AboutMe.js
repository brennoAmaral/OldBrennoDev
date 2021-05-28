import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import '../css/AboutMe.css';

export default function AboutMe() {
  return (

    <Card className=" borderNone bgWhite" id='idAboutMe'>
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
          className="
            paragraph
            fontText
            jcText
            colorGrayPrimary
            paragraph">
            Estudante de Ti começando carreira de desenvolvimento
            de software. Cursei técnico de suporte e manutenção
            para informática no ITB(Instituto Técnológico de barueri) e
            dois semestres de análise e desenvolvimento de sistema na
            instituição FIAP(Faculdade de Informática e Administração Paulista).
             Amo desafios lógicos e aprender novas técnologias.
            Possuo conhecimento diversificado na área de TI devido
            minha formação.
        </Typography>
      </CardContent>
    </Card>

  );
}
