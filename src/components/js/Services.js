import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Developing from '../img/developing.png';
import Maintenance from '../img/maintenance.png';
import Network from '../img/network.png';
import '../css/Services.css';

export default function Services() {
  return (
    <Card className="textCenter borderNone" id='Services'>
      <CardContent>
        <Typography
          className="
          colorDarkGreen
          fontTopic
          distance"
          variant='h2'>Serviços</Typography>


        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

            <Box>
              <Box className="imgPadding">
                <img src={Developing} className="developingWH"
                  alt='uma pessoa sentado em seu local de trabalho, em seu
                   monitor há algumas linhas de codigo e
                   ao seu lado está um gato'/>
              </Box>
              <Box>
                <Typography align='center'
                  variant='body1'
                  className="
                  paddingAll
                  colorDarkGreen
                  fontText
                  jcText
                  paragraph">
                  Desenvolvimento de Sites
                </Typography>
                <Typography
                  align='center'
                  variant='body1'
                  component='p'
                  className="
                  colorGrayPrimary
                  paddingAll
                  fontText
                  jcText
                  paragraph">
                  Desenvolvo landing pages, templates e design
                  responsivos para sua empresa, blog ou site pessoal.
                </Typography>
              </Box>
            </Box>
          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box>
              <Box className="imgPadding">
                <img src={Maintenance} className="maintenanceWH"
                  alt='um monitor exibindo uma imagem de uma chave
                   de boca e em sua frente uma placa mãe'/>
              </Box>
              <Box>
                <Typography align='center'
                  variant='body1'
                  className="
                  paddingAll
                  colorDarkGreen
                  fontText
                  jcText
                  paragraph">
                  Manutenção para Computadores
                </Typography>
                <Typography
                  align='center'
                  variant='body1'
                  component='p'
                  className="
                  paddingAll
                  fontText
                  colorGrayPrimary
                  jcText
                  paragraph">
                  Realizo manutenção preventiva e reativa a
                  seus computadores desktop ou notebooks.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box>
              <Box className="imgPadding">
                <img src={Network} className="networkWH"
                  alt='tres quadrados com uma linha os conectando a um
                  quadrado em comum, representando uma rede residencial'/>
              </Box>
              <Box className=''>
                <Typography align='center'
                  variant='body1'
                  className="
                  paddingAll
                  fontText
                  colorDarkGreen
                  jcText
                  paragraph">
                Redes LAN
                </Typography>
                <Typography
                  align='center'
                  variant='body1'
                  component='p'
                  className="
                  paddingAll
                  colorGrayPrimary
                  fontText
                  jcText
                  paragraph">
                  Faço instalação e configuração de sua rede local.
                </Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>


      </CardContent>
    </Card >
  );
}
