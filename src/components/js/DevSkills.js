import { Card, Box, Typography, CardContent } from '@material-ui/core';
import React from 'react';
import '../css/DevSkills.css';

export default function DevSkills() {
  return (
    <Card className="widthMax bgGreen borderNone">
      <CardContent>
        <Typography className="colorGrayPrimary fontPrimaryTopic">
          DevSkills
        </Typography>
        <Box>
        </Box>
      </CardContent>
    </Card>
  );
}
