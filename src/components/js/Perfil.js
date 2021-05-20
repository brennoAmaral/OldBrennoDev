import { Box } from '@material-ui/core';
import React from 'react';
import BasicInfo from './BasicInfo.js';
import '../css/Perfil.css';
import Photo from './Photo.js';


export default function Perfil() {
  return (
    <Box
      width="100%"
      className="textAlignAvatar topDistancePhoto cape">
      <Photo />
      <BasicInfo />

    </Box>
  );
}
