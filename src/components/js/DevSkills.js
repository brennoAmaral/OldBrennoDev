import { Card, Box, Typography, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import CarouselSkills from './CarouselSkills';
import {Card1} from '../cards/js';
import '../css/DevSkills.css';

export default function DevSkills() {
  return (
    <Card className="widthMax bgGreen borderNone" id='idDevSkills'>
      <CardContent>
        <Typography
          variant='h4'
          className="colorGrayPrimary
          fontTopic
          distanceDevSkills">
          DevSkills
        </Typography>
        <Box display={{ xl: 'none', md: 'none' }}>
          <CarouselSkills/>
        </Box>
        <Box display={{xs: 'none', md: 'block'}}
          width="100%">
          <Grid container>
            <Grid item md="6">
              <Card1/>
            </Grid>
            <Grid item md="6">
              <Card1/>
            </Grid>
            <Grid item>
              <Card1/>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
