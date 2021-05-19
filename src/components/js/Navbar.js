import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import '../css/Navbar.css';
import { green } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const { onOpen } = props;


  return (

    <AppBar position="static" className="bgNavColor" bgColor={ green } >
      <Toolbar style={{ justifyContent: 'space-between' }} className="bgGreen">
        <Box paddingRight={5}></Box>
        <Typography
          variant="h4"
          anchorOrigin={{ horizontal: 'center' }}
          className="fontTopic colorGrayPrimary ">
          Brenno(Dev);
        </Typography>
        <IconButton edge="end" color="inherit" onClick={() => {
          onOpen(true);
        }} className="colorGrayPrimary colorGrayPrimary" >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}


NavBar.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
