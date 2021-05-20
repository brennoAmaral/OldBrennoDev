import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Developing from '../img/developing.png';
import Maintenance from '../img/maintenance.png';
import Network from '../img/network.png';
import '../css/Services.css';

export default function Services() {
  return (
    <Card className="textCenter borderNone" id='idServices'>
      <CardContent>
        <Typography
          className="
          colorGreen
          fontTopic
          distance"
          variant='h4'>Serviços</Typography>


        <Grid container>
          <Grid item md='6'>

            <Box>
              <Box className="distance">
                <img src={Developing} className="developingWH" />
              </Box>
              <Box>
                <Typography
                  align='center'
                  variant='subtitle1'
                  className="
              colorGrayPrimary
              fontText
              jcText
              paragraph">
                  Desenvolvo landing pages, templates e design
                  responsivos para sua empresa, blog ou site pessoal.
                </Typography>
              </Box>
            </Box>
          </Grid>


          <Grid item md='6'>
            <Box>
              <Box className="descriptionDistance">
                <img src={Maintenance} className="maintenanceWH" />
              </Box>
              <Box>
                <Typography
                  align='center'
                  variant='subtitle1'
                  className="
              colorGrayPrimary
              fontText
              jcText
              paragraph">
                  Realizo manutenção preventiva e reativa a
                  seus computadores desktop ou notebooks.
                  Também faço orçamento para aprimoramento
                  dos computadores desktop.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs='12' sm='12' md='12' lg='12' xl='12'>
            <Box>
              <Box className="descriptionDistance">
                <img src={Network} className="networkWH" />
              </Box>
              <Box>
                <Typography
                  align='center'
                  variant='subtitle1'
                  className="
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
