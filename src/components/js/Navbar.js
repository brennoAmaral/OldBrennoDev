import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@material-ui/core';
import { off, on } from '../../utils/resize';
import { Menu as MenuIcon } from '@material-ui/icons';
import LogoNav from './LogoNav';
import '../css/Navbar.css';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const { onOpen } = props;
  const [position, setPosition] = useState('fixed');

  useEffect(() => {
    function breakpoint(value) {
      console.log('breakpoint: ', value);
      if (['md', 'lg', 'xl'].includes(value)) {
        setPosition('static');
      } else {
        setPosition('fixed');
      }
    }
    on(breakpoint);
    return () => off(breakpoint);
  }, []);

  return (

    <AppBar position={position} className="bgNavColor" >
      <Toolbar style={{ justifyContent: 'space-between' }}
        className="bgGreen">
        <Box paddingRight={5} className='buttonNone'></Box>

        {/* as box com class title center servem para manter o
      brenno dev alinhado ja que o justify content está como space beetween */}
        <Box paddingRight={5} className='titleCenter'></Box>
        <LogoNav />
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
