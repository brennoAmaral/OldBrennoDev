import React, { useState } from 'react';
import Navbar from './components/js/Navbar.js';
import Perfil from './components/js/Perfil';
import AboutMe from './components/js/AboutMe';
import DevSkills from '../src/components/js/DevSkills';
import Services from './components/js/Services';
import Experience from './components/js/Experience';
import Qualificacoes from './components/js/Qualificacoes';
import Footer from './components/js/Footer.js';
import SideBar from './components/js/Sidebar.js';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Box display='flex'>
      <SideBar onClose={(data) => {
        setOpen(data);
      }} open={open}
      classesName="sideBarStyle" />
      <Box id='body' className='overflowxHidden'>
        <Navbar onOpen={(data) => {
          setOpen(data);
        }} />
        <AppBar position="static" className="appBarNone">
          <Toolbar></Toolbar>
        </AppBar>

        <Perfil />
        <AboutMe />
        <DevSkills />
        <Services />
        <Experience />
        <Qualificacoes />
        <Footer />
      </Box>

    </Box >

  );
}
