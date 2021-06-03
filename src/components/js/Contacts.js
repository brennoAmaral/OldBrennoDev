import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Linkedin from '../img/icon/linkedin-icon.svg';
import Telegram from '../img/icon/telegram-icon.svg';
import GitHub from '../img/icon/github-icon.svg';
import WhatsApp from '../img/icon/whatsapp-icon.svg';
import Gmail from '../img/icon/gmail-icon.svg';
import Freelas99 from '../img/icon/99freelas-icon.svg';
import Workana from '../img/icon/workana-icon.svg';
import openLink from '../../utils/openLink';

import '../css/Contacts.css';

export default function Contatcs() {
  return (
    <Card className="bgGrayPrimary borderNone" id="Contacs">
      <CardContent>

        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >

            <List
              component="nav"
              subheader={
                <ListSubheader component="div" id="contacts">
                  <Typography
                    className="fontTopic colorGreen"
                    variant="h2">
                    Contatos
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItem className="paddingZero" button onClick={() => openLink('https://www.linkedin.com/in/brenno-a-9822a3120/', '_blank')}>
                <img src={Linkedin} className="iconWH"
                  alt='um quadrado azul com um ln escrito em
                   brando dentro dele'/>
                <Typography variant='body1'
                  className="fontText colorGreen ">
                  Linkedin
                </Typography>
              </ListItem>

              <ListItem className="paddingZero" button onClick={() => openLink('https://github.com/brennoAmaral', '_blank')}>
                <img src={GitHub} className="iconWH"
                  alt='um circulo com um gato desenhado dentro dele'/>
                <Typography variant='body1'
                  className="fontText colorGreen ">
                  GitHub
                </Typography>
              </ListItem>

              <ListItem className="paddingZero" button onClick={() => openLink('mailto://brenno.amaral.marques@gmail.com', '_blank')}>
                <img src={Gmail} className="iconWH"
                  alt='um M nas cores zaul, vermelho, amarelo e verde'/>
                <Typography variant='body1'
                  className="fontText colorGreen ">
                  Gmail
                </Typography>
              </ListItem>

              <ListItem className="paddingZero" button onClick={() => openLink('https://t.me/BrennoDev', '_blank')}>
                <img src={Telegram} className="iconWH"
                  alt='um círculo azul com um avião de papel dentro dele'/>
                <Typography variant='body1'
                  className="fontText colorGreen ">
                  Telegram
                </Typography>
              </ListItem>

              <ListItem className="paddingZero" button onClick={() => openLink('https://wa.me/11992698039', '_blank')}>
                <img src={WhatsApp} className="iconWH"
                  alt='um balão de fala em verde com um
                  telefone desenhado dentro do balão'/>
                <Typography variant='body1'
                  className="fontText colorGreen ">
                  WhatsApp
                </Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

            <List
              component="nav"
              subheader={
                <ListSubheader component="div" id="freelas">
                  <Typography
                    className="fontTopic colorGreen "
                    variant="h2">
                    Freelas
                  </Typography>
                </ListSubheader>
              }>

              <ListItem className="paddingZero"
                button onClick={() => openLink('https://www.99freelas.com.br/dashboard', '_blank')}>
                <img src={Freelas99} className="iconWH"
                  alt='um circulo em verde com uma dois e desenhado
                   dentro dele, sendo o ultimo e desenhado ao contrário'/>
                <Typography variant='body1'
                  className="fontText colorGreen paddingZero">
                  99Freelas
                </Typography>
              </ListItem>

              <ListItem className="paddingZero"
                button onClick={() => openLink('', '_blank')}>
                <img src={Workana} className="iconWH"
                  alt='um O composto com todas as cores'/>
                <Typography variant='body1'
                  className="fontText colorGreen paddingZero">
                  Workana
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
