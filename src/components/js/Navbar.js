import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import LogoNav from './LogoNav';
import '../css/Navbar.css';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const { onOpen } = props;


  return (

    <AppBar position="static" className="bgNavColor">
      <Toolbar style={{ justifyContent: 'space-between' }}
        className="bgGreen">
        <Box paddingRight={5} className='buttonNone'></Box>

        {/* as box com class title center servem para manter o
      brenno dev alinhado ja que o justify content está como space beetween */}
        <Box paddingRight={5} className='titleCenter'></Box>
        <LogoNav/>
        <Box paddingRight={5} className='titleCenter'></Box>
        <IconButton edge="end" color="inherit" onClick={() => {
          onOpen(true);
        }} className="colorGrayPrimary colorGrayPrimary buttonNone" >
          <MenuIcon style={{ fontSize: '37' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}


NavBar.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
