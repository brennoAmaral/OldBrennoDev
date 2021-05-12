import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import Developing from '../img/developing.png';
import Maintenance from '../img/maintenance.png';
import Network from '../img/network.png';
import '../css/Services.css';

export default function Services() {
  return (
    <Card className="textCenter borderNone">
      <CardContent>
        <Typography
          className="fontPrimaryTopic
          distance">Serviços</Typography>
        <Box>
          <Box className="distance">
            <img src={Developing} className="developingWH" />
          </Box>
          <Box>
            <Typography
              className="
              colorGrayPrimary
              fontText
              paragraph">
              Desenvolvo landing pages, templates e design
              responsivos para sua empresa, blog ou site pessoal.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className="descriptionDistance">
            <img src={Maintenance} className="maintenanceWH" />
          </Box>
          <Box>
            <Typography
              className="
              colorGrayPrimary
              fontText
              paragraph">
                Realizo manutenção preventiva e reativa a
                 seus computadores desktop ou notebooks.
                 Também faço orçamento para aprimoramento
                 dos computadores desktop.
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box className=" descriptionDistance">
            <img src={Network} className="networkWH" />
          </Box>
          <Box>
            <Typography
              className="
              colorGrayPrimary
              fontText
              paragraph">
             Faço instalação e configuração de sua rede local.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
