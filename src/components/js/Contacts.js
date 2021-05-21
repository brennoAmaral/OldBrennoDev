import { Box,
  Card, CardContent, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import Gmail from '../img/icon/gmail-icon.svg';
import Linkedin from '../img/icon/linkedin-icon.svg';
import Telegram from '../img/icon/telegram-icon.svg';
import GitHub from '../img/icon/github-icon.svg';
import WhatsApp from '../img/icon/whatsapp-icon.svg';
import Freelas99 from '../img/icon/99freelas-icon.svg';
import Workana from '../img/icon/workana-icon.svg';
import '../css/Contacts.css';

export default function Contatcs() {
  return (
    <Card className="bgGrayPrimary borderNone" id="idContacs">
      <CardContent>

        <Grid container>
          <Grid item xs='12' sm='6' md='6' lg='6' xl='6' >
            <Box>
              <Typography
                className='fontTopic colorGreen'
                variant='h4'>
                Contatos
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={Linkedin} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='https://www.linkedin.com/in/brenno-a-9822a3120/' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    Linkedin
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={GitHub} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='https://github.com/brennoAmaral' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    GitHub
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={Gmail} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    Gmail
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={WhatsApp} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    WhatApp
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box display='flex' alignItems='center'
              className='alignContacts'>
              <Box>
                <img src={Telegram} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    Telegram
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs='12' sm='6' md='6' lg='6' xl='6'>
            <Box>
              <Typography
                className='fontTopic colorGreen'
                variant='h4'>
                Freelas
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={Freelas99} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    99 Freelas
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box display='flex' alignItems='center' className='alignContacts'>
              <Box>
                <img src={Workana} className='iconWH'></img>
              </Box>
              <Box className='distanceIcon'>
                <Link href='' className='decorationNone'>
                  <Typography
                    variant='subtitle1'
                    className='fontText
                    colorGreen'>
                    Workanas
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
