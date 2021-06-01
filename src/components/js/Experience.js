import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from '@material-ui/core';
import Base1 from '../img/b1.jpg';
import '../css/Experience.css';

export default function Experience() {
  return (
    <Card className="borderNone bgGrayPrimary" id='Experience'>
      <CardContent>
        <Typography
          variant='h2'
          className="
            fontTopic
            colorGreen
            distance">
          Experiências
        </Typography>


        <Grid container className="jcCenter">
          <Grid >
            <Card className="cardWH ">
              <CardActionArea href="https://www.base1it.com/">
                <CardMedia
                  className='b1ImgWH'
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={Base1}
                  title="Contemplative Reptile"
                />
                <CardContent className="bgGraySecundary">
                  <Typography
                    variant='body1'
                    className="fontText colorWhite"
                    component="p">
                    Base1 06/2019 - 05/2021
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    className="
                paragraph
                fontText
                jcText
                colorWhite
                paragraph">
                    Atuei como Analista de suporte técnico  para Base1
                    utilizando a ferramenta NetBackup para realizar
                    monitoração e gestão de backups.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
