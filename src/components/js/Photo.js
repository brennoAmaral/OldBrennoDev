import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import Brenno from '../img/Brenno.jpg';
import '../css/Photo.css';

export default function Photo() {
  return (
    <Box className="backgroundAvatar">
      <Avatar alt="Remy Sharp" src={Brenno} className="avatarWH alignAvatar" />
    </Box>

  );
}
