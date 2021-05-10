import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function AboutMe() {
  return (
    <Card className=" radiusNone bgWhite ">
      <CardContent>
        <Typography className="colorGreen fontPrimaryTopic">
          About Me
        </Typography>
      </CardContent>
    </Card>
  );
}
