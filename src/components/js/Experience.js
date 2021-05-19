import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';
import Base1 from '../img/image 12.jpg';
import '../css/Experience.css';

export default function Experience() {
  return (
    <Card className="borderNone bgGrayPrimary" >
      <CardContent>
        <Typography
          variant='h4'
          className="
            fontTopic
            colorGreen
            distance">
          Experiências
        </Typography>
        <Card className="cardWH">
          <CardActionArea href="https://www.base1it.com/">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={Base1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                variant='subtitle1'
                className="fontExp colorGrayPrimary"
                component="p">
                Base1 06/2019 - 05/2021
              </Typography>
              <Typography
                variant='subtitle1'
                className="
                paragraph
                fontText
                jcText
                colorGrayPrimary
                paragraph"
                component="p">
              Atuei como Analista de suporte técnico  para Base1
               utilizando a ferramenta NetBackup para realizar
               monitoração e gestão de backups.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardContent>
    </Card>
  );
}
