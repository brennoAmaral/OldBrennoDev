import { Card, Box, Typography, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import CarouselSkills from './CarouselSkills';
import {Card1, Card2, Card3, Card4, Card5, Card6, Card7} from '../cards/js';

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
          <CarouselSkills />
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}
          width="100%">
          <Grid container className="alignGrid">
            <Grid item md={4} lg={3} xl={3}>
              <Card1/>
            </Grid>
            <Grid item md={4} lg={3} xl={3}>
              <Card2 />
            </Grid>
            <Grid item md={4} lg={3} xl={3}>
              <Card3 />
            </Grid>
            <Grid item md={4} lg={3} xl={3}>
              <Card4 />
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Card5 />
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Card6 />
            </Grid>
            <Grid item md={12} lg={4} xl={4}>
              <Card7 />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
