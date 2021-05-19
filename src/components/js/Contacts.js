import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function Contatcs() {
  return (
    <Card className="bgGrayTertiary borderNone" id="idContacs">
      <CardContent>
        <Box>
          <Typography>
            Contatos
          </Typography>
        </Box>
        <Box>
          <svg/>
          <Typography></Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
