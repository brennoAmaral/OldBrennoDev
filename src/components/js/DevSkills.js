import { Card, Box, Typography, CardContent } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';

import '../css/DevSkills.css';

export default function DevSkills() {
  return (
    <Card className="widthMax bgGreen borderNone">
      <CardContent>
        <Typography
          className="colorGrayPrimary
          fontPrimaryTopic
          distanceDevSkills">
          DevSkills
        </Typography>
        <Box>
          <Carousel/>
        </Box>
      </CardContent>
    </Card>
  );
}
